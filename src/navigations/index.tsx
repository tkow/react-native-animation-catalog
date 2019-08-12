
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { FooterNavigator } from './footer'


const TopPage = createSwitchNavigator(
  {
    FooterNavigator,
  },
  {
    initialRouteName: 'FooterNavigator'
  }
)

export default createAppContainer(TopPage)
