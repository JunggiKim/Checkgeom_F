import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./core/component/SearchBar.jsx";

function App() {
    return (
    <>
<Router>
    <Routes>
        <Route path={"/"} element={<SearchBar/>}>
            {/*<Route path={"/search"} element={<Main/>}/>*/}
        </Route>
    </Routes>
</Router>

    </>
  )
}

export default App
