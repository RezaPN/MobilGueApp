import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Wishlist from './src/screen/Wishlist';
import SearchScreen from './src/screen/SearchScreen';
import FilterScreen from './src/screen/FilterScreen';
import CartScreen from './src/screen/CartScreen';
import DetailScreen from './src/screen/DetailScreen';
import AccountScreen from './src/screen/AccountScreen';
import StartPage from './src/screen/Startpage';
import loginPage from './src/screen/Login';
import signUpPage from './src/screen/Register';
import homePage from './src/screen/Homepage';
import HeaderCustom from './src/screen/HeaderCustom';

export default class App extends Component {
  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="startPage" headerMode="none">
          <Stack.Screen name="Wishlist" component={Wishlist} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Filter" component={FilterScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
          <Stack.Screen name="startPage" component={StartPage} />
          <Stack.Screen name="login" component={loginPage} />
          <Stack.Screen name="signup" component={signUpPage} />
          <Stack.Screen name="home" component={homePage} />
          <Stack.Screen name="back" component={HeaderCustom} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
