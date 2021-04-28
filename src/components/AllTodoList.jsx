import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
} from "react-native";
import DATA from "../data";
import SingleTodo from "./SingleTodo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  headerText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    // fontFamily: "Comic Sans MS",
    // color: "#f9c2ff",
    color: "#519e9e",
  },
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
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, marginTop: 50 }}>
        <Text style={styles.headerText}>All Todo List</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="What needs to be done?"
        />

        <FlatList
          data={DATA}
          renderItem={({ item }) => <SingleTodo title={item.title} isDone={item.isDone} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllTodoList;
