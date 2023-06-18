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
      <Pressable>
        <Image
          source={require('../../assests/images/left-arrow.png')}
          style={{height: 30, width: 30}}
        />
      </Pressable>
      <View style={{borderBottomWidth: 1}}>
        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
          {data?.name.toUpperCase()}
        </Text>
        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
          {data?.mobileno}
        </Text>
        <Text style={{fontSize: 16}}>{data?.email}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => LogoutFn()}>
        <Text>Logout</Text>
      </TouchableOpacity>
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
    width: 200,
    borderRadius: 20,
  },
});
