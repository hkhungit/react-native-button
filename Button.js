import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Button extends Component {
  render() {
    let touchableProps = {};
    if (!this.props.disabled) {
      touchableProps.onPress = this.props.onPress;
      touchableProps.onPressIn = this.props.onPressIn;
      touchableProps.onPressOut = this.props.onPressOut;
      touchableProps.onLongPress = this.props.onLongPress;
    }
    const { text = 'Button', style, styleText } =  this.props
    return (
      <TouchableOpacity
        {...touchableProps}
        accessibilityTraits="button"
        accessibilityComponentType="button"
        style={[styles.touchStyle, style]}
      >
        { this.props.children ? this.props.children : <Text style={[styles.styleText ,styleText]}>{text}</Text> }
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  touchStyle: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#4E4E4E'
  },

  styleText: {
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    color: '#FFFFFF'
  }
});
