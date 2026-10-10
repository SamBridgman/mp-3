import { Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import Education from "./pages/Education.tsx";
import Employment from "./pages/Employment.tsx";
import Projects from "./pages/Projects.tsx";
import Achievements from "./pages/Achievements.tsx";
import References from "./pages/References.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Main from "./components/Main.tsx";
import Nav from "./components/Nav.tsx";

export default function Root() {
    return (
        <>
            <Header/>

            <div id="wrapper">
                <Nav />

                <Main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/employment" element={<Employment />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/achievements" element={<Achievements />} />
                        <Route path="/references" element={<References />} />
                    </Routes>
                </Main>
            </div>

            <Footer/>

        </>
    )
}
