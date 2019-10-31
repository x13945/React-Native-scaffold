import HomeScreen from '../HomeScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import DetailsScreen from '../DetailsScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailsScreen,
  },
});

export default createAppContainer(AppNavigator);
