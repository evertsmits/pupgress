import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Expo from 'expo';
import TextBig from '../Textcomponents/Textbig';
import TextRegular from '../Textcomponents/Textregular';
import Header from '../Header/Header';
import Title from '../Textcomponents/Title';

export default class Graphs extends React.Component {
    render() {
        return (
            <Header>
              <Title>PUPGRESS</Title>
              <View style={{alignSelf: 'stretch', alignItems: 'center', marginTop: 20}}>
                <TextBig>YOUR DOGS EXPERIENCE</TextBig>
              </View>
            </Header>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

  },
});
