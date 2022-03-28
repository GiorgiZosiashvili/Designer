import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Design = ({ navigation }) => {
  return (
    <View style={styles.design}>
      <View>
        <Text style={styles.mainText}>MEET THE DESIGNER</Text>
        <View
          style={{
            width: 150,
            height: 1,
            backgroundColor: "#676A5F",
            marginVertical: 10,
          }}
        ></View>
        <Text style={styles.text}>
          My name is Ana Abrakhamia. After acquiring a Bachelor's Degree in
          Social and Political sciences at Tbilisi State University, I worked as
          a marketing analyst. However, later I found what I desire and where I
          see myself. Thus I decided to explore new digital spheres. I learned
          Adobe programs with accessible online sources and became skilled in
          them. During this learning process, I had a chance to make a Web/app
          design, which inspired my interest in UI/UX design. As I have already
          acquired some skills in UI design and Adobe Programs, I now need to
          aggravate my understanding of user experience.
        </Text>
      </View>
      <View>
        <Image
          style={{
            width: 300,
            height: 300,
            borderRadius: 200,
            marginVertical: 20,
          }}
          source={require("../assets/Anastasia.jpeg")}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={styles.touchable}
      >
        <Text style={styles.touchableText}>HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Design;

const styles = StyleSheet.create({
  touchable: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    width: 125,
    height: 33,
    backgroundColor: "#E2B562",
  },
  touchableText: {
    fontFamily: "BernhardModBTBold",
    fontSize: 14,
  },
  design: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E4DED7",
    padding: 20,
  },
  mainText: {
    color: "#676A5F",
    fontSize: 20,
    fontFamily: "BernhardModBTBold",
  },
  text: {
    fontSize: 14,
    color: "#676A5F",
    fontFamily: "BernhardModBTBold",
  },
});
