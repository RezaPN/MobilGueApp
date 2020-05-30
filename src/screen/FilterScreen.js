import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Item,
  Text,
  Button,
  Form,
  Label,
  Input,
  Col,
  Right,
  Row,
} from 'native-base';
import HeaderCustom from './HeaderCustom';

export default class FilterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedButton: null};
    this.selectionOnPress = this.selectionOnPress.bind(this);
  }

  selectionOnPress(userType) {
    this.setState({selectedButton: userType});
  }

  render() {
    return (
      <Container>
        <HeaderCustom
          ico
          nleft="ios-arrow-dropleft"
          iconright="filter"
          nameright="Filters"
        />

        <Content>
          <Card>
            <Text style={{paddingLeft: 20}}>Transmition : </Text>
            <ScrollView horizontal={true}>
              <CardItem>
                <Button
                  bordered
                  dark
                  rounded
                  onPress={() => this.selectionOnPress('Automatic')}>
                  <Text
                    style={{
                      backgroundColor:
                        this.state.selectedButton === 'Automatic'
                          ? 'red'
                          : 'white',
                    }}>
                    {' '}
                    Automatic{' '}
                  </Text>
                </Button>

                <Button
                  bordered
                  dark
                  rounded
                  onPress={() => this.selectionOnPress('Manual')}>
                  <Text
                    style={{
                      backgroundColor:
                        this.state.selectedButton === 'Manual'
                          ? 'red'
                          : 'white',
                    }}>
                    {' '}
                    Manual{' '}
                  </Text>
                </Button>

                {/* <TouchableOpacity
                onPress={() => this.selectionOnPress("Manual")}
                style={styles.button}
            >
                <Text

                    style={{backgroundColor:
                            this.state.selectedButton === "Manual"
                                ? "red"
                                : "white"
                    }}
                >
                    <Text>Manual</Text>
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => this.selectionOnPress("Automatic")}
            >
                <Text

                    style={{ backgroundColor: this.state.selectedButton === "Automatic" ? "red" : "white"

                    }}
                >
                    <Text>
                     Automatic
                    </Text>
                </Text>
            </TouchableOpacity> */}

                <Button
                  bordered
                  dark
                  rounded
                  onClick={this.handleClick}
                  classname="btn-default">
                  <Text>Automatic</Text>
                </Button>

                <Button bordered dark rounded style={{marginLeft: 10}}>
                  <Text>Manual</Text>
                </Button>

                <Button bordered dark rounded style={{marginLeft: 10}}>
                  <Text>New Card</Text>
                </Button>
                <Button bordered dark rounded style={{marginLeft: 10}}>
                  <Text>New Card</Text>
                </Button>
              </CardItem>
            </ScrollView>
          </Card>

          <Card>
            <Text style={{paddingLeft: 20}}> Brand : </Text>
            <ScrollView horizontal={true}>
              <CardItem>
                <Button bordered dark rounded>
                  <Text>Toyota</Text>
                </Button>

                <Button bordered dark rounded style={{marginLeft: 10}}>
                  <Text> Honda </Text>
                </Button>

                <Button bordered dark rounded style={{marginLeft: 10}}>
                  <Text>Nissan</Text>
                </Button>

                <Button bordered dark rounded style={{marginLeft: 10}}>
                  <Text>Datsun</Text>
                </Button>

                <Button bordered dark rounded style={{marginLeft: 10}}>
                  <Text>Mitsubishi</Text>
                </Button>
              </CardItem>
            </ScrollView>
          </Card>

          <Card>
            <Form>
              <Row>
                <Col>
                  <Item stackedLabel>
                    <Label>Minimum Price</Label>
                    <Input />
                  </Item>
                </Col>

                <Col>
                  <Item stackedLabel>
                    <Label>Maximum Price</Label>
                    <Input />
                  </Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
  },
});
