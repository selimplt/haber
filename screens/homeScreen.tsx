import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BreakingNews from './BreakingNews';
import PoliticNews from './PoliticNews';
import SportNews from './SportNews';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  NewsDetail: { id: string };
};

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
      tabBarScrollEnabled: true, tabBarStyle: { backgroundColor: '#0f1316'}, tabBarIndicatorStyle: { backgroundColor: '#FF6B00', height: 3 },
      tabBarActiveTintColor: '#FF6B00', tabBarInactiveTintColor: '#8B8B8B',
    }}>
      <Tab.Screen name="Gündem" component={BreakingNews} />
      <Tab.Screen name="Siyaset" component={PoliticNews} />
      <Tab.Screen name="Spor Haberleri" component={SportNews} />
    </Tab.Navigator>
  )
}

export default HomeScreen