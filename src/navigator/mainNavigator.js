import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen20121234Navigator from '../features/BlankScreen20121234/navigator';
import Settings121213Navigator from '../features/Settings121213/navigator';
import BlankScreen0121195Navigator from '../features/BlankScreen0121195/navigator';
import Settings121180Navigator from '../features/Settings121180/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen20121234: { screen: BlankScreen20121234Navigator },
Settings121213: { screen: Settings121213Navigator },
BlankScreen0121195: { screen: BlankScreen0121195Navigator },
Settings121180: { screen: Settings121180Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
