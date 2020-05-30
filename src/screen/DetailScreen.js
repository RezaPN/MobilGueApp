/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, Share} from 'react-native';
import NumberFormat from 'react-number-format';
import {
  Container,
  Content,
  Card,
  CardItem,
  Footer,
  Col,
  Text,
  Button,
  Left,
  Body,
  Right,
  Row,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderCustom from './HeaderCustom';

import {connect} from 'react-redux';

class DetailScreen extends Component {
  addToCart = event => {
    const {result} = this.props.route.params;
    console.log("tambah data add cart" + this.props.addCart(result));
  };

  render() {
    const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            'React Native | A framework for building native apps using React',
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };

    const {result} = this.props.route.params;

    return (
      <Container>
        <HeaderCustom
          name=""
          iconleft="arrow-circle-left"
          iconright="tachometer"
          nameright="Product Detail"
        />
        <Content>
          {/* card 1 */}
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

            <CardItem style={{paddingTop: -0}}>
              <Text style={{fontSize: 15}}>
                {result.brand.name} | {result.category.name} | 2019
              </Text>
              <CardItem />
              <Right>
                <Row>
                  <Col>
                    <Icon
                      size={25}
                      style={{color: '', paddingRight: 0}}
                      name="link"
                      onPress={onShare}
                    />
                  </Col>
                  <Col>
                    <Icon size={25} style={{color: 'red'}} name="heart-o" />
                  </Col>
                </Row>
              </Right>
            </CardItem>

            <CardItem style={{paddingTop: -0}}>
              <NumberFormat
                renderText={value => (
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                    {value}
                  </Text>
                )}
                value={result.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'Rp.'}
              />
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text style={{fontWeight: 'bold'}}>Detail</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Tipe Mesin : SkyActive-G In-Line, 4-Cylinder DOHC, 16-Valve.
                  Kapasitas : 1998 cc. Diameter X Langkah : 83,5 x 91,2. Rasio
                  Kompresi : 14.0. Power Maksimum : 121 kW(165 PS) / 6000 rpm.
                  Torsi Maksimum : 210 Nm(21,4 Kgm) / 4000 rpm. Sistem Bahan
                  Bakar : 6 speed automatic with manual shift.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text style={{fontWeight: 'bold'}}>Description</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  The name “Mazda” was introduced to Japan in October 1931.
                  Mazda started its life as a cork manufacturer back in 1920.
                  The year 1931 was when Mazda, then called the Toyo Kogyo Co.,
                  Ltd., launched the “Mazda-go”, a tricycle truck which is a
                  first vehicle coming out of the company
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Footer style={{backgroundColor: 'white'}}>
          <Left style={{paddingLeft: 20}}>
            <Button bordered dark style={{padding: 20}}>
              <Icon size={20} style={{color: ''}} name="wechat" />
            </Button>
          </Left>

          <Left style={{paddingLeft: 0}}>
            <Button bordered dark style={{padding: 20, color: 'black'}}>
              <Text size={20} style={{color: ''}}>
                {' '}
                Buy{' '}
              </Text>
            </Button>
          </Left>
          <Left style={{paddingLeft: 0}}>
            <Button info style={{padding: 0}} onPress={this.addToCart}>
              <Text style={{color: 'white', padding: 20}}> Add to Cart </Text>
            </Button>
          </Left>
        </Footer>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCart: event => dispatch({type: 'ADD_CART', value: event}),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(DetailScreen);
