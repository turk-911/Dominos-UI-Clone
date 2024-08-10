import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import { PizzaScreen } from "./screens/PizzaScreen";
import { Pizza } from "./screens/Pizza";
import { OrderData } from "./screens/OrderData";
import { CartScreen } from "./screens/CartScreen";

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pizza"
          component={PizzaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PizzaMania"
          component={Pizza}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Order"
          component={OrderData}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
