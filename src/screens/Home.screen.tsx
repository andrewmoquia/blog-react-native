import { Text, View, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Home</Text>
            <Text>Home with no Style</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Poppins-Thin',
    },
});

export default HomeScreen;
