import { Header } from "./components/Header/Header.jsx";
import { Routes, Route } from "react-router-dom";
import { AllHero } from "./components/AllHero/AllHero.jsx";
import { Episode } from "./components/Episode/Episode.jsx";
import { Location } from "./components/Location/Location.jsx";
import { Main } from "./components/Main/Main.jsx";

function App() {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/hero" element={<AllHero />} />
                <Route path="/episode" element={<Episode />} />
                <Route path="/location" element={<Location />} />
            </Routes>
        </div>
    );
}

export default App;
