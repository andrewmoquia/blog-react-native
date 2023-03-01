export interface IBlogData {
    id: string;
    title: string;
    content: string;
}

export interface IBlogContextProps {
    data: IBlogData[];
    addBlogPosts: ({ id, title, content }: IBlogData) => void;
}
