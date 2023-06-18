/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, SafeAreaView, Image, View} from 'react-native';
import React from 'react';

const FlashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 1500);
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 45,
          fontWeight: 'bold',
          color: '#fff',
          textAlign: 'center',
        }}>
        India's #1 food delivery app
      </Text>
      <View>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
          }}>
          Free Delivery
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: '#fff',
            textAlign: 'center',
            marginTop: 10,
          }}>
          on first order
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../assests/images/delivery.png')}
          style={{width: 200, height: 200}}
        />
      </View>
    </SafeAreaView>
  );
};

export default FlashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7054E',
    justifyContent: 'center',
  },
});
