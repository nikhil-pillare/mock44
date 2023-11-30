import { Route, Routes } from "react-router-dom"
import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"
import Forem from "./forem"
import Answer from "./answer"
export const MainRoutes=()=>{
    
    return <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/forem" element={<Forem/>}/>
        <Route path="/answer" element={<Answer/>}/>
    </Routes>
}