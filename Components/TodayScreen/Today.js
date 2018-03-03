import React from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Expo from 'expo';
import TextBig from '../Textcomponents/Textbig';
import TextRegular from '../Textcomponents/Textregular';
import TextSmall from '../Textcomponents/Textsmall';
import flatListData from '../../data/flatListData';
import Header from '../Header/Header';
import Modal from 'react-native-modalbox';
import Title from '../Textcomponents/Title';

var screen = Dimensions.get('window');
var w = 0;

class FlatListItem extends React.Component {
  render(){
    return(
      <View style={styles.scrollItem}>
        <TextBig>{this.props.item.name}</TextBig>
        <TextBig>{this.props.item.xp}xp</TextBig>
      </View>
    );
  }


}

export default class Today extends React.Component{
  constructor(props){
    super(props);
    this.showAddModal = this.showAddModal.bind(this)
    this.refreshflatlist = this.refreshflatlist.bind(this)
    this.addxp = this.addxp.bind(this)

    this.state = {
      treatcount: 0,
      isReady: false,
      refresh: false,
      newkey: null,
      xpbarwidth: 0,
      refreshkey: null,
      newTrickName: '',
    }
  }

  async componentWillMount() {
     console.log("KOMT IE HIER?")
     this.calcxpwidth()

    await Expo.Font.loadAsync({
      MontserratBold: require("../../assets/fonts/Montserrat-Bold.otf")
    });
    this.setState({isReady: true});
  }

  showAddModal = () => {
    this.refs.addModal.open();
  }

  _keyExtractor = (item, index) => item.id;

  refreshflatlist = (key) => {
      this.setState({
        refreshkey: key
      })
  }

  calcxpwidth = () => {
      if (flatListData.length != 0) {
          flatListData.map((data) => {
              console.log(data.xp)
              w = w + data.xp;
              console.log(w);
          })
          this.setState({ xpbarwidth: w })
      } else {
          w = 0;
          this.setState({ xpbarwidth: 0})
      }
  }

  addxp = (xp) => {
      console.log("komt ie bij deez", xp)
      this.setState({
          xpbarwidth: this.state.xpbarwidth + xp
      })
  }
  generatekey = (numberOfCharacters) => {
      return require('random-string')({length: numberOfCharacters});
  }

  saveTrick = () => {
      if(this.state.newTrickName.length == 0) {
        alert("You must enter a new trick");
        return;
      } else {
        const newKey = this.generatekey(24);
        const newTrick = {
          key: newKey,
          name: this.state.newTrickName,
          xp: 5,
          date: '02-02-2018',

      };
        flatListData.push(newTrick);
        console.log(flatListData);
        this.refreshflatlist(newKey);
        this.addxp(newTrick.xp);
        this.refs.addModal.close();
      }
  }

  addTreat = () => {
    this.setState({
      treatcount: this.state.treatcount + 1
    })
}

    render() {
        return (
          <View style={styles.container}>
            <Header>
              <Title>PUPGRESS</Title>
              <View style={styles.xpcontainer}>
                <View style={styles.itemscontainer}>
                  <View style={styles.textsmall}>
                    <TextSmall>DOG LEVEL 1</TextSmall>
                  </View>
                  <View style={styles.xpbarcontainer}>
                    <View style={{height: 25, width: this.state.xpbarwidth, backgroundColor: '#FFC107'}}></View>
                  </View>
                  <View style={styles.textsmall}>
                    <TextSmall>{this.state.xpbarwidth}/65 XP</TextSmall>
                  </View>
                </View>
              </View>
            </Header>
            <View style={styles.counterblock}>
              <View style={styles.treatcontainer}>
                <Title>TREAT COUNT</Title>
              </View>
              <View style={styles.counter}>
                <Title>{this.state.treatcount}</Title>
              </View>
            </View>
            <View style={styles.trickblock}>
              <View style={styles.trickcontainer}>
                <Title>DONE TRICKS</Title>
              </View>
              <View style={styles.listcontainer}>
                <FlatList ref={'tricklist'} data={flatListData} extraData={this.state} keyExtractor={this._keyExtractor}
                  renderItem={({item, index}) =>{
                    return(
                      <FlatListItem item={item} index={index}>

                      </FlatListItem>
                    )
                  }}
                >
                </FlatList>
              </View>
            </View>
            <View style={styles.buttoncontainer}>
              <TouchableOpacity onPress={this.addTreat} style={styles.button}>
                <TextBig>GIVE TREAT</TextBig>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.showAddModal} style={styles.button}>
                <TextBig>ADD TRICK</TextBig>
              </TouchableOpacity>
            </View>
            <Modal ref={'addModal'} style={styles.modal} position='center' backdrop={true} parentFlatList={this.refs.tricklist} >
              <Title>ADD TRICK</Title>
              <TextInput style={styles.inputtext} placeholder="Name the trick" value={this.state.newTrickName} onChangeText={(text) => this.setState({ newTrickName: text})}/>
              <TouchableOpacity onPress={this.saveTrick} style={styles.savetrick}>
                <TextBig>SAVE TRICK</TextBig>
              </TouchableOpacity>
            </Modal>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  counterblock: {
    marginTop: 20,
    marginLeft: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: '#0097A7',
  },

  counter: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  treatcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    height: 40,
    marginTop: 10,
  },

  trickblock: {
      flex: 2,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 20,
      backgroundColor: '#0097A7',
  },

  trickcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    height: 40,
    marginTop: 10,
  },

  buttoncontainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#FFC107',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },

  listcontainer: {
    width: 250,
  },

  scrollcontainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  scrollItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 5,
    marginBottom: 5,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },

  modal: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#0097A7',
    shadowRadius: 10,
    width: screen.width - 80,
    height: 300,
  },

  inputtext: {
    height: 30,
    color: 'white',
    fontSize: 16,
    width: 250,
    fontFamily: 'MontserratBold',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 10,
  },

  savetrick: {
    backgroundColor: '#FFC107',
    alignItems: 'center',
    width: 175,
    marginTop: 150,
    padding: 10,
    justifyContent: 'center',
  },

  xpcontainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    height: 90,
  },

  itemscontainer: {
    flex: 1,
    alignItems: 'center',
    height: 75,
  },

  textsmall: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },

  xpbarcontainer: {
    height: 25,
    width: 250,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#0097A7',
  },
});
