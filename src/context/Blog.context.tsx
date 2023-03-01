import { createContext, useState } from 'react';
import { IBlogContextProps, IBlogData } from 'src/interface/Blog.interface';

export const BlogContext = createContext<IBlogContextProps>({
    data: [],
    addBlogPosts: () => {},
});

const BlogProvider = ({ children }: any) => {
    const defBlogPostsVal: IBlogData[] = [];

    const [blogPosts, setBlogPosts] = useState(defBlogPostsVal);

    const addBlogPosts = ({ id, title, content }: IBlogData) => {
        setBlogPosts([...blogPosts, { id, title, content }]);
    };

    return (
        <BlogContext.Provider value={{ data: blogPosts, addBlogPosts }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogProvider;
