/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Fragment} from 'react';
import MainNavigator from "./navigations";
import { NavigationContainerComponent } from "react-navigation";
// import Sample from "./components/sample";

class Navigation extends React.Component<any> {
  private navigator: NavigationContainerComponent | null | undefined;
  public render = () => {
    return (
      <MainNavigator
        ref={nav => {
          this.navigator = nav;
        }}
      />
    );
  };

}

const App = () => {
  return (
    <Fragment>
      <Navigation/>
    </Fragment>
  );
};

export default App;
