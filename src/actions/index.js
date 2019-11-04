import database from "../config/firebase"

export const addPost = (post) => ({
    type: "ADD_POST",
    post
    })
    
    
    export const startAddPost = (postData = {})=>{
        return(dispatch) => {
            const {
                title= "",
                body= ""
            } = postData;
            const post = {title, body}
            database.ref("posts").push(post).then((ref)=>{
                dispatch(addPost({
                    id: ref.key,
                    ...post
                }));
            })
        }
    }
    