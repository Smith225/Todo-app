import { useState, useEffect, useContext } from "react";
import AlertContext from "../context - alert/AlertContext";

function Home() {

    const context = useContext(AlertContext);

    const { getAlert } = context;

    const [todo, setTodo] = useState({
        work: "",
        tag: "General"
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

        getAlert("Todo task added to list.", "#188f18");

        setTodo({
            work: "",
            tag: ""
        });

        getTodo();
    }

    async function deleteTodo(id) {

        const url = "http://localhost:5000/api/todo/delete";

        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: id })
        })

        console.log(response);

        getAlert("Todo task deleted from list.", "#be0f0f");

        getTodo();
    }


    function handleChange(e) {

        const name = e.target.name;
        const newValue = e.target.value;

        setTodo(function (prevValue) {
            if (name === "work") {
                return {
                    work: newValue,
                    tag: prevValue.tag
                }
            }
            else {
                return {
                    work: prevValue.work,
                    tag: newValue
                }
            }
        });
    }

    function handleAdd() {
        addTodo();
    }

    function handleDelete(e) {

        deleteTodo(e.target.value);

        e.target.checked = false;
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

                <input className="todoItem" name="work" value={todo.work} onChange={handleChange} placeholder="To do" />


                <select className="drop" name="tag" onChange={handleChange}>
                    <option>General</option>
                    <option>Personal</option>
                    <option>Professional</option>
                    <option>Other</option>
                </select>

                <button className="sub" onClick={handleAdd}>Add</button>

                {collection.map((element, index) => {

                    return <div key={index}>
                        <p>
                            <input type="checkbox" className="check" onClick={handleDelete} value={element._id} />
                            {element.work} - {element.tag}</p>
                    </div>
                })}

            </div>
        </>
    )
}

export default Home;