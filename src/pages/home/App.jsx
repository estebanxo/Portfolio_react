import { Routes, Route } from "react-router-dom";
import Home from "../../component/Home/Home";
import Work from "../../component/Work/Work";
import Favicon from "react-favicon";
import FaviconImg from "../../assets/avatar1.png";

function App() {
    return (
        <div>
            <Favicon url={FaviconImg}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
            </Routes>
        </div>
    );
}

export default App;