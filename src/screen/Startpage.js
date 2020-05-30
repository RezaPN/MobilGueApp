import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Container, Row, Content, Button, Text} from 'native-base';

class Startpage extends Component {
  render() {
    return (
      <Container style={styles.Container}>
        <ImageBackground
          source={require('../assets/start.jpg')}
          style={{
            flex: 1,
            resizeMode: 'contain',
            height: '105%',
            width: '113%',
            marginRight: 60,
          }}>
          <Content>
            <Row style={{marginTop: 30, marginLeft: '18%'}}>
              <Image
                style={{marginTop: 3, height: 20, width: 120}}
                source={require('../assets/logo_white.png')}
              />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('login')}>
                <Text style={{marginLeft: '59%', color: 'white'}}>Login</Text>
              </TouchableOpacity>
            </Row>
          </Content>
          <Content>
            <Text style={styles.Title}>Let's Get Started</Text>
            <Text style={styles.subTitle}>To have your dream car</Text>
          </Content>
          <Content>
            <Button
              onPress={() => this.props.navigation.navigate('signup')}
              style={styles.ButtonDetail}>
              <Text style={styles.Button}>SIGN UP</Text>
            </Button>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Startpage;

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  Title: {
    marginTop: 70,
    fontSize: 35,
    marginLeft: 50,
    alignSelf: 'center',
    color: 'white',
  },
  subTitle: {
    fontSize: 15,
    marginLeft: 50,
    color: '#ACB7C0',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  ButtonDetail: {
    marginLeft: 50,
    alignSelf: 'center',
    width: 150,
    backgroundColor: '#4B637A',
    justifyContent: 'center',
  },
  Button: {
    alignSelf: 'center',
    color: 'white',
  },
});
