import NavigationBar from 'react-native-navbar'
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, NavigatorIOS, TextInput, Image, TouchableHighlight} from 'react-native';

class HomeProfile extends Component{
  
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title={{ title: "NewsTruck", tintColor: 'black', }}
          leftButton={{ title: 'Back', }}
          rightButton={{ title: 'Edit', }}
          style={{ backgroundColor: "#FAFAFA", }}
          statusBar={{ tintColor: "#FAFAFA", }}
        />
        <View style={{height: 1, width: 400, backgroundColor:'black'}}/>
        <View style={{flexDirection:'row', justifyContent:'flex-end', paddingRight: 10, margin: 5}}>
          <Text style={{fontSize: 12}}>Welcome Team Lumos</Text>
        </View>
        <View style={{height: 1, width: 400, backgroundColor:'black'}}/>
        <View style={{flexDirection:'row', height: 200, paddingTop: 25}}>
          <View style={{flex: 0.4, paddingLeft:25}}>
            <Image style={{borderRadius: 75, height: 150, width: 150}} source={require('../img/profilepic.jpg')} />
          </View>
          <View style={{flex: 0.6, paddingLeft:30}}>
            <Text style={{fontWeight: '500', fontSize:22}}>Team Lumos</Text>
            <Text style={{fontSize: 12}}>Personal Description</Text>
          </View>
        </View>
        <View>
          <TouchableHighlight onPress={this.navigate.bind(this, 'news')} style={styles.button}>
            <Text style={styles.buttonText}>VIEW NEWS</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this, 'scan')} style={styles.button}>
            <Text style={styles.buttonText}>SCAN NEWS</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
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
});

export default HomeProfile