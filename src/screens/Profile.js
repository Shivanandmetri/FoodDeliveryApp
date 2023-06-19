/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const res = await AsyncStorage.getItem('user');
    const data1 = await JSON.parse(res);
    setData(data1);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const LogoutFn = () => {
    navigation.navigate('Login');
    // AsyncStorage.clear();
  };
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('Food')}>
        <Image
          source={require('../../assests/images/left-arrow.png')}
          style={{height: 30, width: 30, margin: 10}}
        />
      </Pressable>
      <View style={{borderBottomWidth: 1, marginLeft: 15, marginTop: 20}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#fc6b03',
          }}>
          {data?.name.toUpperCase()}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
          }}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            {'+91' + ' ' + data?.mobileno}
          </Text>
          <Text style={{fontSize: 16, color: 'black'}}>{data?.email}</Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.button} onPress={() => LogoutFn()}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#16CAEE',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 100,
    borderRadius: 10,
    marginTop: 10,
  },
});
