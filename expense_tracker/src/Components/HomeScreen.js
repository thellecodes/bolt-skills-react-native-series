import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Container, ListItem, CheckBox, Body, Right} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

import {useSelector} from 'react-redux';

function Item({title, id, price}) {
  return (
    <View
      style={{
        marginVertical: 3,
        paddingHorizontal: 30,
        paddingVertical: 15,
      }}>
      <ListItem>
        <CheckBox
          onPress={() => {
            console.warn(title);
          }}
        />

        <Body>
          <Text style={{fontSize: 17, fontWeight: '700', marginLeft: 10}}>
            {title}
          </Text>
        </Body>

        <Right>
          <Text
            style={{
              fontFamily: 'Lato-Bold',
              fontSize: 14,
              fontWeight: '400',
              color: price > 0 ? '#009BFC' : '#ff4500',
            }}>
            {price > 0 ? `₦${price}` : `₦${Math.abs(price)}`}
          </Text>
        </Right>
      </ListItem>
    </View>
  );
}

const HomeScreen = ({navigation}) => {
  const {transactions} = useSelector((state) => state.transactions);

  return (
    <Container>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <LinearGradient
          colors={['#FAAD3D', '#EFC90A', '#F1CB0C']}
          style={styles.Box}>
          <View style={{width: '70%', alignItems: 'flex-start'}}>
            <Text
              style={{
                fontSize: 15,
                color: '#fff',
                fontFamily: 'Lato-Regular',
                fontWeight: '600',
              }}>
              Current balance
            </Text>
            <Text
              style={{
                fontFamily: 'Lato-Medium',
                fontSize: 32,
                color: '#fff',
                fontWeight: '700',
              }}>
              ₦5,477.85
            </Text>

            <Text
              style={{
                marginTop: 67,
                color: '#fff',
                fontFamily: 'Lato-Regular',
                fontSize: 18,
                fontWeight: '700',
              }}>
              4234 **** **** 6533
            </Text>
          </View>

          <View
            style={{
              alignItems: 'flex-end',
              width: '30%',
            }}>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: '700'}}>
              NGN
            </Text>
            <View style={{flex: 1}}>
              <Button
                rounded
                light
                style={{
                  padding: 10,
                  marginTop: 32,
                  borderWidth: 3,
                  borderColor: '#fff',
                  backgroundColor: '#E10C62',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  navigation.navigate('Add');
                }}>
                <Text style={{color: '#fff', fontWeight: '700', fontSize: 20}}>
                  Add
                </Text>
              </Button>

              <Text
                style={{
                  marginTop: 17,
                  color: '#fff',
                  fontSize: 10,
                  fontWeight: '700',
                }}>
                Balance
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: '700',
                }}>
                ₦200000
              </Text>
            </View>
          </View>
        </LinearGradient>
      </Animated.View>

      <View style={{flex: 1, marginTop: -150}}>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Text style={{color: '#ff4500', fontWeight: '700', fontSize: 20}}>
            No transactions yet.
          </Text>
        </View>
        {/* <FlatList
          data={transactions}
          renderItem={({item}) => (
            <Item title={item.title} price={item.price} />
          )}
          keyExtractor={(item) => item.id.toString()}
        /> */}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 189,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default HomeScreen;
