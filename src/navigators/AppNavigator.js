import HomeScreen from '../HomeScreen';
import {connect} from 'react-redux';

import {createStackNavigator} from 'react-navigation';
import DetailsScreen from '../DetailsScreen';
import {createReduxContainer} from 'react-navigation-redux-helpers';

export const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailsScreen,
  },
});

const App = createReduxContainer(AppNavigator);
const mapStateToProps = state => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;
