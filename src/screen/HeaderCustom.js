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
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HeaderCustom extends Component {
  render() {
    return (
      // #F3F4F5

      <Header style={{backgroundColor: '#F3F4F5'}}>
        <Left>
          <Button transparent onPress={this.props.onPress}>
            <Icon size={25} name={this.props.iconleft} />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.name}</Title>
        </Body>

        <Right>
          <Button hasText transparent>
            <Icon
              size={25}
              style={this.props.colorIcon}
              name={this.props.iconright}
            />
            <Text style={{color: 'black'}}>{this.props.nameright}</Text>
          </Button>
        </Right>
      </Header>
    );
  }
}
