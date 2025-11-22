import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSavedStore } from '../store/useSavedStore';
import { Ionicons } from '@expo/vector-icons';

type RootStackParamList = {
  NewsDetail: { id: string };
};

const { width } = Dimensions.get('window');

const SavedScreens = () => {
  const navigation = useNavigation<any>();
  const { savedNews, removeFromSaved } = useSavedStore();

  if (savedNews.length === 0) {
    return (
      <View className="flex-1 bg-[#0f1316] items-center justify-center">
        <Ionicons name="bookmark-outline" size={64} color="#4B5563" />
        <Text className="text-gray-400 text-lg mt-4">Henüz kaydedilmiş haber yok</Text>
      </View>
    );
  }

  return (
    <View className='flex-1 bg-[#0f1316] pt-4'>
      <FlatList
        data={savedNews}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
        ListHeaderComponent={
          <View className="px-4 mb-4">
            <Text className="text-white text-2xl font-bold mb-2">Kaydedilenler</Text>
            <View className="h-1 w-12 bg-[#FF6B00] rounded-full" />
          </View>
        }
        renderItem={({ item }) => (
          <View className="mb-6 mx-4 bg-[#1a1f24] rounded-xl overflow-hidden">
            <TouchableOpacity 
              onPress={() => navigation.navigate('NewsDetail', { id: item.id })}
              activeOpacity={0.8}
            >
              <Image 
                source={{ uri: item.imageUrl }} 
                className="w-full h-48"
                resizeMode="cover"
              />
              <View className="p-4">
                <View className="flex-row justify-between items-center mb-2">
                  <Text className="text-[#FF6B00] text-xs font-medium">
                    {item.category === 'gundem' ? 'GÜNDEM' : item.category === 'siyaset' ? 'SİYASET' : 'SPOR'}
                  </Text>
                  {item.isBreaking && (
                    <View className="bg-red-600 px-2 py-0.5 rounded-full">
                      <Text className="text-white text-xs font-medium">SON DAKİKA</Text>
                    </View>
                  )}
                </View>
                <Text 
                  className="text-white text-lg font-semibold mb-2" 
                  numberOfLines={2}
                >
                  {item.title}
                </Text>
                <Text 
                  className="text-gray-400 text-sm mb-3" 
                  numberOfLines={2}
                >
                  {item.description}
                </Text>
                <View className="flex-row justify-between items-center">
                  <Text className="text-gray-500 text-xs">{item.date}</Text>
                  <Text className="text-gray-400 text-xs">{item.author}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => removeFromSaved(item.id)}
              className="absolute top-2 right-2 bg-black/70 p-2 rounded-full"
            >
              <Ionicons name="bookmark" size={20} color="#FF6B00" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default SavedScreens