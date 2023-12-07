import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">Create Todo</NavLink>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
