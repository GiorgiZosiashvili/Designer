import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageScroll = () => {
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator="false"
        horizontal
        style={styles.scroll}
      >
        <Image
          style={{ width: 250, height: 400, borderRadius: 30 }}
          source={require("../assets/design.jpeg")}
        />
        <Image
          style={{
            width: 250,
            height: 400,
            borderRadius: 30,
            marginHorizontal: 10,
          }}
          source={require("../assets/HOMEPAGE-image3.png")}
        />
        <Image
          style={{
            width: 250,
            height: 400,
            borderRadius: 30,
          }}
          source={require("../assets/HOMEPAGE-image6.png")}
        />
        <Image
          style={{
            width: 250,
            height: 400,
            borderRadius: 30,
            marginHorizontal: 10,
          }}
          source={require("../assets/HOMEPAGE-image7.png")}
        />
      </ScrollView>
    </View>
  );
};

export default ImageScroll;

const styles = StyleSheet.create({
  scroll: {
    width: "100%",
    height: 400,
    overflow: "hidden",
    marginBottom: 20,
  },
});
