import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  TrashIcon,
} from "react-native-heroicons/solid";

export default function HomeScreen() {

  //  categories APIs

  //   featured APIs

  //   console.log("Featured Items", featured);

  return (
    <>
      <SafeAreaView className=" bg-white">
        <View className="bg-white">
          <View className=" mt-10 mb-4 mx-4 flex-row items-center justify-between space-x-3">
              <TouchableOpacity>
                <Image
                  source={require("../assets/images/IMG_0616.jpg")}
                  className=" w-14 h-14 object-contain rounded-full"
                />
              </TouchableOpacity>
            <View className="flex-1">
              <Text className=" font-bold text-base text-gray-800">
                Salut Alino!
              </Text>
              <Text className="font-light text-xs text-gray-600">
                Bonne apetit !
              </Text>
            </View>
            <TouchableOpacity
              className=" p-3 flex items-center justify-center rounded-full bg-gray-300"
            >
              <Text className=" absolute top-0 left-3 font-bold text-red-500">
                0
              </Text>
              <TrashIcon size={22} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}


