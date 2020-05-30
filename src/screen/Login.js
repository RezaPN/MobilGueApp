import React, {Component} from 'react';
import {Container, Content, Button, Text, Form, Item, Label} from 'native-base';

import {StyleSheet, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Header} from 'react-native-elements';

import axios from '../axios';
import {connect} from 'react-redux';

export class Login extends Component {
  state = {
    username: 'empty',
    password: '',
  };

  usernameHandler = event => {
    this.setState({username: event});
  };

  passwordHandler = event => {
    this.setState({password: event});
  };

  subbmitHandler = event => {
    // userjson/user?name=Fadhil&detail.phone=0897654321
    axios
      .get(
        `userjson/user?name=${this.state.username}&detail.phone=${
          this.state.password
        }`,
      )
      .then(result => {
        console.log(result.data);
        this.props.accountSubmit(result.data[0]);
        this.props.listFavSubmit(result.data[0].listFavorite);
        // this.props.navigation.navigate('home');
        if (this.props.password.detail.phone == this.state.password) {
          this.props.navigation.navigate('home');
        } else {
          Alert.alert('Account Not Found');
        }
      })
      .catch(err => {
        Alert.alert(
          'Account Not Found',
          `${err}`,
          [{text: 'OK', onPress: () => console.log('Ok Pressed')}],
          {cancelable: true},
        );
      });
  };

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
        <Container style={{marginTop: 80, marginLeft: 23}}>
          <Content>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subTitle}>
              Enter your credential to continue
            </Text>
          </Content>
        </Container>
        <Container style={styles.container}>
          <Content>
            <Form>
              <Input
                placeholder="Username"
                leftIcon={<Icon name="user" size={22} color="black" />}
                onChangeText={this.usernameHandler}
              />
              <Input
                placeholder="Password"
                leftIcon={<Icon name="lock" size={22} color="black" />}
                onChangeText={this.passwordHandler}
                secureTextEntry={true}
                keyboardType="number-pad"
              />
            </Form>
          </Content>
          <Content>
            <Button onPress={this.subbmitHandler} style={styles.button}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </Button>
            <Button
              bordered
              onPress={() => this.props.navigation.navigate('signup')}
              style={styles.button2}>
              <Text style={styles.buttonText2}>
                Oops... I don't have Account
              </Text>
            </Button>
          </Content>
        </Container>
      </Container>
    );
  }
}

const mapDispacthToProps = dispatch => {
  return {
    accountSubmit: event => dispatch({type: 'INPUT_ACCOUNT', value: event}),
    listFavSubmit: event => dispatch({type: 'INPUT_LISTFAV', value: event}),
  };
};

const mapStateToProps = state => {
  return {
    password: state.account.account,
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps,
)(Login);

const styles = StyleSheet.create({
  headerStyle: {
    marginTop: -25,
    marginLeft: 10,
    backgroundColor: '#fff',
  },
  container: {
    marginLeft: 20,
    marginTop: -230,
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    marginTop: 0,
    marginLeft: 43,
    borderRadius: 15 / 2,
    width: '80%',
    justifyContent: 'center',
    backgroundColor: '#8984F7',
  },
  button2: {
    marginTop: 45,
    marginLeft: 43,
    borderRadius: 15 / 2,
    width: '80%',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 20,
  },
  buttonText2: {
    fontSize: 13,
    color: '#8d9093',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#8d9093',
  },
});
