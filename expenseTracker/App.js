import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpenses from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpenseOverview = () => {
  <BottomTabs.Navigator>
    <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} />
    <BottomTabs.Screen name="AllExpenses" component={AllExpenses} />
  </BottomTabs.Navigator>;
};
export default function App() {
  return (
    <>
      <StatusBar style="auto"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpenseOverview"
            component={ExpenseOverview}
          ></Stack.Screen>
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpenses}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
