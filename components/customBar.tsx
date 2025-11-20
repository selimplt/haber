import { View, TouchableOpacity, Text } from "react-native";
import * as React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@react-native-vector-icons/ionicons';

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
    return (
        <View className={`absolute bottom-6 right-1/2 translate-x-1/2 w-9/10 h-18 rounded-2xl flex flex-row items-center justify-evenly border border-neutral-700/50 bg-[#11171c60] elevation-lg`}>
            <TouchableOpacity onPress={() => navigation.navigate("Keşfet")} className="w-1/4 h-2/3 flex items-center justify-center rounded-2xl active:bg-neutral-900/60">
                <Ionicons name="earth" size={32} color={state.index === 1 ? "#ff6b00" : "#a1a1a1"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Ana sayfa")} className="w-1/4 h-2/3 flex items-center justify-center rounded-2xl active:bg-neutral-900/60">
                <Ionicons name="home" size={32} color={state.index === 0 ? "#ff6b00" : "#a1a1a1"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Kaydedilenler")} className="w-1/4 h-2/3 flex items-center justify-center rounded-2xl active:bg-neutral-900/60">
                <Ionicons name="bookmark" size={32} color={state.index === 2 ? "#ff6b00" : "#a1a1a1"} />
            </TouchableOpacity>
        </View>
    );
}
