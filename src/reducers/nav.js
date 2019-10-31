import {AppNavigator} from '../navigators/AppNavigator';
import {NavigationActions, StackActions} from 'react-navigation';
// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

export default function navState(state = initialNavState, action) {
  const {type} = action;
  let nextState;
  switch (type) {
    case 'Detail': {
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'Detail',
        }),
        state,
      );
      break;
    }
    case 'Back': {
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
      );
      break;
    }
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
