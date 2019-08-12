import React from 'react';
import { buttonContainerProps,styles } from './style';
import { GestureResponderEvent,View,TouchableOpacity,Text } from 'react-native';

interface BottomBannerFormProps {
  visible?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

export const BottomBanner = (props: BottomBannerFormProps) => {
  return props.visible ? (
    <View style={styles.bottomBunnerLayout}>
      <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress} {...buttonContainerProps}>
        <Text style={styles.buttonText}>
          {
            // I18n.t('応募する', '応募する')
            'test'
          }
        </Text>
      </TouchableOpacity>
    </View>
  ) : null;
};

BottomBanner.displayName = 'BottomBanner';
