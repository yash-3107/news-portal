import App from "../../App"
import Details from "../../components/Details/details"
import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import { HashRouter as x } from "react-router-dom"
import Filter from "../../components/filterResults/filte"
function CustomRoutes(){
    return(
        <Router>
             <Routes>
                <Route path="/" element = {<App/>} ></Route>
                <Route path="/detailsPage/:id" element = {<Details/>}></Route>
                <Route path="/filter/:text" element={<Filter/>}></Route>
            </Routes>
        </Router>
       
    )
}
export default CustomRoutes