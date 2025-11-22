import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Dimensions, Keyboard } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { newsData } from '../data/newsData';

const { width } = Dimensions.get('window');

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNews, setFilteredNews] = useState<any[]>([]);
  const navigation = useNavigation<any>();

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = newsData.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredNews(filtered);
    } else {
      setFilteredNews([]);
    }
  }, [searchQuery]);

  const handleSearch = () => {
    Keyboard.dismiss();
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredNews([]);
    Keyboard.dismiss();
  };

  return (
    <View className="flex-1 bg-[#0f1316] pt-4">
      <View className="px-4 mb-4">
        <Text className="text-white text-2xl font-bold mb-4">Ara</Text>
        <View className="flex-row items-center bg-[#1a1f24] rounded-lg px-3 py-2">
          <Ionicons name="search" size={20} color="#6B7280" />
          <TextInput
            className="flex-1 text-white ml-2 p-1"
            placeholder="Haber ara..."
            placeholderTextColor="#6B7280"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={clearSearch}>
              <Ionicons name="close-circle" size={20} color="#6B7280" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {searchQuery.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <Ionicons name="search" size={64} color="#4B5563" />
          <Text className="text-gray-400 text-lg mt-4">Aramak istediğiniz haberi yazın</Text>
        </View>
      ) : filteredNews.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <Ionicons name="alert-circle" size={64} color="#4B5563" />
          <Text className="text-gray-400 text-lg mt-4">Aradığınız kriterlere uygun haber bulunamadı</Text>
        </View>
      ) : (
        <FlatList
          data={filteredNews}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
          ListHeaderComponent={
            <Text className="text-gray-400 text-sm px-4 mb-2">
              {filteredNews.length} sonuç bulundu
            </Text>
          }
          renderItem={({ item }) => (
            <TouchableOpacity 
              className="mx-4 mb-4 bg-[#1a1f24] rounded-xl overflow-hidden"
              onPress={() => navigation.navigate('NewsDetail', { id: item.id })}
              activeOpacity={0.8}
            >
              <View className="flex-row">
                <Image 
                  source={{ uri: item.imageUrl }} 
                  className="w-24 h-24"
                  resizeMode="cover"
                />
                <View className="flex-1 p-3">
                  <View className="flex-row items-center mb-1">
                    <Text className="text-[#FF6B00] text-xs font-medium mr-2">
                      {item.category === 'gundem' ? 'GÜNDEM' : item.category === 'siyaset' ? 'SİYASET' : 'SPOR'}
                    </Text>
                    {item.isBreaking && (
                      <View className="bg-red-600 px-1.5 py-0.5 rounded-full">
                        <Text className="text-white text-2xs font-medium">SON DAKİKA</Text>
                      </View>
                    )}
                  </View>
                  <Text 
                    className="text-white text-sm font-medium mb-1" 
                    numberOfLines={2}
                  >
                    {item.title}
                  </Text>
                  <Text 
                    className="text-gray-400 text-xs" 
                    numberOfLines={1}
                  >
                    {item.description}
                  </Text>
                  <View className="flex-row justify-between items-center mt-2">
                    <Text className="text-gray-500 text-2xs">{item.date}</Text>
                    <Text className="text-gray-400 text-2xs">{item.author}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default SearchScreen;