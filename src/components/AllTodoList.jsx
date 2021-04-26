import React from "react";
import {  StyleSheet, View, Text, TextInput } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    // fontFamily: "Comic Sans MS",
    borderRadius: 25,
    paddingLeft: 20,
  },
});

const AllTodoList = () => {
  const [text, onChangeText] = React.useState("");

  return (
    // <SafeAreaView>
      <View style={{ flex: 1, marginTop: 50 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            // fontFamily: "Comic Sans MS",
          }}
        >
          All Todo List
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="What needs to be done?"
        />
      </View>
    // </SafeAreaView>
  );
};

export default AllTodoList;
