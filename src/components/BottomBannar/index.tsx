import React, { useState, useEffect } from "react";
import {
  Animated,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  ViewStyle
} from "react-native";
import { buttonContainerProps, styles } from "./style";

export enum AnimatedStatus {
  UNINITIALIZED,
  FADEIN_STOP,
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
    status: AnimatedStatus.UNINITIALIZED,
    positionY: new Animated.Value(0),
    show: props.visible,
    opacity: new Animated.Value(0)
  });
  useEffect(() => {
    if (animParameters.status === AnimatedStatus.UNINITIALIZED) {
      const nextStatus = { status: AnimatedStatus.STOP };
      setAnimationState({ ...animParameters, ...nextStatus });
      props.onChangeAnimatedStatus && props.onChangeAnimatedStatus(nextStatus);
    } else if (props.visible) {
      const nextStatus = { status: AnimatedStatus.ANIMATING };
      setAnimationState({
        ...animParameters,
        ...nextStatus,
        show: true
      });
      props.onChangeAnimatedStatus && props.onChangeAnimatedStatus(nextStatus);
      Animated.parallel([
        Animated.decay(animParameters.positionY, {
          velocity: -0.1
        }),
        Animated.timing(animParameters.opacity, {
          toValue: 1,
          duration: 1000
        })
      ]).start(() => {
        const nextStatus = { status: AnimatedStatus.FADEIN_STOP };
        setAnimationState({
          ...animParameters,
          ...nextStatus,
          show: true
        });
        props.onChangeAnimatedStatus &&
          props.onChangeAnimatedStatus(nextStatus);
      });
    } else {
      const nextStatus = { status: AnimatedStatus.ANIMATING };
      setAnimationState({
        ...animParameters,
        ...nextStatus
      });
      props.onChangeAnimatedStatus && props.onChangeAnimatedStatus(nextStatus);
      Animated.sequence([
        Animated.delay(props.fadeOutDelay || 500),
        Animated.parallel([
          Animated.decay(animParameters.positionY, {
            velocity: 0.1
          }),
          Animated.timing(animParameters.opacity, {
            toValue: 0,
            duration: 1000
          })
        ])
      ]).start(() => {
        const nextStatus = { status: AnimatedStatus.STOP };
        setAnimationState({
          ...animParameters,
          ...nextStatus,
          show: false
        });
        props.onChangeAnimatedStatus &&
          props.onChangeAnimatedStatus(nextStatus);
      });
    }
  }, [props.visible]);
  return (
    <Animated.View
      style={[
        styles.bottomBunnerLayout,
        {
          opacity: animParameters.opacity as any,
          transform: [
            {
              translateY: animParameters.positionY as any
            }
          ],
          display: animParameters.show ? undefined : "none"
        } as ViewStyle
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
  );
  // : null;
};

BottomBanner.displayName = "BottomBanner";
