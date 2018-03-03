import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Expo from 'expo';

export default class Header extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.headercontainer}>
              <View style={styles.header}>
                {this.props.children}
              </View>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
  },
  header: {
    flex: 1,
    marginTop: 20,
    height: 120,
    alignSelf: 'stretch',
    backgroundColor: '#00BCD4',
  },
  headercontainer: {
    flex: 1,
    backgroundColor: '#0097A7',
    height: 120,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
