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
    } catch (error) {}
  };

  console.log(menu);

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
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                marginHorizontal: 15,
                marginBottom: 10,
              }}>
              <View>
                {item?.card?.info?.itemAttribute?.vegClassifier === 'VEG' ? (
                  <Image
                    source={require('../../assests/images/icons8-veg-48.png')}
                    style={{height: 20, width: 20}}
                  />
                ) : (
                  <Image
                    source={require('../../assests/images/non-veg-48.png')}
                    style={{height: 20, width: 20}}
                  />
                )}
                <Text>{item?.card?.info?.name}</Text>
                <Text>{item?.card?.info?.itemAttribute?.portionSize}</Text>
                <Text>₹{item?.card?.info?.price / 100}</Text>
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
                    // marginBottom:5
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
