import React, {Fragment, useState} from "react";
import { BottomBanner } from "../../components/BottomBannar";
import Sample from "../../components/sample";
import { Alert,ScrollView, View, Text } from "react-native";

interface BannerAnimationProps {

}

export default (props: BannerAnimationProps) => {
  const [bottomBanner, setBottomBanner] = useState({
    visible: false
  });
  return (
    <Fragment>
      <ScrollView
        onScrollBeginDrag={e => {
          setBottomBanner({ visible: true });
        }}
        onScrollEndDrag={e => {
          setTimeout(() => {
            setBottomBanner({ visible: false });
          }, 2000);
        }}
      >
        <View style={{height:1000, width:'100%', justifyContent: "center",alignItems: "center"}}>
          <Text>
            test
          </Text>
        </View>
      </ScrollView>
      <BottomBanner
        visible={bottomBanner.visible}
        onPress={()=> {
          Alert.alert('test','test')
        }}
      />
    </Fragment>
  );
}