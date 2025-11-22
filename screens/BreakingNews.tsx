import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  NewsDetail: { id: string };
};
import { getNewsByCategory } from '../data/newsData';

const { width } = Dimensions.get('window');

const NewsCard = ({ item, onPress }: { item: any, onPress: () => void }) => (
  <TouchableOpacity 
    onPress={onPress}
    className="mb-6 mx-4"
    activeOpacity={0.8}
  >
    <View className="bg-[#1a1f24] rounded-xl overflow-hidden">
      <Image 
        source={{ uri: item.imageUrl }} 
        className="w-full h-48"
        resizeMode="cover"
      />
      <View className="p-4">
        <View className="flex-row items-center mb-2">
          <Text className="text-[#FF6B00] text-xs font-medium">
            {item.category === 'gundem' ? 'GÜNDEM' : item.category === 'siyaset' ? 'SİYASET' : 'SPOR'}
          </Text>
          {item.isBreaking && (
            <View className="bg-red-600 px-2 py-0.5 rounded-full ml-2">
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
          className="text-gray-400 text-sm" 
          numberOfLines={2}
        >
          {item.description}
        </Text>
        <View className="flex-row justify-between items-center mt-3">
          <Text className="text-gray-500 text-xs">{item.date}</Text>
          <Text className="text-gray-400 text-xs">{item.author}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const BreakingNews = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [refreshing, setRefreshing] = useState(false);
  
  const news = getNewsByCategory('gundem');

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const renderItem = ({ item }: { item: any }) => (
    <NewsCard 
      item={item} 
      onPress={() => navigation.navigate('NewsDetail', { id: item.id })} 
    />
  );

  return (
    <View className="flex-1 bg-[#0f1316] pt-4">
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListHeaderComponent={
          <View className="px-4 mb-4">
            <Text className="text-white text-2xl font-bold mb-2">Güncel Haberler</Text>
            <View className="h-1 w-12 bg-[#FF6B00] rounded-full" />
          </View>
        }
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center mt-20">
            <Text className="text-gray-400">Henüz haber bulunmuyor</Text>
          </View>
        }
      />
    </View>
  );
};

export default BreakingNews;

// 11171c banner şeysinin rengi