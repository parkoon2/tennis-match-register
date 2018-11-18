import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

// Components
import Login from './component/Login'
import Main from './component/Main'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      isAuthenticated: false
    }
  }

  componentDidMount() {
    console.log('!!!')
  }

  render() {
    const { isAuthenticated } = this.state
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        { this.state.isAuthenticated ? (
          <Main />
        ) : (
          <Login />
        )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
