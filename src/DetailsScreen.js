import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, ToastAndroid} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-root-toast';

import {minus, plus, plusAsync} from './actions/counter';
import {Colors} from 'react-native/Libraries/NewAppScreen';

class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Detail Screen',
  };

  increment = () => {
    const {increment} = this.props;
    increment();
  };

  decrement = () => {
    const {decrement} = this.props;
    decrement();
  };

  render() {
    const {
      counter: {value},
    } = this.props;

    console.log(Object.keys(this.props));

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'stretch',
        }}>
        <Text>Details Screen</Text>
        <View
          style={{
            alignSelf: 'stretch',
            margin: 20,
            height: 200,
            justifyContent: 'space-between',
          }}>
          <Button style={styles.button} title="+" onPress={this.increment}/>
          <Button style={styles.button} title="-" onPress={this.decrement}/>
          <Button
            style={styles.button}
            title="async +"
            onPress={this.incrementAsync}
          />
          <Text
            style={{
              height: 50,
              alignSelf: 'stretch',
              backgroundColor: 'lightgray',
            }}>
            {value}
          </Text>
        </View>
      </View>
    );
  }

  incrementAsync = () => {
    const {incrementAsync} = this.props;
    Toast.show('Wait several seconds');
    incrementAsync();
  };
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  button: {
    width: 200,
    marginTop: 160,
  },
});

const mapStateToProps = ({counter}) => {
  return {
    counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(plus()),
    incrementAsync: () => dispatch(plusAsync()),
    decrement: () => dispatch(minus()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsScreen);
