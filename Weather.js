import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";


const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D28"],
        title: "Haze today",
        subtitle: "Be ware of your driving"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#1D4350","#A43931"],
        title: "What is going on today",
        subtitle: "recommended not to go outside"
    },
    Drizzle: {
        iconName: "weather-partly-rainy",
        gradient: ["#83a4d4", "#b6fbff" ],
        title: "It would be better pouring and just stop quickly",
        subtitle: "my wishes"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#2980b9", "#2c3e50"],
        title: "Who likes raining days?",
        subtitle: "Not me"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#43cea2", "#185a9d"],
        title: "Snow is being called trash in millitary",
        subtitle: "to someone it is romantic, to someone it is just a pieace of trash.."
    },
    Atmosphere: {
        iconName: "emoticon-happy-outline",
        gradient: ["#16BFFD","#CB3066"],
        title: "Wanna go outside?",
        subtitle: "maybe it is the right moment! enjoy!"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#4CA1AF","#C4E0E5"],
        title: "Wanna go outside?",
        subtitle: "maybe it is the right moment! enjoy!"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#4B79A1","#283E51"],
        title: "No sun No...",
        subtitle: "could be rainy..? better to get a umbrella"
    },
    Mist: {
        iconName: "water",
        gradient: ["#c2e59c", "#64b3f4"],
        title: "In fancy way, Mist.. In my way it is just a hummid day",
        subtitle: "hate this"
    },
    Dust: {
        iconName: "air-filter",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mask Mask again please for your health",
        subtitle: "we need fresh and clean air... "
    }

};


export default function Weather ({ temp, condition }){
    return (
            <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}>
                    <StatusBar barStyle="light=content" />
                    {/* Statusbar , it is like invisible bridge, it should be in a component, you can change this with props, barStyle  */}
                 <View style={styles.halfContainer}>
                    <MaterialCommunityIcons
                        size={96} 
                        name={weatherOptions[condition].iconName}
                        color="white"/>
                    <Text style={styles.temp}>{ temp }°</Text> 
                </View>
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
            </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 36,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 40,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});