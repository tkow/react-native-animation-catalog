/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { Fragment, useState, useEffect } from "react";
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

interface BannerAnimationProps {}

export default (props: BannerAnimationProps) => {
  const [bottomBanner, setBottomBanner] = useState({
    timerExists: false,
    visible: false,
    animatedStatus: AnimatedStatus.STOP
  });

  // useEffect(() => {
  //   if (!bottomBanner.timerExists) {
  //     const timer = setInterval(() => {
  //       if (bottomBanner.animatedStatus === AnimatedStatus.STOP) {
  //         clearInterval(timer);
  //         setBottomBanner({
  //           ...bottomBanner,
  //           visible: false,
  //           timerExists: false
  //         });
  //       }
  //     }, 1000);
  //   }
  // }, [bottomBanner.timerExists]);

  return (
    <Fragment>
      <ScrollView
      // onScrollBeginDrag={e => {
      //   if (bottomBanner.animatedStatus === AnimatedStatus.STOP) {
      //     setBottomBanner({ ...bottomBanner, visible: true });
      //   }
      // }}
      // onScrollEndDrag={e => {
      //   if (bottomBanner.animatedStatus === AnimatedStatus.STOP) {
      //     setBottomBanner({ ...bottomBanner, visible: false });
      //   } else if (!bottomBanner.timerExists) {
      //     setBottomBanner({ ...bottomBanner, timerExists: true });
      //   }
      // }}
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
              if (bottomBanner.animatedStatus === AnimatedStatus.STOP) {
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
          setBottomBanner({ ...bottomBanner, animatedStatus: result.status });
        }}
      />
    </Fragment>
  );
};
