import { createContext, useReducer } from 'react';
import { IBlogContextProps, IBlogData, IBlogReducerType } from 'src/interface/Blog.interface';

export const BlogContext = createContext<IBlogContextProps>({
    data: [],
    addBlogPost: () => {},
    deleteBlogPost: () => {},
});

const reducer = (state: IBlogData[], action: IBlogReducerType) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_BLOG':
            return [...state, payload];
        case 'DELETE_BLOG':
            return state.filter((blog) => blog.id !== payload.id);
        default:
            return state;
    }
};

const BlogProvider = ({ children }: any) => {
    const defBlogPostsVal: IBlogData[] = [];

    const [state, dispatch] = useReducer(reducer, defBlogPostsVal);

    const addBlogPost = (payload: IBlogData) => dispatch({ type: 'ADD_BLOG', payload });

    const deleteBlogPost = (payload: IBlogData) => dispatch({ type: 'DELETE_BLOG', payload });

    return (
        <BlogContext.Provider value={{ data: state, addBlogPost, deleteBlogPost }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogProvider;
