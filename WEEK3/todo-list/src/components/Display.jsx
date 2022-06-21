const Display = (props) => {

    const{todoList, updateList} = props;

    const checkboxed = (e, index) => {
        console.log(`index = ${index}, e.target.check = ${e.target.checked}`);
        updateList( [...(todoList.slice(0,index)), {...todoList[index], done: e.target.checked}, ...(todoList.slice(index+1))] );
    };

    const deleted = (index) => {
        console.log(`index = ${index}, pressed delete`);
        updateList( [...(todoList.slice(0,index)), ...(todoList.slice(index+1))] );
    };

    const todoItem = props.todoList.map((item, index) => {

        return ( 
            (<tr key={index}>
                <td style={{textDecoration: item.done && "line-through"}}>{item.todo}</td>
                <td><input type="checkbox" checked={item.done} onChange={ (e) => checkboxed(e, index) } className={"form-check-input"} /></td>
                <td><button value={index} onClick={ (e) => deleted(index) } className={"btn btn-dark"} >Delete</button></td>
            </tr>)
        );

    })

    return (
        <div className="my-5">
            <table className="table table-borderless" >
                <tbody>{ todoItem }</tbody>
            </table>
        </div>
    );
}
export default Display;