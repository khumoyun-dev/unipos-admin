import { Routes, Route } from "react-router";
import Login from "../../components/Login/Login";

import "./Auth.scss"

function Auth() {
    return (
        <>
            <div className="login">
                <Routes>
                    <Route exact path="/" element={<Login />} />
                </Routes>
            </div>
        </>
    )
}

export default Auth;