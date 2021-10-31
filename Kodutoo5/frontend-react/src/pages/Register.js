import AddUserForm from "../components/AddUserForm";
import './Register.css';

function Register(){
    function itemSubmitHandler(number){
        if(number == 1){
            document.getElementById("numbrike").innerHTML = "Õnnestus";
        }else{
            document.getElementById("numbrike").innerHTML = "Failed";
        }

    }

    return(
        // loon formi teisel js failis kus tekitame sisestusest json objetki
        <div>
            <h1>Loo uus kasutaja</h1>
            <AddUserForm onAddUser={itemSubmitHandler}/>
            <span id="numbrike"></span>
        </div>
    )
}

export default Register;