import React, { useState, useEffect } from "react";
import {
  Animated,
  GestureResponderEvent,
  Text,
  TouchableOpacity
} from "react-native";
import { buttonContainerProps, styles } from "./style";

export enum AnimatedStatus {
  STOP,
  ANIMATING
}

interface BottomBannerFormProps {
  visible?: boolean;
  onPress: (event: GestureResponderEvent) => void;
  onChangeAnimatedStatus?: (params: { status: AnimatedStatus }) => void;
  fadeOutDelay?: number;
}

export const BottomBanner = (props: BottomBannerFormProps) => {
  const [animParameters, setAnimationState] = useState({
    positionY: new Animated.Value(0),
    show: props.visible,
    opacity: new Animated.Value(0)
  });
  useEffect(() => {
    props.onChangeAnimatedStatus &&
      props.onChangeAnimatedStatus({ status: AnimatedStatus.ANIMATING });
    if (!props.visible) {
      setAnimationState({ ...animParameters, show: true });
      Animated.parallel([
        Animated.decay(animParameters.positionY, {
          velocity: -0.1
        }),
        Animated.timing(animParameters.opacity, {
          toValue: 1,
          duration: 1000
        })
      ]).start(() => {
        props.onChangeAnimatedStatus &&
          props.onChangeAnimatedStatus({ status: AnimatedStatus.STOP });
      });
    } else if (props.visible) {
      setTimeout(() => {
        Animated.parallel([
          Animated.decay(animParameters.positionY, {
            velocity: 0.1
          }),
          Animated.timing(animParameters.opacity, {
            toValue: 0,
            duration: 1000
          })
        ]).start(() => {
          setAnimationState({ ...animParameters, show: false });
          props.onChangeAnimatedStatus &&
            props.onChangeAnimatedStatus({ status: AnimatedStatus.STOP });
        });
      }, props.fadeOutDelay || 2000);
    }
  }, [props.visible]);
  return animParameters.show ? (
    <Animated.View
      style={[
        styles.bottomBunnerLayout,
        {
          opacity: animParameters.opacity,
          transform: [
            {
              translateY: animParameters.positionY
            }
          ]
        }
      ]}
    >
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={props.onPress}
        {...buttonContainerProps}
      >
        <Text style={styles.buttonText}>{"test"}</Text>
      </TouchableOpacity>
    </Animated.View>
  ) : null;
};

BottomBanner.displayName = "BottomBanner";
