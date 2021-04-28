import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

// icon
// import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 8,
    borderRadius: 12,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 16,
  },
  btns: {
    flexDirection: "row",
  },
  btn: {
    marginHorizontal: 10,
  },
});

const SingleTodo = ({ title, isDone }) => (
  <View style={styles.item}>
    <Text
      style={{ ...styles.title, textDecorationLine: isDone ? "line-through" : 	'none' }}
    >
      {title}
    </Text>
    <View style={styles.btns}>
      <TouchableOpacity
        style={styles.btn}
        // onPress={}
      >
        <MaterialIcons name="done-all" size={25} color="green"></MaterialIcons>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        // onPress={}
      >
        <Entypo name="edit" size={25} color="blue"></Entypo>
        {/* <Feather name="edit" size={25} color="skyblue"></Feather> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        // onPress={}
      >
        <MaterialIcons name="delete" size={25} color="tomato"></MaterialIcons>
      </TouchableOpacity>
    </View>
  </View>
);

export default SingleTodo;
