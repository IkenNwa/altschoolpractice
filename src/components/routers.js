import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="cover" >
      <NavLink
        className={({ isActive }) => ( isActive ? 'active' : 'inactive')}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => ( isActive ? 'active' : 'inactive')}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => ( isActive ? 'active' : 'inactive')}
        to="/page"
      >
        Page
      </NavLink>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>This is the Home page</h1>
      <p>I can't see my house here.</p>
      <Navigation />
    </div>
  );
};
const About = () => {
  return (
    <div>
      <h1>This is the About page</h1>
      <p>You are going to see alot here.</p>
      <Navigation />
    </div>
  );
};
const Page = () => {
  return (
    <div>
      <h1>This is the Pages page</h1>
      <p>You are going to see alot of Pages on this page.</p>
      <Navigation />
    </div>
  );
};


function RouterApp() {
  return (
    <div className="route">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </div>
  );
}

export default RouterApp;
