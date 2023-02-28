import { createContext } from 'react';
import { IBlogContext } from '../interface/Blog.interface';
const BlogContext = createContext([]);

const BlogProvider = ({ children }: IBlogContext) => {
    return <BlogContext.Provider value={[]}>{children}</BlogContext.Provider>;
};

export default BlogProvider;
