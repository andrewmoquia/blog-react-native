import { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { BlogContext } from '../context/Blog.context';
import uuid from 'react-native-uuid';

const HomeScreen = () => {
    const { data, addBlogPosts } = useContext(BlogContext);

    console.log(data, addBlogPosts);

    const handleAddBlogPostsAction = () => {
        addBlogPosts({ id: String(uuid.v4()), title: 'Bloggerist', content: 'Lah' });
    };

    return (
        <View>
            <TouchableOpacity onPress={handleAddBlogPostsAction}>
                <Text>Add Blog</Text>
            </TouchableOpacity>

            <FlatList
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={({ item }) => {
                    return <Text>{item.id}</Text>;
                }}
            />

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
