/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { Fragment, useState } from "react";
import { BottomBanner, AnimatedStatus } from "../../components/BottomBannar";
import Sample from "../../components/sample";
import { Alert, ScrollView, View, Text, Animated, Easing } from "react-native";

interface BannerAnimationProps {}

export default (props: BannerAnimationProps) => {
  const [bottomBanner, setBottomBanner] = useState({
    timerExists: false,
    visible: false,
    animatedStatus: AnimatedStatus.STOP
  });

  return (
    <Fragment>
      <ScrollView
        onScrollBeginDrag={e => {
          if (bottomBanner.animatedStatus === AnimatedStatus.STOP) {
            setBottomBanner({ ...bottomBanner, visible: true });
          }
        }}
        onScrollEndDrag={e => {
          if (bottomBanner.animatedStatus === AnimatedStatus.STOP) {
            setBottomBanner({ ...bottomBanner, visible: false });
          } else if (!bottomBanner.timerExists) {
            setBottomBanner({ ...bottomBanner, timerExists: true });
            const timer = setInterval(() => {
              if (bottomBanner.animatedStatus === AnimatedStatus.STOP) {
                clearInterval(timer);
                setBottomBanner({
                  ...bottomBanner,
                  visible: false,
                  timerExists: false
                });
              }
            }, 1000);
          }
        }}
      >
        <View
          style={{
            height: 1000,
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>test</Text>
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
