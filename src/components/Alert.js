import { useContext } from "react";
import AlertContext from "../context - alert/AlertContext";


function Alert() {

    const context = useContext(AlertContext);

    const { alert, getAlert } = context;


    setTimeout(function () {
        getAlert("", "");
    }, 8000);

    return (
        <>
            <link rel="stylesheet" href={require("../css/alertStyles.css")} />


            {alert.msg !== "" &&
                <div className="alertBox" style={{ backgroundColor: alert.color }}>
                    {alert.msg}
                </div>
            }

        </>
    )
}

export default Alert;