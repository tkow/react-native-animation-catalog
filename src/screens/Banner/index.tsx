import React, {Fragment} from "react";
import { BottomBanner } from "../../components/BottomBannar";
import Sample from "../../components/sample";
import { Alert } from "react-native";

interface BannerAnimationProps {

}

export default (props: BannerAnimationProps) => {
  return (
    <Fragment>
      <Sample/>
      <BottomBanner
        visible={true}
        onPress={()=> {
          Alert.alert('test','test')
        }}
      />
    </Fragment>
  );
}