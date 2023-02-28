import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home.screen';
import { useFonts } from 'expo-font';
import BlogContext from './src/context/Blog.context';

const App = () => {
    const [fontsLoaded] = useFonts({
        'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
    });
    if (!fontsLoaded) return null;

    return (
        <BlogContext.Provider value={[]}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Search'>
                    <Stack.Screen
                        name='Home'
                        component={HomeScreen}
                        options={{ title: 'Your Daily Blog' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </BlogContext.Provider>
    );
};

const Stack = createNativeStackNavigator();

export default App;
