import NavigationBar from 'react-native-navbar'
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, NavigatorIOS, TextInput, Image, TouchableHighlight} from 'react-native';

class News extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {text: ""}
  }
  
  postcomment(comment) {
    var url = 'http://54.187.85.6/gitrepodeco3801/public/addcomment';
    return fetch(url , {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: comment, 
      })
    })
      .then((response) => response.json())
      .then((responseData) => {
        return responseData;
      })
      .catch(function (err) {
        return err;
      });
  }
  
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
          style={{ backgroundColor: "#FAFAFA", }}
          statusBar={{ tintColor: "#FAFAFA", }}
        />
        <View style={{height: 1, width: 400, backgroundColor:'black'}}/>
        <View>
          <Image style={{width: 450, resizeMode : 'contain', marginTop: 30, marginLeft: -40}} source={require('../img/news.png')} />
        </View>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 22, fontWeight: '600'}}>Social: News Title</Text>
          <View style={{height: 1, width: 400, backgroundColor:'black', marginLeft: -20}}/>
          <Text style={{marginTop: 10}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
        </View>
        <View style={{padding: 20}}>
          <TextInput
            placeholder="Comment Here"
        style={{height: 30, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
        </View>
        <View style={{marginLeft: 25, marginRight: 25}}>
          <TouchableHighlight onPress={this.postcomment.bind(this, this.state.text)} style={styles.button}>
              <Text style={styles.buttonText}>SUBMIT</Text>
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
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 22,
    color: '#FFFFFF',
    alignSelf: 'center',
    fontWeight: '300'
  },
});


export default News