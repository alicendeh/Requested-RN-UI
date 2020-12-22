//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconImageView from './IconImageView';
import ViewImage from './ViewImage';
import ListIcons from './ListIcons';

let array = [
  {
    name: 'twitter',
    size: 35,
    color: '#4c6ccd',
    description: 'Twitter',
    Textcolor: 'white',
  },
  {
    name: 'google',
    size: 35,
    color: '#4c6ccd',
    description: 'Google',
    Textcolor: 'white',
  },
  {
    name: 'instagram',
    size: 35,
    color: '#4c6ccd',
    description: 'Instagram',
    Textcolor: 'white',
  },
  {
    name: 'github',
    size: 35,
    color: '#4c6ccd',
    description: 'GitHub',
    Textcolor: 'white',
  },
];

// create a component
const Header = () => {
  return (
    <View style={header.header}>
      {/* First row */}
      <View style={header.headerComponent}>
        <View style={header.headerTitle}>
          <Text style={header.HeaderBigText}>$2,589.50</Text>
          <Text style={header.HeaderSubText}>Available Balance</Text>
        </View>

        <View style={header.headerProfile}>
          {/* Notification Icon */}
          <Icon
            style={header.notificationIcon}
            name="bell"
            size={24}
            color="white"
          />

          {/* Profile Picture */}
          <IconImageView
            value={<ViewImage link={'https://cutt.ly/6hOj2yY'} />}
          />
        </View>
      </View>
      {/* Second Row and list of social media */}
      <View style={header.headerIconList}>
        <ListIcons data={array} />
      </View>
    </View>
  );
};

// define your styles
const header = StyleSheet.create({
  header: {
    flex: 1.3,
    height: 250,
    padding: '7%',
    backgroundColor: '#4c6ccd',
  },
  headerComponent: {
    // flex: 1,
    flexDirection: 'row',
    height: '50%',
    // backgroundColor: 'red',
  },
  headerTitle: {
    flex: 1,
  },
  headerProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '25%',
  },
  notificationIcon: {
    paddingTop: 20,
  },
  HeaderBigText: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  },
  HeaderSubText: {
    color: 'white',
    fontSize: 15,
  },
  listDiscribed: {
    flex: 1,
    justifyContent: 'space-around',
  },
  headerIconList: {
    width: '100%',
  },
});

//make this component available to the app
export default Header;
