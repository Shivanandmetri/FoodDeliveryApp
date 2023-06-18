/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const getData = async values => {
    try {
      const res = await AsyncStorage.getItem('user');
      const data = JSON.parse(res);
      console.log('data', data);
      if (data.email === values.email && data.password === values.password) {
        Alert.alert('Login Success');
        navigation.navigate('Home');
      } else {
        Alert.alert('Details Miss Match');
      }
    } catch (error) {}
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assests/images/delivery.png')}
        style={{height: 100, width: 100}}
      />
      <Text style={styles.welc}>Welcome back.</Text>
      <Formik
        initialValues={{email: '', password: ''}}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required...';
          }
          if (!values.password) {
            errors.password = 'Required...';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={values => {
          getData(values);
        }}>
        {({values, handleChange, handleSubmit, errors, touched}) => (
          <>
            <View style={{display: 'flex', flexDirection: 'column', gap: 20}}>
              <TextInput
                keyboardType="email-address"
                style={styles.inpt}
                placeholder="Email-Address"
                value={values.email}
                onChangeText={handleChange('email')}
              />
              {errors.email && touched.email && (
                <Text style={{color: 'red'}}>{errors.email}</Text>
              )}
              <TextInput
                secureTextEntry={true}
                style={styles.inpt}
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
              />
              {errors.password && touched.password && (
                <Text style={{color: 'red'}}>{errors.password}</Text>
              )}
              <Text style={{marginLeft: 220, color: '#3F59E8', fontSize: 16}}>
                Forgot Password?
              </Text>
              <Pressable style={styles.loginbtn} onPress={handleSubmit}>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
                  Login
                </Text>
              </Pressable>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', gap: 5}}>
              <Text>Don't have an account?</Text>
              <Pressable onPress={() => navigation.navigate('Signup')}>
                <Text
                  style={{
                    color: '#0917F0',
                    fontWeight: 'bold',
                    fontSize: 15,
                    alignItems: 'center',
                  }}>
                  SignUp
                </Text>
              </Pressable>
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  welc: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3F59E8',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inpt: {
    borderWidth: 1,
    height: 55,
    width: 350,
    paddingLeft: 20,
    borderRadius: 5,
  },
  loginbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    width: 350,
    backgroundColor: '#0917F0',
    borderRadius: 5,
    marginBottom: 20,
  },
});
