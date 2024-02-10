import { BrowserRouter, Link, Route, Routes} from "react-router-dom"
import GetData from "./GetData"
import PostData from "./PostData"
import "./routing.css"
import Nav from "./Nav"
import Foot from "./Foot"
import Register from "./Register"
import Login from "./Login"
import Item from "./Item"

function Rounting()
{
     return(
        <div>
        <BrowserRouter>
        <Nav></Nav><br></br>
        <Routes> 
            <Route path="/" element={<GetData/>}/>
            <Route path="/post" element={<PostData/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/item" element={<Item/>}/>
            <Route path="/post" element={<PostData></PostData>}/>
        </Routes>
        </BrowserRouter>
        <Foot></Foot>
        </div>
     )
}
export default Rounting