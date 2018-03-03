import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Expo from 'expo';

export default class Textsmall extends React.Component {
  constructor(){
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      MontserratBold: require("../../assets/fonts/Montserrat-Bold.otf")
    });
    this.setState({isReady: true});
  }
    render() {
      if(!this.state.isReady){
        return <Expo.AppLoading />;
      }
        return (
          <View>
            <Text style={styles.title}>{this.props.children}</Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
      color:'#FFF',
      fontFamily: 'MontserratBold',
      fontSize: 14,
      fontWeight: 'bold',
    }
})
