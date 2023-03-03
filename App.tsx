import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home.screen';
// import { useFonts } from 'expo-font';
// import BlogProvider from './src/context/Blog.context';
// import { useEffect } from 'react';
import { useFlipper } from '@react-navigation/devtools';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

const App = () => {
    const navigationRef = useNavigationContainerRef();
    // const [fontsLoaded] = useFonts({
    //     'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
    // });

    // if (!fontsLoaded) return null;

    // useEffect(() => {}, []);

    useFlipper(navigationRef);

    return (
        <Provider store={store}>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator initialRouteName='Search'>
                    <Stack.Screen
                        name='Home'
                        component={HomeScreen}
                        options={{ title: 'Your Daily Blog' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

const Stack = createNativeStackNavigator();

export default App;
