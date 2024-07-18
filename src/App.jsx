import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchIndex from "./core/component/Search.jsx";

function App() {
    return (
    <>
<Router>
    <Routes>
        <Route path={"/"} element={<SearchIndex/>}>
            {/*<Route path={"/search"} element={<Main/>}/>*/}
        </Route>
    </Routes>
</Router>

    </>
  )
}

export default App
