export const initialState: PostState ={
    posts:  [
        {id:'1',title:'Sample Title', description : 'Sample Description'}
    ]
}
export interface PostState{
posts: Post[]
}

export interface Post{
    id: string;
    title:string;
    description:string
}