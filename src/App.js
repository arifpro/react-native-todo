import React from "react";
import { Text, View, SafeAreaView } from "react-native";

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// icon
import Entypo from 'react-native-vector-icons/Entypo';

// components
import AllTodoList from "./components/AllTodoList";
import ActiveTodoList from "./components/ActiveTodoList";
import CompleteTodoList from "./components/CompleteTodoList";



const Tab = createBottomTabNavigator();


// export default function App() {
//   return (
//     <TabBar>
//       <TodoList />
//     </TabBar>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'All') iconName = 'list';
          else if (route.name === 'Active') {
            // iconName = focused ? 'ios-list-box' : 'ios-list';
            iconName = 'pin';
          }
          else if (route.name === 'Complete') iconName = 'check';

          // You can return any component that you like here!
          return <Entypo name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="All" component={AllTodoList} />
      <Tab.Screen name="Active" component={ActiveTodoList} />
      <Tab.Screen name="Complete" component={CompleteTodoList} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

