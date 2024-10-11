import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpenses from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { GlobalStyles } from "./constants/styles";
import {Ionicons} from '@expo/vector-icons'
import IconButton from "./UI/IconButton";
import { ExpensesContextProvider } from "./store/expenses-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store/store";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpenseOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions= {({navigation})=>({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({tintColor}) => <IconButton icon='add' size={24} color={tintColor} onPress={()=>navigation.navigate("ManageExpense")} />
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color}></Ionicons>
          ),
        }}
      />
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses}
      options={{
        title: "All Expenses",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="calendar" size={size} color={color}></Ionicons>
        ),
      }} />
    </BottomTabs.Navigator>
  );
};
export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      {/* <ExpensesContextProvider> */}
      <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="ExpenseOverview"
            component={ExpenseOverview}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpenses}
            options={{
              presentation:'modal'
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
      {/* </ExpensesContextProvider> */}
    </>
  );
}
