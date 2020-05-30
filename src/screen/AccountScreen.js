/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Footer,
  FooterTab,
  Text,
  Button,
  Left,
  Body,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderCustom from './HeaderCustom';
import {connect} from 'react-redux';

class AccountScreen extends Component {
  render() {

    return (
      <Container>
        <HeaderCustom
          name=""
          iconleft="arrow-circle-left"
          iconright="user"
          nameright="Account"
        />

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: this.props.account.photo}} />
                <Body>
                  <Text
                    style={{
                      textAlign: 'left',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    {this.props.account.name}
                  </Text>
                  <Text style={{fontSize: 15}}>
                    {this.props.account.detail.phone}
                  </Text>
                  <Text style={{fontSize: 15}}>
                    {this.props.account.detail.email}
                  </Text>
                </Body>
                <Icon
                  style={{fontSize: 20, color: '', paddingLeft: 10}}
                  name="edit"
                />
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Icon size={25} name="clock-o" style={{color: 'black'}} />
                <Body>
                  <Text
                    style={{textAlign: 'left', fontSize: 18, fontWeight: ''}}>
                    {' '}
                    History Order{' '}
                  </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Icon size={25} name="google-wallet" style={{color: 'black'}} />
                <Body>
                  <Text
                    style={{textAlign: 'left', fontSize: 18, fontWeight: ''}}>
                    {' '}
                    E-Wallet Settings{' '}
                  </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Icon size={25} name="language" style={{color: 'black'}} />
                <Body>
                  <Text
                    style={{textAlign: 'left', fontSize: 18, fontWeight: ''}}>
                    {' '}
                    Change Language{' '}
                  </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Icon size={25} name="user" style={{color: 'black'}} />
                <Body>
                  <Text
                    style={{textAlign: 'left', fontSize: 18, fontWeight: ''}}>
                    {' '}
                    Privacy Policy & Terms of Service{' '}
                  </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Icon size={25} name="asdasd" style={{color: 'black'}} />
                <Body>
                  <Text
                    style={{textAlign: 'left', fontSize: 18, fontWeight: ''}}>
                    {' '}
                    Help{' '}
                  </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>

          <Card style={{paddingTop: 90, borderColor: 'white'}}>
            <Button
              full
              bordered
              danger
              onPress={() => this.props.navigation.navigate('login')}>
              <Text>Log Out</Text>
            </Button>
          </Card>
        </Content>

        <Footer>
          <FooterTab style={{backgroundColor: '#F3F4F5'}}>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate('home')}>
              <Icon size={25} name="home" style={{color: 'black'}} />
              <Text style={{color: 'black'}}>Home</Text>
            </Button>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate('Cart')}>
              <Icon size={25} name="shopping-cart" />
              <Text style={{color: 'black'}}>Cart</Text>
            </Button>

            <Button
              vertical
              onPress={() => this.props.navigation.navigate('Account')}>
              <Icon size={25} name="user" style={{color: '#6ec199'}} />
              <Text style={{color: 'black'}}>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStatetoProps = state => {
  return {
    account: state.account.account,
  };
};

export default connect(
  mapStatetoProps,
  null,
)(AccountScreen);
