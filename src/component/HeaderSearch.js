import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
  Item,
  Input,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HeaderSearch extends Component {
  render() {
    return (
      <Header
        style={{backgroundColor: '#F3F4F5'}}
        searchBar
        rounded
        autoCorrect={false}>
        <Left>
          <Icon style={{color: 'black'}} size={25} name="arrow-circle-left" />
        </Left>

        <Item style={{paddingRight: 260}}>
          <Icon style={{paddingLeft: 10}} size={20} name="search" />
          <Input
            //   onChangeText={this._onChangeSearchText.bind(this)} // <-- Here
            placeholder="Search"
          />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    );
  }
}
