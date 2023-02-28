import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home.screen';

const App = () => {
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
