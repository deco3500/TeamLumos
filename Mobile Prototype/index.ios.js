import React, { Component } from 'react';
import { Text, Navigator, StyleSheet, Image, AppRegistry, View} from 'react-native';

import Root from './scene/root';
import Login from './scene/login';
import Register from './scene/register';
import HomeProfile from './scene/homeprofile';
import News from './scene/news';
import Scan from './scene/scan';

class NavController extends Component {
  
  renderScene(route, navigator) {
    if (route.name == 'root') {
      return <Root navigator={navigator} />
    }
    if (route.name == 'login') {
      return <Login navigator={navigator} />
    }
    if (route.name == 'register') {
      return <Register navigator={navigator} />
    }
    if (route.name == 'homeprofile') {
      return <HomeProfile navigator={navigator} />
    }
    if (route.name == 'news') {
      return <News navigator={navigator} />
    }
    if (route.name == 'scan') {
      return <Scan navigator={navigator} />
    }
  }
  
  render() {
    return(
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'root'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route, routeStack) =>
            Navigator.SceneConfigs.FadeAndroid}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F0F1',
  }
})

AppRegistry.registerComponent('Project', () => NavController);