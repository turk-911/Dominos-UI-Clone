import { useContext } from "react";
import pizzaMania from "../data/pizzaMania";
import { CartItems } from "../Context";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Pressable, SafeAreaView, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PizzaComponent from "../components/PizzaComponent";

export default function Pizza() {
  const data = pizzaMania;
  const { cart, setCart } = useContext(CartItems);
  const navigation = useNavigation();
  const total = cart
    .map((item) => Number(item.price * item.quantity))
    .reduce((prev, curr) => prev + curr, 0);
  console.log(total, "total");
  console.log(cart, "cart items added");
  return (
    <SafeAreaView>
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={24}
        color="black"
      />
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <PizzaComponent pizza={item} />}
      />
      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "green",
            padding: 10,
            position: "absolute",
            bottom: 100,
            left: 150,
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              color: "white",
            }}
          >
            Go to Cart
          </Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
}
