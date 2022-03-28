import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const Header = (press) => {
  return (
    <View style={styles.header}>
      <View style={{ position: "absolute", zIndex: 2 }}>
        <Image style={styles.logo} source={require("../assets/ANNEAS.png")} />
      </View>
      <View style={styles.circle}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    height: 130,
  },
  logo: {
    left: 20,
    top: 15,
    width: 150,
    height: 35,
  },
  circle: {
    width: 350,
    height: 350,
    position: "absolute",
    backgroundColor: "#E0D6CD",
    borderRadius: 500,
    zIndex: 1,
    left: 95,
    bottom: -55,
  },
});
