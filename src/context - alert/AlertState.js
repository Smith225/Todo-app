import { useState } from "react";
import AlertContext from "./AlertContext.js";

function AlertState(props){

    const [alert, setAlert]= useState({
        msg: "",
        color: ""
    })

    function getAlert(msg, color){
        setAlert({msg, color});
    }

    
    return(

        <AlertContext.Provider value={{alert, getAlert}}>
            {props.children}
        </AlertContext.Provider>
    )
};

export default AlertState;
