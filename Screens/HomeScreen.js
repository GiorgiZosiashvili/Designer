import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import React, { useCallback } from "react";
import Header from "../Components/Header";
import Center from "../Components/Center";
import Projects from "../Components/Projects";
import { Entypo } from "@expo/vector-icons";

import Animated, {
  event,
  useAnimatedGestureHandler,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Menu from "../Components/Manu";
const HomeScreen = ({ navigation }) => {
  const translateX = useSharedValue(0);
  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.x = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX - +context.x;
      if (translateX.value > 0) {
        translateX.value = 0;
      }
    },
    onEnd: () => {
      translateX.value = withTiming(0);
    },
  });
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });
  const onPress = useCallback(() => {
    if (translateX.value < 0) {
      translateX.value = withTiming(0);
    } else {
      translateX.value = withTiming(-130);
    }
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#E0D7CE" }}>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={[styles.homeScreen, rStyle]}>
          <ImageBackground
            style={styles.homeImage}
            source={require("../assets/HOMEPAGE-image.png")}
          >
            <ScrollView
              showsVerticalScrollIndicator="false"
              style={styles.homeScreen}
            >
              <Header />
              <View style={{ marginHorizontal: 20, flex: 1 }}>
                <Center navigation={navigation} />
                <Projects />
              </View>
            </ScrollView>
          </ImageBackground>
          <TouchableOpacity
            onPress={onPress}
            style={{
              position: "absolute",
              height: 35,
              width: 35,
              alignItems: "center",
              justifyContent: "center",
              top: 15,
              zIndex: 2,
              right: 20,
            }}
          >
            <Entypo name="menu" size={35} color="black" />
          </TouchableOpacity>
        </Animated.View>
      </PanGestureHandler>
      <Menu />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,

    // marginTop: 40,
  },
  homeImage: {
    width: "100%",
    height: "100%",
  },
});
