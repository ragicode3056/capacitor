import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { Blogs } from "./Pages/Blogs";
export const RouterComponent = () =>{
    return (
        <div>
           <BrowserRouter>
           <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/blogs' element={<Blogs/>}></Route>
           </Routes>
           </BrowserRouter>

        </div>
    )
}