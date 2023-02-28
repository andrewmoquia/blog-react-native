import { Text, View, StyleSheet } from 'react-native';

const HomeScreen = () => {
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
