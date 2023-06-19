/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axiosInstance from '../../assests/utils/axiosInstance';

const MenuItems = () => {
  const [menu, setMenu] = useState([]);
  const fetchMenu = async () => {
    try {
      const res = await axiosInstance.get(
        'https://naveensutar.github.io/FoodData/menuItem.json',
      );
      const data = await res.data;
      setMenu(data.itemCards);
      console.log(menu);
    } catch (error) {}
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <View>
      <FlatList
        data={menu}
        renderItem={({item}) => (
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <View>
                <Text>{item?.card?.info?.name}</Text>
              </View>
              <View>
                <Image
                  source={{
                    uri: `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item?.card?.info?.imageId}`,
                  }}
                  style={{
                    width: Dimensions.get('window').width / 4,
                    height: Dimensions.get('window').width / 4,
                    borderRadius: Dimensions.get('window').width / 20,
                  }}
                />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default MenuItems;

const styles = StyleSheet.create({});
