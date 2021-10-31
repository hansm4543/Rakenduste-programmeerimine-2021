import AddPostForm from "../components/AddPostForm";
import './Register.css';

function AddPost(){
    function itemSubmitHandler(number){
        if(number === 1){
            document.getElementById("numbrike").innerHTML = "Õnnestus";
        }else{
            document.getElementById("numbrike").innerHTML = "Failed";
        }

    }

    return(
        // loon formi teisel js failis kus tekitame sisestusest json objetki
        <div>
            <h1>Lisa Postitus</h1>
            <AddPostForm onAddPost={itemSubmitHandler}/>
            <span id="numbrike"></span>
        </div>
    )
}

export default AddPost;