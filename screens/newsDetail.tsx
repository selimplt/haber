import { View, Text, Image, ScrollView, TouchableOpacity, Share } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSavedStore } from '../store/useSavedStore';
import { Ionicons } from '@expo/vector-icons';

type RootStackParamList = {
  NewsDetail: { id: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'NewsDetail'>;
import { getNewsById } from '../data/newsData';

const NewsDetail = () => {
  const route = useRoute<Props['route']>();
  const navigation = useNavigation<Props['navigation']>();
  const { id } = route.params;
  const [news, setNews] = useState<any>(null);
  const { addToSaved, removeFromSaved, isSaved } = useSavedStore();

  useEffect(() => {
    if (id) {
      const newsItem = getNewsById(id as string);
      if (newsItem) {
        setNews(newsItem);
      }
    }
  }, [id]);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${news?.title}\n\n${news?.description}\n\nDaha fazlası için uygulamamızı kullanabilirsiniz.`,
      });
    } catch (error) {
      console.error('Paylaşım sırasında bir hata oluştu:', error);
    }
  };

  if (!news) {
    return (
      <View className="flex-1 bg-[#0f1316] items-center justify-center">
        <Text className="text-white">Haber yükleniyor...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-[#0f1316]">
      <ScrollView className="flex-1">
        {/* Haber Görseli */}
        <View className="w-full h-64">
          <Image 
            source={{ uri: news.imageUrl }} 
            className="w-full h-full"
            resizeMode="cover"
          />
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className="absolute top-12 left-4 bg-black/50 p-2 rounded-full"
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => isSaved(news.id) ? removeFromSaved(news.id) : addToSaved(news)}
            className="absolute top-12 right-4 bg-black/50 p-2 rounded-full"
          >
            <Ionicons 
              name={isSaved(news.id) ? "bookmark" : "bookmark-outline"} 
              size={24} 
              color={isSaved(news.id) ? "#FF6B00" : "white"} 
            />
          </TouchableOpacity>
          <View className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <Text className="text-white text-2xl font-bold">{news.title}</Text>
            <View className="flex-row items-center mt-2">
              <Text className="text-gray-300 text-sm">{news.author}</Text>
              <Text className="text-gray-500 text-sm mx-2">•</Text>
              <Text className="text-gray-400 text-sm">{news.date}</Text>
            </View>
          </View>
        </View>

        {/* Haber İçeriği */}
        <View className="p-4">
          <View className="flex-row items-center mb-4">
            <View className="bg-[#FF6B00] px-3 py-1 rounded-full">
              <Text className="text-white text-xs font-medium">
                {news.category === 'gundem' ? 'GÜNDEM' : news.category === 'siyaset' ? 'SİYASET' : 'SPOR'}
              </Text>
            </View>
            {news.isBreaking && (
              <View className="bg-red-600 px-3 py-1 rounded-full ml-2">
                <Text className="text-white text-xs font-medium">SON DAKİKA</Text>
              </View>
            )}
          </View>

          <Text className="text-white text-lg mb-6 leading-7">
            {news.content}
          </Text>

          <View className="border-t border-gray-800 pt-4 mt-6">
            <Text className="text-gray-400 text-sm">
              Bu haber {news.date} tarihinde {news.author} tarafından yayınlanmıştır.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Alt Menü */}
      <View className="flex-row justify-between items-center p-4 border-t border-gray-800 bg-[#0f1316]">
        <TouchableOpacity className="p-2">
          <Ionicons name="bookmark-outline" size={24} color="#8B8B8B" />
        </TouchableOpacity>
        <TouchableOpacity className="p-2" onPress={handleShare}>
          <Ionicons name="share-social-outline" size={24} color="#8B8B8B" />
        </TouchableOpacity>
        <TouchableOpacity className="p-2">
          <Ionicons name="chatbubble-outline" size={24} color="#8B8B8B" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsDetail;