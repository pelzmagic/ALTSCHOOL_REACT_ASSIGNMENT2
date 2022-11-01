import React from "react";
import {Routes, Route} from 'react-router-dom';
import Header from "./components/NavBar"
import Navigation from "./components/Navlink"
import Home from "./pages/Home"
import About from "./pages/About"
import Users from "./pages/Users"
import User from "./pages/User"
import ErrorPage from "./pages/ErrorPage"
import "./style.css";

export default function App() {
  return (
    <div>
      <ErrorBoundary>
        {/* <Testy /> */}
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/users" element={<Users />}>
            <Route path=":userId" element={<User />}/>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

