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

  _loginSuccess = () => {
    alert('로그인 성공')
    this.setState({
      isAuthenticated: true
    })
  }
  
  _loginFail = () => {
    alert('로그인 실패')

  }

  render() {
    const { isAuthenticated } = this.state
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        { this.state.isAuthenticated ? (
          <Main />
        ) : (
          <Login 
            _loginSuccess={this._loginSuccess}
            _loginFail={this._loginFail}
            
            />
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
