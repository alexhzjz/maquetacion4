import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";

export let rutas = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/Dashboard",
        element: <Dashboard />
    },
    {
        path: "/login",
        element: <Login />
        
    }
]