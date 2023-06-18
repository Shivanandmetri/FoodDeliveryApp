/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';

const Location = () => {
  return (
    <>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
        <Image
          source={require('../../assests/images/paper-plane.png')}
          style={{height: 25, width: 25, marginLeft: 10}}
        />
        <Text style={{fontWeight: 'bold', fontSize: 16, color: '#000000'}}>
          Vijay Nagar
        </Text>
      </View>
      <Text style={{marginLeft: 10}}>
        North Vijay Nagar,Govindraj Nagar Ward
      </Text>
    </>
  );
};

export default Location;
