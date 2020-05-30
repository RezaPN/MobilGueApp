import React, {Component} from 'react';
import {Container, Content, Button, Text, Form, Item, Label} from 'native-base';

import {StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Header} from 'react-native-elements';

export class Register extends Component {
  render() {
    return (
      <Container>
        <Header
          containerStyle={styles.headerStyle}
          leftComponent={
            <Icon
              onPress={() => this.props.navigation.navigate('startPage')}
              name="angle-left"
              size={35}
              color="black"
            />
          }
        />
        <Container style={{marginTop: 40, marginLeft: 23}}>
          <Content>
            <Text style={styles.title}>Welcome to MobilGue</Text>
            <Text style={styles.subTitle}>
              Insert your information to continue
            </Text>
          </Content>
        </Container>
        <Container style={styles.container}>
          <Form style={{height: 300}}>
            <Input
              placeholder="Username..."
              leftIcon={<Icon name="user" size={22} color="black" />}
            />
            <Input
              placeholder="Email..."
              leftIcon={<Icon name="at" size={22} color="black" />}
            />
            <Input
              placeholder="Phone..."
              leftIcon={<Icon name="phone" size={22} color="black" />}
            />
            <Input
              placeholder="Address..."
              leftIcon={<Icon name="address-card" size={22} color="black" />}
            />
            <Input
              placeholder="Password..."
              leftIcon={<Icon name="lock" size={22} color="black" />}
            />
            <Input
              placeholder="Confirm Password..."
              leftIcon={<Icon name="lock" size={22} color="black" />}
            />
          </Form>

          <Content>
            <Button
              onPress={() => this.props.navigation.navigate('home')}
              style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </Button>
          </Content>
        </Container>
      </Container>
    );
  }
}

export default Register;

const styles = StyleSheet.create({
  headerStyle: {
    marginTop: -25,
    marginLeft: 10,
    backgroundColor: '#fff',
  },
  container: {
    marginLeft: 20,
    marginTop: -320,
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    marginTop: 20,
    marginLeft: 23,
    borderRadius: 15 / 2,
    width: '90%',
    justifyContent: 'center',
    backgroundColor: '#8984F7',
  },
  button2: {
    marginTop: 45,
    marginLeft: 23,
    borderRadius: 15 / 2,
    width: '90%',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 20,
  },
  buttonText2: {
    fontSize: 14,
    color: '#8d9093',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#8d9093',
  },
});
