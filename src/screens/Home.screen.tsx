import { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BlogContext from '../context/Blog.context';

const HomeScreen = () => {
    const value = useContext(BlogContext);

    console.log(value);

    return (
        <View>
            <Text style={styles.textStyle}>Home</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Poppins-Thin',
    },
});

export default HomeScreen;
