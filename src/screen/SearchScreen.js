import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Item,
  Text,
  Button,

  Left,
  Body,
  Right,
} from 'native-base';
import HeaderSearch from './HeaderSearch';
import {connect} from 'react-redux';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import HeartIcon from '../component/HeartIcon';

class SearchScreen extends Component {
  state = {
    product: [],
  };

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    console.log('this is componentDidMount from search Screen');
    console.log(this.props.query);
    axios
      .get(
        `https://my-json-server.typicode.com/masfad/productjson/product?${
          this.props.query
        }${this.props.tranmission}`,
      )
      .then(result => {
        console.log('component did mount');
        console.log(result.data);
        this.setState({
          product: result.data,
        });
      });
  }

  submitHandling = () => {
    axios
      .get(
        `https://my-json-server.typicode.com/masfad/productjson/product?${
          this.props.query
        }`,
      )
      .then(result => {
        console.log('this is submitHandling');
        console.log(result.data);
        const newData = result.data;
        this.setState({
          product: newData,
        });
      });
  };

  render() {
    let listOfProduct;
    let listCategory = this.props.categoryList.map(item => {
      return (
        <>
          <Button
            bordered
            dark
            rounded
            style={{marginLeft: 10}}
            onPress={() => {
              this.props.deleteCat(item);
            }}>
            <Text>{item}</Text>
          </Button>
        </>
      );
    });

    if (this.state.product.length === 0) {
      listOfProduct = () => {
        <>
          <Text>Not found</Text>
        </>;
      };
    } else {
      listOfProduct = this.state.product.map(item => {
        return (
          <>
            <View>
              <Image
                source={{
                  uri: item.photo,
                }}
                style={{height: 200, width: null, flex: 1}}
              />
              <View>
                <HeartIcon inputFav={item} />
              </View>
            </View>

            <CardItem header style={{paddingTop: -0}}>
              <Text
                style={{textAlign: 'left', fontSize: 20, fontWeight: 'bold'}}>
                {item.name}{' '}
              </Text>
            </CardItem>

            <CardItem style={{paddingTop: -0}}>
              <Text style={{fontSize: 15}}>
                {`${item.brand.name}`} | {`${item.category.name}`} | Bensin | 5
                Penumpang
              </Text>
            </CardItem>

            <CardItem style={{marginBottom: 0}}>
              <Left>
                <Button
                  info
                  onPress={() =>
                    this.props.navigation.navigate('Detail', {result: item})
                  }>
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
                  value={item.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'Rp.'}
                />
              </Right>
            </CardItem>
          </>
        );
      });
    }

    return (
      <Container>
        <HeaderSearch
          value={this.props.value}
          onChange={this.props.queryChange}
          onPress={() => this.props.navigation.navigate('home')}
          onSubmit={this.submitHandling}
        />
        <Content>
          <Card>
            <ScrollView horizontal={true}>
              <CardItem>
                {listCategory}
                <Button
                  bordered
                  dark
                  rounded
                  style={{marginLeft: 10}}
                  onPress={() => this.props.navigation.navigate('Filter')}>
                  <Text>+ Category</Text>
                </Button>
              </CardItem>
            </ScrollView>
            {listOfProduct}
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapDispacthToProps = dispatch => {
  return {
    queryChange: event => dispatch({type: 'INPUT_QUERY', value: event}),
    deleteCat: event => dispatch({type: 'DELETE_LISTCAT', value: event}),
  };
};

const mapStateToProps = state => {
  return {
    value: state.search.value,
    query: state.search.query,
    categoryList: state.filter.listOfCategory,
    tranmission: state.filter.tranmisi,
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps,
)(SearchScreen);
