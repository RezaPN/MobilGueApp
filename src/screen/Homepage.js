/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  Container,
  Card,
  CardItem,
  Input,
  Button,
  Footer,
  FooterTab,
  Item,
  Content,
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

export class Homepage extends Component {
  pressHandle = event => {
    this.props.addCategory(event);
    this.props.addTranmission(event);
    this.props.navigation.navigate('Search');
  };

  brandHandle = event => {
    this.props.addCategory(event);
    this.props.addBrand(event);
    this.props.navigation.navigate('Search');
  };

  render() {
    return (
      <Container style={{flex: 1}}>
        <ImageBackground
          source={require('../assets/car-dashboard.jpg')}
          style={styles.Background}>
          <Content
            horizontal={true}
            contentContainerStyle={{paddingLeft: '30%'}}>
            <Image
              style={{marginLeft: 13, marginTop: '9%', height: 20, width: 120}}
              source={require('../assets/logo_white.png')}
            />
            <Icon
              onPress={() => this.props.navigation.navigate('Wishlist')}
              size={28}
              style={{marginLeft: 80, marginTop: 20}}
              color="white"
              name="heart"
            />
          </Content>
          <Item regular style={styles.SearchForm}>
            <Icon size={22} style={{marginLeft: 5}} name="search" />
            <Input
              onSubmitEditing={() => this.props.navigation.navigate('Search')}
              onChange={this.props.queryChange}
              style={{lineHeight: null}}
              placeholderTextColor="#8d9093"
              placeholder="e.g Audi A6 or audi"
              value={this.props.value}
            />
          </Item>

          <Text style={styles.textHeader}>Find your next{'\n'}match</Text>
        </ImageBackground>
        <Container style={{marginTop: -30, backgroundColor: 'none'}}>
          <Content
            padder
            contentContainerStyle={{height: '60%'}}
            horizontal={true}>
            <Card
              style={{marginRight: 6, marginLeft: -8, borderBottomWidth: 10}}>
              <CardItem>
                <Col style={styles.card}>
                  <Button
                    style={{height: '100%'}}
                    transparent
                    onPress={() => this.pressHandle('Automatic')}>
                    <Image
                      style={styles.cardImage}
                      source={require('../assets/auto_tranmission2.webp')}
                    />
                  </Button>
                  <Text style={{fontWeight: 'bold'}}>Auto Tranmission</Text>
                </Col>
              </CardItem>
            </Card>
            <Card style={{borderBottomWidth: 10}}>
              <CardItem>
                <Col style={styles.card}>
                  <Button
                    style={{height: '100%'}}
                    transparent
                    onPress={() => this.pressHandle('Manual')}>
                    <Image
                      style={styles.cardImage}
                      source={require('../assets/manual-tranmission.png')}
                    />
                  </Button>
                  <Text style={{fontWeight: 'bold'}}>Manual Tranmission</Text>
                </Col>
              </CardItem>
            </Card>
          </Content>
        </Container>
        <Container style={{backgroundColor: 'none', marginTop: -100}}>
          <Content contentContainerStyle={{height: '198%'}}>
            <Card transparent style={{borderTopWidth: 0}}>
              <Text
                style={{color: '#34424F', fontSize: 25, fontWeight: 'bold'}}>
                Choose Your Brand
              </Text>

              <Row>
                <Col>
                  <Card style={styles.card2}>
                    <Button
                      transparent
                      style={{height: 120}}
                      onPress={() => this.brandHandle('Toyota')}>
                      <Image
                        style={styles.logoImage}
                        source={require('../assets/Toyoya-hd.jpg')}
                      />
                    </Button>
                  </Card>

                  <Card style={styles.card2}>
                    <Image
                      style={styles.logoImage}
                      source={require('../assets/Honda.png')}
                    />
                  </Card>
                  <Card style={styles.card2}>
                    <Image
                      style={styles.logoImage}
                      source={require('../assets/Nissan.png')}
                    />
                  </Card>
                </Col>
                <Col>
                  <Card style={styles.card2}>
                    <Image
                      style={styles.logoImage}
                      source={require('../assets/Datsun.png')}
                    />
                  </Card>

                  <Card style={styles.card2}>
                    <Image
                      style={styles.logoImage}
                      source={require('../assets/Mitsu.png')}
                    />
                  </Card>
                </Col>
              </Row>
            </Card>
          </Content>
        </Container>
        <Footer>
          <FooterTab style={{backgroundColor: '#F3F4F5'}}>
            <Button
              vertical
              // active={props.navigationState.index === 0}
              // onPress={() => props.navigation.navigate("")}
            >
              <Icon size={25} name="home" style={{color: '#6ec199'}} />
              <Text style={{color: 'black'}}>Home</Text>
            </Button>
            <Button
              vertical
              // active={props.navigationState.index === 1}
              onPress={() => this.props.navigation.navigate('Cart')}>
              <Icon size={25} name="shopping-cart" />
              <Text style={{color: 'black'}}>Cart</Text>
            </Button>

            <Button
              vertical
              onPress={() => this.props.navigation.navigate('Account')}
              // active={props.navigationState.index === 2}
              // onPress={() => props.navigation.navigate("")}
            >
              <Icon size={25} name="user" />
              <Text style={{color: 'black'}}>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapDispacthToProps = dispatch => {
  return {
    queryChange: event => dispatch({type: 'INPUT_QUERY', value: event}),
    addCategory: event => dispatch({type: 'INPUT_LISTCAT', value: event}),
    addTranmission: event => dispatch({type: 'INPUT_TRANMISI', value: event}),
    addBrand: event => dispatch({type: 'INPUT_BRAND', value: event}),
  };
};

const mapStateToProps = state => {
  return {
    password: state.account.account,
    value: state.search.value,
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps,
)(Homepage);

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  SearchForm: {
    backgroundColor: 'white',
    width: '70%',
    marginBottom: 0,
    height: '18%',
    borderRadius: 15 / 2,
    marginLeft: '15%',
  },
  textHeader: {
    color: '#FFFFFF',
    marginLeft: 20,
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 26,
  },
  cardImage: {
    resizeMode: 'contain',
    height: '90%',
    width: '90%',
  },
  logoImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '90%',
    marginLeft: 5,
  },
  card: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  card2: {paddingTop: 3, width: '90%', height: 130},
});
