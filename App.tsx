import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import './global.css';

import NewsDetail from 'screens/newsDetail';
import BottomTabs from 'routes/bottomTabs';
import TopTabs from 'routes/topTabs';

import CustomHeader from 'components/CustomHeader';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: (props) => <CustomHeader {...props} /> }}>
        <Stack.Screen name="altBar" component={BottomTabs}  />
        <Stack.Screen name="ustBar" component={TopTabs}  />
        <Stack.Screen name="haberDetay" component={NewsDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
