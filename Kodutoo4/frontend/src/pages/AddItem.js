import AddItemForm from "../components/AddItemForm";

function AddItem(){
    function itemSubmitHandler(item){
        //toon additemformist itemi siia et saaks edasi majandada sellega
        console.log(item);
        //peame javacontrolleris importima selle serveri
        fetch('http://localhost:8080/items', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {'Content-Type':'application/json'}
        });

    }

    return(
        // loon formi teisel js failis kus tekitame sisestusest json objetki
        <div>
            <h1>Lisa uus ese</h1>
            <AddItemForm onAddItem={itemSubmitHandler}/>
        </div>
    )
}

export default AddItem;