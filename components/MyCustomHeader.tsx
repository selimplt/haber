import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@react-native-vector-icons/ionicons'
import { SafeAreaView } from 'react-native-safe-area-context';

const MyCustomHeader = ({ navigation, back, options }: any) => {
    return (
        <View className="w-full h-24 bg-neutral-900 border border-b-neutral-700">
            <SafeAreaView className='w-full h-full'>
                <View className='relative w-full h-full justify-center items-center flex-row pt-2'>
                    {back ? (
                        <TouchableOpacity onPress={navigation.goBack} className="absolute left-4">
                            <Ionicons name="chevron-back" size={32} color="#ff6b00" />
                        </TouchableOpacity>
                    ) : null}
                    <Text className="text-neutral-100 text-2xl font-semibold">HaberX</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default MyCustomHeader