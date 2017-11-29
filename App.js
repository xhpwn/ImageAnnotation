/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  TextInput
} from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';


const cards = [
  {
    text: 'Annotate Image 1',
    name: 'One',
    image: require('./experimentimage.png'),
  },
  {
    text: 'Annotate Image 2',
    name: 'Two',
    image: require('./experimentimage.png'),
  },
  {
    text: 'Annotate Image 3',
    name: 'Three',
    image: require('./experimentimage.png'),
  },
];



export default class App extends Component<{}> {
  render() {
    return (
      <Container style={{ backgroundColor: '#263238' }}>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card>
                <CardItem>
                    <Body style={{ alignItems: 'center' }}>
                      <Text>{item.text}</Text>
                    </Body>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 400, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem style={{ backgroundColor: '#e1e1e1', alignItems: 'center' }}>
                  <View>
                  </View>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
