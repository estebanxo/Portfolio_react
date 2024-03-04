import { Routes, Route } from "react-router-dom";
import Home from "../../component/Home/Home";
import Work from "../../component/Work/Work";
import Error from "../../component/404";
import Favicon from "react-favicon";
import FaviconImg from "../../assets/avatar1.png";

function App() {
    return (
        <div>
            <Favicon url={FaviconImg}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work/:id" element={<Work />} />
                <Route path="/404" element={<Error />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;