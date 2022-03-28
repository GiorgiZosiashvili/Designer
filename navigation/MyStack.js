import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import React from "react";
import Design from "../Screens/Design";
import HomeScreen from "../Screens/HomeScreen";
const Stack = createNativeStackNavigator();

const MyStack = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Design" component={Design} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
const styles = StyleSheet.create({
  mystack: {
    flex: 1,
  },
});
