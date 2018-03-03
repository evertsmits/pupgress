import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import TextBig from '../Textcomponents/Textbig';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');

export default class Addmodal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Modal style={styles.modal} position='center' backdrop={true}>
                <TextBig>ADD DONE TRICK</TextBig>
            </Modal>
        )
    }






}


const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        shadowRadius: 10,
        width: screen.width - 80,
        height: 280,
    }
});
