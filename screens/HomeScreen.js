import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  TrashIcon,
} from "react-native-heroicons/solid";
import CategoriesItem from "../components/CategoriesItem";
import sanityClient from "../sanity";
import FeaturedItems from "../components/FeaturedItems";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCartItems } from "../slice/CartSlice";

export default function HomeScreen() {
  const navigation = useNavigation();
  const items = useSelector(selectCartItems);
  const [categories, setCategories] = useState([]);
  const [featured, setFeatured] = useState([]);

  //  categories APIs
  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "category"]
    `
      )
      .then((data) => setCategories(data));
  }, []);

  //   featured APIs
  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured"]
    `
      )
      .then((data) => setFeatured(data));
  }, []);

  //   console.log("Featured Items", featured);

  return (
    <>
      <SafeAreaView className=" bg-white">
        <View className="bg-white">
          <View className=" mx-4 p-3 mt-7 mb-3 flex-row items-center justify-between space-x-3">
            <TouchableOpacity>
              <Image
                source={require("../assets/images/IMG_0616.jpg")}
                className=" w-14 h-14 object-contain rounded-full"
              />
            </TouchableOpacity>
            <View className="flex-1">
              <Text className=" font-bold text-base text-gray-800">
                Salut Alain !
              </Text>
              <Text className="font-light text-xs text-gray-600">
                Mont Ngafula - Maman Mobutu
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Cart")}
              className=" p-3 flex items-center justify-center rounded-full bg-gray-300"
            >
              <Text className=" absolute top-0 left-3 font-bold text-red-500">
                {items.length}
              </Text>
              <TrashIcon size={22} color="black" />
            </TouchableOpacity>
          </View>
          <View className=" mx-4 mb-3">
            <Text className=" font-thin text-4xl text-[#163646]">Commandez vos</Text>
            <Text className=" font-extrabold text-4xl text-[#163646]">
              plats préférés😋
            </Text>
          </View>
          {/* search Phrase */}
          <View className=" m-1 mx-4 p-3 bg-gray-300 rounded-xl mb-3 shadow-lg">
            <TouchableOpacity className=" absolute top-2 left-2">
              <MagnifyingGlassIcon size={24} color="black" />
            </TouchableOpacity>
            <TextInput
              placeholder="Rechercher restaurants, plats, etc."
              placeholderTextColor="gray"
              keyboardType="default"
              className=" placeholder:px-8"
            />
            <TouchableOpacity className="absolute top-2 right-2 border-l px-1">
              <AdjustmentsHorizontalIcon size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      {/* menu, categories and dishes section */}
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View className="mx-4 mt-2 mb-2">
          <Text className=" font-extrabold text-[#f17e5e] text-lg">
            Categories
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className=" mt-2"
          >
            {categories.map((category) => (
              <CategoriesItem key={category._id} name={category.name} />
            ))}
          </ScrollView>
          {/* featured */}
          <View className=" mt-1 mb-10">
            <View>
              {featured.map((featured) => (
                <FeaturedItems
                  key={featured._id}
                  id={featured._id}
                  featured={featured}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
