export const initialState: PostState ={
    posts:  [
        {id:'1',title:'Sample Title', description : 'Sample Description'},
        {id:'2',title:'Sample Title1', description : 'Sample Description1'}
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