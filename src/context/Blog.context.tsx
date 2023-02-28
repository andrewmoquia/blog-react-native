import { createContext } from 'react';
import { IBlogData } from '../interface/Blog.interface';

const BlogContext = createContext<IBlogData[]>([]);

export default BlogContext;
