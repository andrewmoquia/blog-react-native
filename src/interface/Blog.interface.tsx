export interface IBlogData {
    id: string;
    title: string;
    content: string;
}

export interface IBlogContextProps {
    data: IBlogData[];
    addBlogPost: (payload: IBlogData) => void;
    deleteBlogPost: (payload: IBlogData) => void;
}

export interface IBlogReducerType {
    type: string;
    payload: IBlogData;
}
