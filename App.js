import React, { useState } from "react";

import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function App() {
  const increaser = 1;
  const [counterNum, setCounterNum] = useState(0);
  return (
    <View style={styles.container}>
      <Text>{counterNum}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCounterNum(counterNum + increaser)}
      >
        <Text>Increase!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    color: "#fff"
  }
});
