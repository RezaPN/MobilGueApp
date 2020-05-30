/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import NumberFormat from 'react-number-format';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import HeaderCustom from './HeaderCustom';
import {connect} from 'react-redux';
import axios from '../axios';

class Wishlist extends Component {

  render() {
    const list = this.props.listOfFav.map(result => {
      if (result.length !== 0) {
        return (
          <Card>
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
                {result.name}
              </Text>
            </CardItem>

            <CardItem style={{paddingTop: 0}}>
              <Text style={{fontSize: 15}}>
                {result.brand.name} | {result.category.name}
              </Text>
            </CardItem>

            <CardItem>
              <Left>
                <Button info>
                  <Text>Detail</Text>
                </Button>
              </Left>

              <Right>
                <NumberFormat
                  renderText={value => (
                    <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                      {value}
                    </Text>
                  )}
                  value={result.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'Rp.'}
                />
              </Right>
            </CardItem>
          </Card>
        );
      } else {
        return (
          <View>
            <Text>gk ada datanya</Text>
          </View>
        );
      }
    });

    return (
      <Container>
        <HeaderCustom
          name=""
          iconleft="arrow-circle-left"
          iconright="heart-o"
          nameright="Favorite"
          onPress={() => this.props.navigation.navigate('home')}
        />

        <Content>{list}</Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    account: state.account.account,
    listOfFav: state.favorite.listOfFavorite,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Wishlist);
