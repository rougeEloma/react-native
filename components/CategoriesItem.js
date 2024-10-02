import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function CategoriesItem({ name }) {
  return (
    <TouchableOpacity>
      <View className=" mx-1 p-1 px-3bg-white rounded-full border border-gray-300">
        <Text className="font-bold text-[#1a4155]">{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
