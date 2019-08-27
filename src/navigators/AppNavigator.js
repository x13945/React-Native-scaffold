import HomeScreen from '../HomeScreen';
import {createAppContainer, createStackNavigator} from 'react-navigation';
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
