import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  // eslint-disable-next-line no-unused-vars
  Alert,
  Dimensions,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import {SearchBar} from 'react-native-elements';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true, search: ''};
    this.arrayholder = [];
  }

  render() {
    return (
      <LinearGradient
        colors={['white', 'orange']}
        start={{x: 0.7, y: 0}}
        end={{x: 1, y: 0.5}}
        style={styles.container}>
        <View style={styles.searchBarContainer}>
          <SearchBar
            round
            searchIcon={{size: 20, color: 'white'}}
            clearIcon={{color: 'white'}}
            placeholderTextColor={'white'}
            onChangeText={(text) => this.SearchFilterFunction(text)}
            onClear={(text) => this.SearchFilterFunction('')}
            placeholder="Type Here..."
            value={this.state.search}
            containerStyle={styles.searchBar}
            inputContainerStyle={styles.inputSearchStyle}
            inputStyle={{color: 'white'}}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.column1}>
            <View style={styles.diamond} />
            <View style={styles.diamond} />
          </View>
          <View style={styles.column2}>
            <View style={styles.diamond} />
            <View style={styles.diamond} />
          </View>
          <View style={styles.column3}>
            <View style={styles.diamond} />
            <View style={styles.diamond} />
          </View>
        </View>
        <View style={styles.infomation}>
          <Text>Infomation</Text>
        </View>
      </LinearGradient>
    );
  }

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function (item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  infomation: {
    flex: 0.25,
  },
  searchBarContainer: {},
  searchBar: {
    backgroundColor: 'rgba(1.0, 0, 0, 0)',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    color: 'white',
  },
  inputSearchStyle: {
    backgroundColor: '#B0ABAA',
    borderWidth: 1,
    borderColor: '#938C8B',
    color: 'white',
  },
  content: {
    flex: 0.75,
    flexDirection: 'row',
  },
  column1: {
    flex: 0.3,
  },
  column2: {
    flex: 0.3,
    marginTop: deviceWidth / 5,
  },
  column3: {
    flex: 0.3,
  },
  diamond: {
    width: deviceWidth / 3.5,
    height: deviceWidth / 3.5,
    backgroundColor: '#ECAFA6',
    transform: [{rotate: '45deg'}],
    marginTop: deviceWidth / 7,
    marginLeft: deviceWidth / 20,
    borderRadius: 15,
    shadowColor: '#000',
    borderWidth: 2,
    borderColor: '#938C8B',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 22,
  },
});
