import AddItemCategoryForm from "../components/AddItemCategoryForm";

function AddItemCategory(){
    function itemSubmitHandler(item){
        //toon additemformist itemi siia et saaks edasi majandada sellega
        console.log(item);
        //peame javacontrolleris importima selle serveri
        fetch('http://localhost:8080/categorys', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {'Content-Type':'application/json'}
        });

    }

    return(
        // loon formi teisel js failis kus tekitame sisestusest json objetki
        <div>
            <h1>Lisa uus kategooria</h1>
            <AddItemCategoryForm onAddItem={itemSubmitHandler}/>
        </div>
    )
}

export default AddItemCategory;