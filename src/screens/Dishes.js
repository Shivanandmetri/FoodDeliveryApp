/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import axiosInstance from '../../assests/utils/axiosInstance';
import {SliderBox} from 'react-native-image-slider-box';
import {useSelector, useDispatch} from 'react-redux';
import {SliderAction} from '../Redux/Action/SliderAction';
import {ResturantAction} from '../Redux/Action/ResturantAction';
import Location from '../components/Location';

const Dishes = () => {
  const dispatch = useDispatch();
  const caroselimg = useSelector(state => state.carousel);
  const resturantimg = useSelector(state => state.resturants);
  const fetchData = async () => {
    try {
      const res = await axiosInstance.get('FoodData/data.json');
      dispatch(SliderAction(res.data.cards[0].data.data.cards));
      dispatch(ResturantAction(res.data.cards[2].data.data.cards));
    } catch (error) {}
  };

  const carImage = caroselimg.map(
    x =>
      `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${x?.data?.creativeId}`,
  );

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Location />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#E2E2E1',
          height: 50,
          borderRadius: 15,
          marginVertical: 10,
          marginHorizontal: 10,
        }}>
        <TextInput
          placeholder="Search for restaurants and food"
          style={styles.search}
        />
        <Image
          source={require('../../assests/images/search.png')}
          style={{height: 25, width: 25}}
        />
        <Image
          source={require('../../assests/images/vertical-line.png')}
          style={{height: 25, width: 30, tintColor: 'gray'}}
        />
        <Image
          source={require('../../assests/images/microphone-black-shape.png')}
          style={{height: 20, width: 20, tintColor: '#FA6104'}}
        />
      </View>
      <SliderBox
        images={carImage}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        sliderBoxHeight={230}
        autoplay={true}
        circleLoop
      />
      <Text
        style={{fontSize: 20, fontWeight: 'bold', color: 'black', margin: 5}}>
        15 Restaurants to explore
      </Text>
      {/* Restaurants */}
      <FlatList
        data={resturantimg}
        renderItem={({item}) => (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
              marginBottom: 10,
              paddingHorizontal: 5,
            }}>
            <Image
              source={{
                uri: `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item?.data?.cloudinaryImageId}`,
              }}
              style={{
                height: 180,
                width: 150,
                borderRadius: 15,
              }}
            />
            <View style={{width: 250, marginTop: 10}}>
              <Text
                numberOfLines={1}
                style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                {item?.data?.name}
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                }}>
                <Image
                  source={require('../../assests/images/star2.png')}
                  style={{
                    height: 20,
                    width: 20,
                  }}
                />
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                  {item?.data?.avgRating}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                  }}>{`(${item?.data?.totalRatingsString})`}</Text>

                <Text
                  numberOfLines={1}
                  style={{fontSize: 12, fontWeight: 'bold', color: 'black'}}>
                  &bull; {item?.data?.slaString}
                </Text>
              </View>
              <Text numberOfLines={1}>{item?.data?.cuisines + ' '}</Text>
              <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                <Text>{item?.data?.area}</Text>
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
                  &bull; {item?.data?.lastMileTravelString}
                </Text>
              </View>
              <View style={styles.freedel}>
                <Image
                  source={require('../../assests/images/scooter.png')}
                  style={styles.scooty}
                />
                <Text style={{fontWeight: 'bold', color: '#600af5'}}>
                  FREE DELIVERY
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Dishes;

const styles = StyleSheet.create({
  search: {
    height: 40,
    margin: 10,
    padding: 10,
  },
  scooty: {
    height: 20,
    width: 20,
    tintColor: '#fff',
    backgroundColor: '#600af5',
    borderRadius: 20,
  },
  freedel: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#d9c9f5',
    borderRadius: 20,
    gap: 10,
    alignItems: 'center',
    paddingLeft: 5,
    width: 150,
    height: 25,
    marginTop: 10,
  },
});

// https://naveensutar.github.io/FoodData/menuItem.json
