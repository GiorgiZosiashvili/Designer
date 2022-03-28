import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageScroll from "./ImageScroll";

const Projects = () => {
  return (
    <View>
      <View style={styles.projectView}>
        <Text style={styles.projectText}>Last projects</Text>
      </View>
      <ImageScroll />
    </View>
  );
};

export default Projects;

const styles = StyleSheet.create({
  projectView: {
    height: 25,
    marginVertical: 15,
    width: 170,
    backgroundColor: "black",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  projectText: {
    fontSize: 16,
    color: "white",
    fontFamily: "BernhardModBTBold",
  },
});
