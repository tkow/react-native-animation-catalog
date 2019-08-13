import React, {useState,useEffect} from 'react';
import { Animated, GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import { buttonContainerProps, styles } from './style';

interface BottomBannerFormProps {
  visible?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}


const annimatedPopUp = (positionY: Animated.Value,visible?: boolean) => {
  Animated.decay(positionY, {
    velocity: visible ? 0.5 : -0.5,
  }).start();
}
// const animConfig =
//       this.current && this.props.reverseConfig
//         ? this.props.reverseConfig
//         : this.props.config;
//     this.current = this.current ? 0 : 1;
//     const config: Object = {
//       ...animConfig,
//       toValue: this.current,
//     };

//     Animated[this.props.type](this.state.native, {
//       ...config,
//       useNativeDriver: true,
//     }).start();
//     Animated[this.props.type](this.state.js, {
//       ...config,
//       useNativeDriver: false,
//     }).start();

    // type="decay"
    // config={{velocity: 0.5}}
    // reverseConfig={{velocity: -0.5}}>
    // {anim => (
    //   <Animated.View
    //     style={[
    //       styles.block,
    //       {
    //         transform: [
    //           {
    //             translateX: anim,
    //           },
    //         ],
    //       },
    //     ]}
    //   />
    // )}


export const BottomBanner = (props: BottomBannerFormProps) => {
  const [positionY,setPositionY] = useState(new Animated.Value(0))

  useEffect(()=> {
    annimatedPopUp(positionY,props.visible)
  },[props.visible])
  return (
    <Animated.View
      style={[
        styles.bottomBunnerLayout,
        {
          transform: [
            {
              translateY: positionY
            }
          ]
        }
      ]}
    >
      <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress} {...buttonContainerProps}>
        <Text style={styles.buttonText}>
          {
            // I18n.t('応募する', '応募する')
            'test'
          }
        </Text>
      </TouchableOpacity>
    </Animated.View>
  )
  // ) : null;
};

BottomBanner.displayName = 'BottomBanner';
