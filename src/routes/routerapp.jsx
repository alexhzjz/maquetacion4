import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/auth/Register";

export let rutas = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/Home",
        element: <Dashboard />
    },
    {
        path: "/login",
        element: <Login />

    },
    {
        path: "/Registrarse",
        element: <Register />

    }
]