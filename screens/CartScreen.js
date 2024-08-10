import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { CartItems } from "../Context";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

export default function CartScreen() {
  const navigation = useNavigation();
  const { cart, setCart } = useContext(CartItems);
  const total = cart
    .map((item) => Number(item.price * item.quantity))
    .reduce((prev, curr) => prev * curr, 0);
  const sides = [
    {
      id: "0",
      name: "Chicken Parcel",
      description:
        "Filled with zingy and tender chicken inside, wrapped in a parcel",
      image:
        "https://www.dominos.co.in/files/items/150135_Aha_Non_Veg_439x307-01.jpg",
      price: 80,
      quantity: 1,
    },
    {
      id: "1",
      name: "Taco Chicken",
      description: "A crispy flaky wrap filled with Mexican Arancini",
      image: "https://www.dominos.co.in/files/items/Main_Menu-NVG.jpg",
      price: 120,
      quantity: 1,
    },
    {
      id: "2",
      name: "7 Up (500ml)",
      description: "A cool drink to compliment your orders",
      image: "https://www.dominos.co.in/files/items/7up.png",
      price: 56,
      quantity: 1,
    },
    {
      id: "3",
      name: "Choco Lava Cake",
      description: "Volcano cake filled with molten choco lava cake inside",
      price: 80,
      quantity: 1,
    },
  ];
  function addToCart(item) {
    setCart([...cart, item]);
  }
  function placeOrder() {
    navigation.navigate("Order");
    setCart([]);
  }
  return (
    <>
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cart.map((item, key) => (
            <Pressable
              key={key}
              style={{
                backgroundColor: "#006491",
                padding: 10,
                margin: 10,
                borderRadius: 8,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{ width: 70, height: 70, borderRadius: 6 }}
                  source={{ uri: item.image }}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
                  >
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 6,
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 17 }}>
                      {item.size}
                    </Text>
                    <Text style={{ color: "white", fontSize: 15 }}>
                      {" "}
                      | {item.description.substr(0, 25) + "..."}
                    </Text>
                  </View>
                  <Text style={{ color: "white", fontSize: 16 }}>
                    ₹{item.price * item.quantity}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold", padding: 8 }}>
              People also ordered
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {sides.map((item, key) => (
                <Pressable
                  style={{
                    margin: 10,
                    backgroundColor: "#e8e8e8",
                    borderRadius: 4,
                    width: 160,
                    height: 130,
                  }}
                >
                  <View
                    style={{
                      padding: 10,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60, borderRadius: 6 }}
                      source={{ uri: item.image }}
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ width: 70, fontSize: 15 }}>
                        {item.name}
                      </Text>
                      <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                        ₹{item.price}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderColor: "#bebebe",
                      borderRadius: 1,
                      borderStyle: "dotted",
                      borderWidth: 0.5,
                      marginTop: 3,
                    }}
                  />
                  <Pressable onPress={() => addToCart(item)}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 16,
                        color: "green",
                        marginTop: 10,
                        fontWeight: "600",
                      }}
                    >
                      Add to Cart
                    </Text>
                  </Pressable>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      {total === 0 ? (
        <Pressable
          style={{
            marginBottom: "auto",
            marginTop: "auto",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "500" }}>
            Cart is Empty
          </Text>
          <Image
            style={{ width: 250, height: 600, resizeMode: "contain" }}
            source={{
              uri: "https://pizzaonline.dominos.co.in/static/assets/empty_cart@2x.png",
            }}
          />
        </Pressable>
      ) : (
        <View style={{ height: 200 }}>
          <View
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
          >
            <Entypo name="location-pin" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Delivering to Home
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  width: 200,
                  marginTop: 3,
                  color: "gray",
                }}
              >
                Boys Hostel 3, IIIT Allahabad
              </Text>
            </View>
          </View>
          <View
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
          >
            <FontAwesome5 name="amazon-pay" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 54 }}>₹{total}</Text>
              <Text
                style={{
                  fontSize: 16,
                  width: 200,
                  marginTop: 3,
                  color: "gray",
                }}
              >
                Pay via Cash
              </Text>
            </View>
          </View>
          <Pressable
            onPress={placeOrder}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "green",
              padding: 10,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Place Order
            </Text>
          </Pressable>
        </View>
      )}
    </>
  );
}
