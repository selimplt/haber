import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  home: undefined;
  haberDetay: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View className='flex-1 bg-neutral-800'>
      <Text className='text-3xl'>homeScreen</Text>
      <TouchableOpacity onPress={() => navigation.push("haberDetay")}><Text>asd</Text></TouchableOpacity>
    </View>
  )
}

export default HomeScreen