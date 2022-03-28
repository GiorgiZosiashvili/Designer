import { StyleSheet, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import MyStack from "./navigation/MyStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    BernhardModBTBold: require("./assets/fonts/BernhardModBTBold.ttf"),
  });
  if (!fontsLoaded) return null;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <MyStack navigation={navigator} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0EDEC",
  },
});
