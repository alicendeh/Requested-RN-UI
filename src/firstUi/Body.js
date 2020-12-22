//import liraries
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import IconImageView from './IconImageView';
import MultipurposeView from './MultiPurposeView';
import ViewIcon from './ViewIcon';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';

// create a component
const {height, width} = Dimensions.get('screen');
const Body = () => {
  return (
    <View style={body.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={body.header}>
          <Text style={body.bigHeader}>Recent Transactions</Text>
          <Text style={body.smallHeader}>See all</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <MultipurposeView
            width={'20%'}
            border={15}
            value={<Text style={{fontWeight: 'bold', fontSize: 13}}>All</Text>}
          />
          <MultipurposeView
            width={'35%'}
            value={
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="money" size={18} color="green" />
                <Text style={{fontSize: 16, marginLeft: 10}}>Income</Text>
              </View>
            }
          />
          <MultipurposeView
            width={'35%'}
            value={
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="trash" size={18} color="orange" />
                <Text style={{fontSize: 16, marginLeft: 10}}>Expenses</Text>
              </View>
            }
          />
        </View>

        <View style={{marginBottom: 10}}>
          <Text style={body.day}>Today</Text>
          <MultipurposeView
            value={
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <IconImageView
                    value={
                      <ViewIcon
                        iconDetail={{name: 'spoon', size: 25, color: '#748dd8'}}
                      />
                    }
                  />
                </View>
                <View
                  style={{flex: 4, flexDirection: 'column', marginBottom: 5}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={body.mediumHeader}>Grocery</Text>
                    <Text style={body.mediumHeader2}>-$50.68</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1, fontSize: 15}}>Eataly downtown</Text>
                    <Text style={{fontSize: 15}}>Aug 26</Text>
                  </View>
                </View>
              </View>
            }
          />

          <MultipurposeView
            value={
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <IconImageView
                    value={
                      <ViewIcon
                        iconDetail={{name: 'car', size: 25, color: '#748dd8'}}
                      />
                    }
                  />
                </View>
                <View
                  style={{flex: 4, flexDirection: 'column', marginBottom: 5}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={body.mediumHeader}>Transport</Text>
                    <Text style={body.mediumHeader2}>-$6.00</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1, fontSize: 15}}>UBER pool</Text>
                    <Text style={{fontSize: 15}}>Aug 26</Text>
                  </View>
                </View>
              </View>
            }
          />
        </View>

        <View style={{marginBottom: 10}}>
          <Text style={body.day}>Yesterday</Text>
          <MultipurposeView
            value={
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <IconImageView
                    value={
                      <ViewIcon
                        iconDetail={{name: 'bank', size: 25, color: '#748dd8'}}
                      />
                    }
                  />
                </View>
                <View style={{flex: 4, flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={body.mediumHeader}>Payment</Text>
                    <Text style={body.mediumHeader2_color}>+650.00</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1, fontSize: 15}}>
                      Payment from Andre
                    </Text>
                    <Text style={{fontSize: 15}}>Aug 25</Text>
                  </View>
                </View>
              </View>
            }
          />

          <MultipurposeView
            value={
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <IconImageView
                    value={
                      <ViewIcon
                        iconDetail={{name: 'bank', size: 25, color: '#748dd8'}}
                      />
                    }
                  />
                </View>
                <View style={{flex: 4, flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={body.mediumHeader}>Payment</Text>
                    <Text style={body.mediumHeader2_color}>+650.00</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1, fontSize: 15}}>
                      Payment from Andre
                    </Text>
                    <Text style={{fontSize: 15}}>Aug 25</Text>
                  </View>
                </View>
              </View>
            }
          />
        </View>

        <View style={{marginBottom: 10}}>
          <Text style={body.day}>Today</Text>
          <MultipurposeView
            value={
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <IconImageView
                    value={
                      <ViewIcon
                        iconDetail={{name: 'spoon', size: 25, color: '#748dd8'}}
                      />
                    }
                  />
                </View>
                <View
                  style={{flex: 4, flexDirection: 'column', marginBottom: 5}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={body.mediumHeader}>Grocery</Text>
                    <Text style={body.mediumHeader2}>-$50.68</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1, fontSize: 15}}>Eataly downtown</Text>
                    <Text style={{fontSize: 15}}>Aug 26</Text>
                  </View>
                </View>
              </View>
            }
          />

          <MultipurposeView
            value={
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <IconImageView
                    value={
                      <ViewIcon
                        iconDetail={{name: 'car', size: 25, color: '#748dd8'}}
                      />
                    }
                  />
                </View>
                <View
                  style={{flex: 4, flexDirection: 'column', marginBottom: 5}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={body.mediumHeader}>Transport</Text>
                    <Text style={body.mediumHeader2}>-$6.00</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1, fontSize: 15}}>UBER pool</Text>
                    <Text style={{fontSize: 15}}>Aug 26</Text>
                  </View>
                </View>
              </View>
            }
          />
        </View>

        <View style={{marginBottom: 10}}>
          <Text style={body.day}>Yesterday</Text>
          <MultipurposeView
            value={
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <IconImageView
                    value={
                      <ViewIcon
                        iconDetail={{name: 'bank', size: 25, color: '#748dd8'}}
                      />
                    }
                  />
                </View>
                <View style={{flex: 4, flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={body.mediumHeader}>Payment</Text>
                    <Text style={body.mediumHeader2_color}>+650.00</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1, fontSize: 15}}>
                      Payment from Andre
                    </Text>
                    <Text style={{fontSize: 15}}>Aug 25</Text>
                  </View>
                </View>
              </View>
            }
          />

          <MultipurposeView
            value={
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <IconImageView
                    value={
                      <ViewIcon
                        iconDetail={{name: 'bank', size: 25, color: '#748dd8'}}
                      />
                    }
                  />
                </View>
                <View style={{flex: 4, flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={body.mediumHeader}>Payment</Text>
                    <Text style={body.mediumHeader2_color}>+650.00</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1, fontSize: 15}}>
                      Payment from Andre
                    </Text>
                    <Text style={{fontSize: 15}}>Aug 25</Text>
                  </View>
                </View>
              </View>
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const body = StyleSheet.create({
  container: {
    // flex: 3,
    backgroundColor: '#ebeff9',
    height: height / 2,
    // backgroundColor: 'orange',
    transform: [{translateY: -20}],
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    color: '#ebeff9',
    paddingLeft: '8%',
    paddingRight: '8%',
    paddingTop: '5%',
  },
  header: {
    flexDirection: 'row',
  },
  bigHeader: {
    fontSize: 21,
    fontWeight: 'bold',
    // transform: [{scaleX: 1.1}],
    flex: 1,
    color: '#162550',
  },
  smallHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2d499f',
    // transform: [{scaleX: 1.1}],
  },
  mediumHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#162550',
    flex: 1,
    // transform: [{scaleX: 1.1}],
  },
  mediumHeader2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#162550',
    textAlign: 'right',
    flex: 1,
    // backgroundColor: 'orange',
    // transform: [{scaleX: 1.1}],
  },
  mediumHeader2_color: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00802d',
    textAlign: 'right',
    flex: 1,
  },
  day: {
    color: '#bfc7df',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 15,
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Body;
