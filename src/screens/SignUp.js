/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assests/images/delivery.png')}
        style={{height: 100, width: 100}}
      />
      <Text style={styles.txt}>Create Account</Text>
      <Formik
        initialValues={{
          name: '',
          email: '',
          mobileno: '',
          password: '',
          confirmpassword: '',
        }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required...';
          }
          if (!values.password) {
            errors.password = 'Required...';
          }
          if (!values.mobileno) {
            errors.mobileno = 'Required...';
          }
          if (!values.confirmpassword) {
            errors.confirmpassword = 'Required...';
          } else if (values.password !== values.confirmpassword) {
            errors.confirmpassword =
              'confirm Password should match with password';
          }
          if (!values.email) {
            errors.email = 'Required...';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={values => {
          console.log(values);
          navigation.navigate('Login');
          AsyncStorage.setItem('user', JSON.stringify(values));
        }}>
        {({handleSubmit, values, handleChange, errors, touched}) => (
          <>
            <View style={{display: 'flex', flexDirection: 'column', gap: 20}}>
              <TextInput
                style={styles.inpt}
                placeholder="Name"
                value={values.name}
                onChangeText={handleChange('name')}
              />
              {errors.name && touched.name && (
                <Text style={{color: 'red'}}> {errors.name}</Text>
              )}
              <TextInput
                style={styles.inpt}
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange('email')}
              />
              {errors.email && touched.email && (
                <Text style={{color: 'red'}}> {errors.email}</Text>
              )}
              <TextInput
                style={styles.inpt}
                placeholder="Mobile No"
                value={values.mobileno}
                onChangeText={handleChange('mobileno')}
              />
              {errors.mobileno && touched.mobileno && (
                <Text style={{color: 'red'}}> {errors.mobileno}</Text>
              )}
              <TextInput
                style={styles.inpt}
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry={true}
              />
              {errors.password && touched.password && (
                <Text style={{color: 'red'}}> {errors.password}</Text>
              )}
              <TextInput
                style={styles.inpt}
                placeholder="ConfirmPassword"
                value={values.confirmpassword}
                secureTextEntry={true}
                onChangeText={handleChange('confirmpassword')}
              />
              {errors.confirmpassword && touched.confirmpassword && (
                <Text style={{color: 'red'}}> {errors.confirmpassword}</Text>
              )}
              <Pressable style={styles.loginbtn} onPress={handleSubmit}>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
                  SignUp
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
                marginBottom: 20,
              }}>
              <Text>Already have an account?</Text>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <Text
                  style={{
                    color: '#0917F0',
                    fontWeight: 'bold',
                    fontSize: 15,
                    alignItems: 'center',
                  }}>
                  Login
                </Text>
              </Pressable>
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3F59E8',
    marginBottom: 20,
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
