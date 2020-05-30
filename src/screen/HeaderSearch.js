import React, {Component} from 'react';
import {Header, Left, Button, Text, Item, Input} from 'native-base';
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
          <Button transparent onPress={this.props.onPress}>
            <Icon style={{color: 'black'}} size={25} name="arrow-circle-left" />
          </Button>
        </Left>

        <Item style={{paddingRight: 140}}>
          <Icon style={{paddingLeft: 10}} size={20} name="search" />
          <Input
            value={this.props.value}
            onChange={this.props.onChange}
            onSubmitEditing={this.props.onSubmit}
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
