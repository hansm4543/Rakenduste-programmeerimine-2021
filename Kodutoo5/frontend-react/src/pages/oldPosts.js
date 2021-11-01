import {useContext, useRef, useState, useEffect} from 'react';
import {Context} from "../store";
import { addPost, removePost, updatePosts } from "../store/actions"

function Posts(){
    const [title, setTitle] = useState("")
    const [state, dispatch] = useContext(Context)
    const inputRef = useRef(null)

    // ilma dependcy massivita ehk ilma [] kutsub v2lja igal renderdusel
    //tyhma masiivi dependency esimest korda
    //saab ka kutsuda teatud state muutusel v2lja
    useEffect(() => {
        dispatch(updatePosts([
            {
                id: 1,
                title: "Pealkiri 1"
            },
            {
                id: 2,
                title: "Pealkiri 2"
            },
            {
                id: 3,
                title: "Pealkiri 3"
            },
            {
                id: 4,
                title: "Pealkiri 4"
            }
        ]))
        console.log("is it true?");
        console.log(state);
    }, [])
    //voite panna eraldi nupu, et get latest from database (sync)


    const handleSubmit = e => {
        e.preventDefault()

        setTitle("")

        addNewPost()
        if(inputRef.current) inputRef.current.focus()
    };
    const addNewPost =() =>{
        const newPost = {
            id: Date.now(),
            //sama mis lihtsalt title kirjutada
            title: title
        }
        dispatch(addPost(newPost))
        console.log(state);

    };

    //console.log({inputRef})
    return(
        <div style={{textAlign: "center"}}>
            <h1>Posts</h1>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
                <button type="submit">Submit</button>
            </form>
            {state.posts.data.map((e) => <li key={e.id}>
                {e.id} {e.title}
                <span 
                style={{cursor: "pointer"}}
                onClick={() => dispatch(removePost(e.id))}
                >
                    &#128540;
                </span>
                </li>)}
        </div>
    )
}
export default Posts;