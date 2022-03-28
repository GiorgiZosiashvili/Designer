import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Center = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Image
        style={styles.centerImage}
        source={require("../assets/HOMEPAGE-image4.png")}
      />
      <View
        style={{
          height: 410,
          alignItems: "center",
        }}
      >
        <Text style={styles.centerText}>I will help you</Text>
        <Text style={styles.centerText}>to create the home</Text>
        <Text style={styles.centerText}>you need for the life</Text>
        <Text style={styles.centerText}>you want.</Text>

        <TouchableOpacity
          style={styles.aboutme}
          onPress={() => navigation.navigate("Design")}
        >
          <Text style={styles.aboutmeText}>About me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Center;

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
  centerImage: {
    width: 250,
    height: 450,
    position: "absolute",
    top: -40,
    zIndex: -1,
    borderRadius: 30,
  },
  centerText: {
    fontFamily: "BernhardModBTBold",
    height: 30,
    fontSize: 25,
    textAlign: "center",
  },
  aboutme: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    width: 125,
    height: 33,
    backgroundColor: "#E2B562",
  },
  aboutmeText: {
    fontFamily: "BernhardModBTBold",
    fontSize: 14,
  },
});
