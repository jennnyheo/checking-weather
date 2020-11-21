import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from 'axios';
import Weather from "./Weather";

const API_KEY = "8220791a48b6ff3bddd37adc53e6211b";

export default class extends React.Component {
  state = {
    isLoading: true,
  }
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get( 
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
      this.setState({ isLoading:false, temp: data.main.temp });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } =  await Location.getCurrentPositionAsync();
      //send to API nanf get the weather//
      // console.log(coords.latitude, coords.longitude);
      this.getWeather(latitude, longitude);
     
    } catch (error) {
      Alert.alert("can't find you", "so sad");
    }
      
  }
  componentDidMount(){
    this.getLocation();
  }
  render() {
    const { isLoading, temp } = this.state;
    return isLoading ?  <Loading /> : <Weather temp={Math.round(temp)}/>;
  }
}