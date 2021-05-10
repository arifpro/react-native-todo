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
// import DATA from "../data";
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
    marginBottom: 30,
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

// redux
import { useSelector } from "react-redux";

const CompleteTodoList = () => {
  const todo = useSelector((state) => state.todo);
  const [data, setData] = React.useState();

  React.useEffect(() => {
    setData(todo)
  }, [todo.todoData])

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, marginTop: 50 }}>
        <Text style={styles.headerText}>Completed Todo List</Text>

        <FlatList
          // data={DATA?.filter((item) => item.isDone)}
          data={data?.filter((item) => item.isDone)}
          renderItem={({ item }) => <SingleTodo title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default CompleteTodoList;
