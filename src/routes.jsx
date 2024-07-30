import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Starting from "./pages/Starting";
import Kits from "./pages/Kits";
import Courses from "./pages/Courses";
import Product from "./pages/Product";

function AppRoutes() {
    return (
        <BrowserRouter>
         <Routes>
            <Route path="/" element={ <Home />}> </Route>
            <Route path="/starting" element={<Starting />}></Route>
            <Route path="/kits" element={ <Kits />}></Route>
            <Route path="/product" element={ <Product />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
         </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;