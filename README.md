# react-native-button
A button for React apps

# Usage
JavaScript files with `import Button from 'react-native-button'`.

```js
import React, { Component } from 'react';
import Button from 'react-native-button';

export default class ExampleComponent extends Component {
  constructor(props, context) {
    super(props, context);
  }
  _handlePress() {
    console.log('Pressed!');
  }
  render() {
    return (
      <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={() => this._handlePress()}>
        <Text>Press Me!<Text>
      </Button>
    );
  }
};

```


# License
 
MIT
