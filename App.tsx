import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import FlashScreen from './src/screens/FlashScreen';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import {Provider} from 'react-redux';
import store from './src/Redux/Store/Store';
import MenuItems from './src/components/MenuItems';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Flash"
            component={FlashScreen}
            options={{header: () => null}}
          />
          <Stack.Screen
            options={{header: () => null}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Signup"
            component={SignUp}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="Menu"
            component={MenuItems}
            options={{header: () => null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
