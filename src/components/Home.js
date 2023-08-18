import { useState } from "react";

function Home(){

    const [item, setItem]= useState("");


    function handleClick(){

        const ele= document.getElementsByClassName("todoItem");
        console.log(ele[0].value);
        setItem(ele[0].value);
    }

    return(
        <>

            <link rel="stylesheet" href={require("../css/styles.css")} />

            <div className="box">

                <h1 className="heading">To - List</h1>

                <input className="todoItem" placeholder="To do"></input>
                <button className="sub" onClick={handleClick}>Add</button>
                <h1>{item}</h1>
            </div>
        </>   
    )
}

export default Home;