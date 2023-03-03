// import { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// import { BlogContext } from '../context/Blog.context';
import uuid from 'react-native-uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addBlog, deleteBlog } from '../redux/blog/blog.redux';
import type { RootState } from '../redux/store';

const HomeScreen = () => {
    // const { data, addBlogPost, deleteBlogPost } = useContext(BlogContext);
    // console.log(data, addBlogPost);

    const data = useSelector((state: RootState) => state.blog.data);
    const dispatch = useDispatch();

    const handleAddBlogPostsAction = () => {
        dispatch(addBlog({ id: String(uuid.v4()), title: 'Bloggerist', content: 'Lah' }));
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
                    return (
                        <View>
                            <Text>{item.id}</Text>
                            <TouchableOpacity onPress={() => dispatch(deleteBlog(item))}>
                                <Text>Delete Blog</Text>
                            </TouchableOpacity>
                        </View>
                    );
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
