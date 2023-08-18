import { useState, useEffect } from "react";

function Home() {

    const [todo, setTodo] = useState({
        work: "",
        tag: ""
    });

    const [collection, setCollection] = useState([]);

    const { work, tag } = todo;



    async function getTodo() {

        const url = "http://localhost:5000/api/todo/get";

        const response = await fetch(url, {
            method: "GET",
        });

        const data = await response.json();
        console.log(data);

        setCollection(data);
    }


    async function addTodo() {

        const url = "http://localhost:5000/api/todo/create";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ work: work, tag: tag })
        }

        const response = await fetch(url, options)


        const data = await response.json();
        console.log(data);

        getTodo();
    }

    async function deleteTodo(id){

        const url= "http://localhost:5000/api/todo/delete";

        const response= await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: id})
        })
    
        console.log(response);

        getTodo();
    } 


    function handleChange(e) {

        const value = e.target.value;
        setTodo({
            work: value,
            tag: "General"
        });
    }

    function handleAdd() {
        addTodo();
    }

    function handleDelete(e){
        
        console.log(e.target.value)
        deleteTodo(e.target.value);

        e.target.checked= false;
    }

    useEffect(function () {
        getTodo();
    }, [])


    return (
        <>

            <link rel="stylesheet" href={require("../css/styles.css")} />

            <div className="box">

                <h1 className="heading">To - List</h1>
                <p className="instruct">(Click Add button to add todo task and click on checkbox to remove respective task.)</p>

                <input className="todoItem" onChange={handleChange} placeholder="To do"></input>
                <button className="sub" onClick={handleAdd}>Add</button>

                {collection.map((element, index) => {

                    return <div key={index}>
                            <p> 
                            <input type="checkbox" className="check" onClick={handleDelete} value={element._id} />
                                {element.work}</p>
                            </div>
                })}

            </div>
        </>
    )
}

export default Home;