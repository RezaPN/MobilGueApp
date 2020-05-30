import React, {Component} from 'react';
import {Header, Left, Button, Text, Item, Input} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

class HeartIcon extends Component {
  state = {
    heartIcon: 'heart-o',
  };

  componentDidMount() {
    if (
      this.props.listOfFavorite.some(item => item.id === this.props.inputFav.id)
    ) {
      console.log('inside if');
      const on = 'heart';
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({heartIcon: on});
    }
  }

  onPressSubmit = event => {
    this.props.inputFavorite(event);
    if (this.state.heartIcon === 'heart-o') {
      const off = 'heart';
      this.setState({heartIcon: off});
    } else {
      const on = 'heart-o';
      this.setState({heartIcon: on});
    }
  };

  render() {
    return (
      <Button
        style={{top: '-55%', left: '670%'}}
        iconRight
        transparent
        onPress={() => this.onPressSubmit(this.props.inputFav)}>
        <Icon size={26} color="red" name={`${this.state.heartIcon}`} />
      </Button>
    );
  }
}

const mapDispacthToProps = dispatch => {
  return {
    inputFavorite: event => dispatch({type: 'INPUT_ADDFAV', value: event}),
  };
};

const mapStateToProps = state => {
  return {
    query: state.search.query,
    categoryList: state.filter.listOfCategory,
    listOfFavorite: state.favorite.listOfFavorite,
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps,
)(HeartIcon);
