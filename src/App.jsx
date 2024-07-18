import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./core/component/Main.jsx";

function App() {

  return (
    <>
<Router>
    <Routes>
        <Route path={"/"} element={<Main/>}>
            {/*<Route path={"/search"} element={<Main/>}/>*/}
        </Route>

    </Routes>
</Router>

    </>
  )
}

export default App
