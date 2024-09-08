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
                Une petite faim ?!
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
          <View className=" mx-4 mb-3">
            <Text className=" font-thin text-4xl text-black">Commandes</Text>
            <Text className=" font-extrabold text-4xl text-black">
              Ton plat préféré😋
            </Text>
          </View>
          {/* search Phrase */}
          <View className=" m-1 mx-4 p-3 bg-gray-300 rounded-xl mb-3 shadow-lg">
            <TouchableOpacity className=" absolute top-2 left-2">
              <MagnifyingGlassIcon size={24} color="black" />
            </TouchableOpacity>
            <TextInput
              placeholder="Search Restaurant and Dishes,..."
              placeholderTextColor="black"
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
          <Text className=" font-extrabold text-[#f19c13] text-lg">
            Catégories
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className=" mt-2"
          >
            <Text className="  text-[#2d2d2d] text-lg">
              ##Dish Categories
            </Text>
          </ScrollView>
          {/* menu */}
          <View className=" mt-1 mb-10">
            <Text className="  text-[#2d2d2d] text-lg">
              ##Featured Items
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}


