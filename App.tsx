import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home.screen';
import { useFonts } from 'expo-font';

const App = () => {
    const [fontsLoaded] = useFonts({
        'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Search'>
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{ title: 'Your Daily Blog' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const Stack = createNativeStackNavigator();

export default App;
