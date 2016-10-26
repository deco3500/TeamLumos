import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, NavigatorIOS, TouchableHighlight} from 'react-native';

class Root extends Component{
  
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, justifyContent:'flex-end', alignItems: 'center', padding: 10}}>
          <Image style={styles.logo} source={require('../img/newstrucklogo.png')} />
        </View>
        
        <View style={{flex:1, justifyContent: 'flex-end'}}>
          <TouchableHighlight onPress={this.navigate.bind(this, 'login')} style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.navigate.bind(this, 'register')} style={[styles.button, styles.registerMargin]}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableHighlight>
          <Image style={styles.bottom} source={require('../img/bottomruler.png')} />
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
  button: {
    height: 35,
    backgroundColor: '#ED5356',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 65, 
    marginRight: 65,
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center',
    fontWeight: '300'
  },
  registerMargin: {
    marginBottom: 70,
  },
  logo: {
    width: 660/2,
    height: 260,
    resizeMode: 'stretch',
    marginBottom: 0,
  },
  bottom: {
    height: 110,
    width: 378,
    resizeMode: 'stretch',
  }
});


export default Root