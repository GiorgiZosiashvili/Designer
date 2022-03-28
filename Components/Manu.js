import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Menu = () => {
  const [currentTab, setCurrentTab] = useState("Home");
  return (
    <SafeAreaView style={styles.menuContainer}>
      <View
        style={{
          height: "50%",
          justifyContent: "space-evenly",
          borderRadius: 50,
        }}
      >
        {TabButton(
          currentTab,
          setCurrentTab,
          "Home",
          <Entypo
            style={{ marginRight: 5 }}
            name="home"
            size={22}
            color="black"
          />
        )}
        {TabButton(
          currentTab,
          setCurrentTab,
          "Search",
          <AntDesign
            style={{ marginRight: 5 }}
            name="search1"
            size={22}
            color="black"
          />
        )}
        {TabButton(
          currentTab,
          setCurrentTab,
          "Notifications",
          <Ionicons
            style={{ marginRight: 5 }}
            name="notifications"
            size={22}
            color="black"
          />
        )}
        {TabButton(
          currentTab,
          setCurrentTab,
          "Settings",
          <Ionicons
            style={{ marginRight: 5 }}
            name="settings"
            size={22}
            color="black"
          />
        )}
      </View>
    </SafeAreaView>
  );
};
const TabButton = (currentTab, setCurrentTab, title, Icon) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setCurrentTab(title);
      }}
      style={styles.touchables}
    >
      <View
        style={[
          styles.navigations,
          { backgroundColor: currentTab == title ? "white" : "transparent" },
        ]}
      >
        {Icon}
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Menu;

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    alignItems: "flex-end",
    backgroundColor: "#DFD5CD",
    position: "absolute",
    height: "100%",
    zIndex: -1,
    right: 0,
  },
  touchables: {
    margin: 5,
  },
  navigations: {
    width: 120,
    height: 27,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 1,
  },
});
