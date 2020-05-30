/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Footer,
  FooterTab,
  Text,
  Button,
  Left,
  Right,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderCustom from './HeaderCustom';
import {connect} from 'react-redux';

class CartScreen extends Component {
 

  render() {
    const listcart = this.props.cart.map((result, key) => {
      if (result.lenght !== 0) {
        return (
          <Card >
            <CardItem cardBody>
              <Image
                source={{
                  uri: result.photo,
                }}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>

            <CardItem header>
              <Text
                style={{textAlign: 'left', fontSize: 20, fontWeight: 'bold'}}>
                Mazda 3 Sedan{' '}
              </Text>
            </CardItem>

            <CardItem style={{paddingTop: 0}}>
              <Text style={{fontSize: 15}}>
                Sedan |1998 cc| Bensin | 5 Penumpang
              </Text>
            </CardItem>

            <CardItem>
              <Left>
                <Button
                  bordered
                  danger
                  onPress={() => this.props.deleteCart(key)}>
                  <Icon
                    style={{fontSize: 20, color: 'red', paddingLeft: 10}}
                    name="trash"
                  />

                  <Text>Delete</Text>
                </Button>
              </Left>

              <Right>
                <Text style={{fontSize: 20}}>Rp.546.000.000</Text>
              </Right>
            </CardItem>
          </Card>
        );
      } else {
        return (
          <View>
            <Text>gk ada mas</Text>
          </View>
        );
      }
    });
    return (
      <Container>
        <HeaderCustom
          name=""
          iconleft="arrow-circle-left"
          iconright="shopping-cart"
          nameright="Cart"
          onPress={() => this.props.navigation.navigate('home')}
        />

        <Content>{listcart}</Content>

        <Footer>
          <FooterTab style={{backgroundColor: '#F3F4F5'}}>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate('home')}>
              <Icon size={25} name="home" style={{color: 'black'}} />
              <Text style={{color: 'black'}}>Home</Text>
            </Button>
            <Button vertical>
              <Icon size={25} name="shopping-cart" style={{color: '#6ec199'}} />
              <Text style={{color: 'black'}}>Cart</Text>
            </Button>

            <Button
              vertical
              onPress={() => this.props.navigation.navigate('Account')}>
              <Icon size={25} name="user" />
              <Text style={{color: 'black'}}>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCart: event => dispatch({type: 'DELETE_CART', value: event}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartScreen);
