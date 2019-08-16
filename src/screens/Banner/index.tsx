/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { Fragment, useState, useEffect, useCallback } from "react";
import { BottomBanner, AnimatedStatus } from "../../components/BottomBannar";
import Sample from "../../components/sample";
import {
  Alert,
  ScrollView,
  View,
  Text,
  Animated,
  Easing,
  Button
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import debounce from "lodash/debounce";
import throttle from "lodash/throttle";

interface BannerAnimationProps {}

export default (props: BannerAnimationProps) => {
  const [bottomBanner, setBottomBanner] = useState({
    timerExists: false,
    visible: false,
    animatedStatus: AnimatedStatus.STOP
  });

  const [initialized, initialize] = useState(false);

  useEffect(() => {
    if (!initialized) {
      initialize(true);
    } else if (!bottomBanner.timerExists) {
      setBottomBanner({
        ...bottomBanner,
        timerExists: true
      });
      const timer = setInterval(() => {
        if (bottomBanner.animatedStatus === AnimatedStatus.FADEIN_STOP) {
          clearInterval(timer);
          setBottomBanner({
            ...bottomBanner,
            visible: false,
            timerExists: false
          });
        }
      }, 1000);
    }
  }, [bottomBanner.animatedStatus]);

  const onScrollBeginDrag = useCallback(
    throttle(e => {
      if (bottomBanner.animatedStatus === AnimatedStatus.STOP) {
        setBottomBanner({ ...bottomBanner, visible: true });
      }
    }, 1000),
    [bottomBanner.visible, bottomBanner.animatedStatus]
  );

  const onScrollEndDrag = useCallback(
    throttle(e => {
      if (!bottomBanner.timerExists) {
        setBottomBanner({
          ...bottomBanner,
          timerExists: true
        });
      }
    }, 1000),
    [
      bottomBanner.visible,
      bottomBanner.animatedStatus,
      bottomBanner.timerExists
    ]
  );

  return (
    <Fragment>
      <ScrollView
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEndDrag}
      >
        <View
          style={{
            height: 1000,
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button
            onPress={() => {
              if (bottomBanner.animatedStatus !== AnimatedStatus.ANIMATING) {
                setBottomBanner({
                  ...bottomBanner,
                  visible: !bottomBanner.visible
                });
              }
            }}
            title={"test"}
          />
        </View>
      </ScrollView>
      <BottomBanner
        visible={bottomBanner.visible}
        onPress={() => {
          Alert.alert("test", "test");
        }}
        onChangeAnimatedStatus={result => {
          debugger;
          setBottomBanner({ ...bottomBanner, animatedStatus: result.status });
        }}
      />
    </Fragment>
  );
};
