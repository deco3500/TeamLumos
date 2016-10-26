import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, NavigatorIOS, TextInput, Image, TouchableHighlight} from 'react-native';

class Login extends Component {
  
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 0.2, justifyContent:'center', alignItems:'center'}}>
          <Image style={styles.register} source={require('../img/login.png')} />
        </View>
        <View style={styles.containermiddle}>
          <TextInputField name="E-mail:"/>
          <TextInputFieldPW name="Password:"/>
        </View>
        <View style={{flex: 0.4, justifyContent:'flex-end'}}>
            <TouchableHighlight onPress={this.navigate.bind(this, 'homeprofile')} style={styles.button}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableHighlight>
          <Image style={styles.bottom} source={require('../img/bottomruler.png')} />
        </View>
      </View>
    );
  }
}

class TextInputField extends Component {
  render() {
    return (
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 20}}>{this.props.name}</Text>
        <View style={{backgroundColor: '#D8D8D8', height: 32, width: 285}}>
          <TextInput style={{height:32, padding:1}}/>
        </View>
      </View>
    );
  }
}

class TextInputFieldPW extends Component {
  render() {
    return (
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 20}}>{this.props.name}</Text>
        <View style={{backgroundColor: '#D8D8D8', height: 32, width: 285}}>
          <TextInput style={{height:32, padding:1}} secureTextEntry/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 35,
    fontWeight: "300"
  },
  containermiddle: {
    flex: 0.4, 
    justifyContent:'center', 
    alignItems:'center',
  },
  register: {
    flex: 1,
    width: 378,
    resizeMode: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 28,
    marginBottom: 35,
  },
  bottom: {
    height: 110,
    width: 378,
    resizeMode: 'stretch',
    marginTop: 100,
  },
  button: {
    height: 45,
    backgroundColor: '#ED5356',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 100, 
    marginRight: 100,
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center',
    fontWeight: '300'
  },
});

export default Login