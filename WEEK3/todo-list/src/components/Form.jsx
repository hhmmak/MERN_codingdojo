import { useState } from "react"

const Form = (props) => {
    
    const [item, setItem] = useState("")
    
    const formSubmit = (e) => {
        e.preventDefault();
        console.log(`item = ${item}`);
        props.addList([...props.todoList, {todo: item, done: false}]);
        setItem('');
    }

    return (
        <form onSubmit={ formSubmit } className={"row"} >
            <div className="col-md-7 mx-2">
                <input type="text" value={item} onChange={ (e) => {setItem( e.target.value )} } className={"form-control"} />
            </div>
            <div className="col-md-2">
                <input type="submit" value="Add" className="btn btn-primary" />
            </div>
        </form>
    )
}
export default Form;