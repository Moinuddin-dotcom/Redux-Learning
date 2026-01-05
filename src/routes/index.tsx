import App from "@/App";
import Home from "@/Home/Home";
import Task from "@/Task/Task";
import User from "@/Users/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        // element: <div>Home Page</div>,
        Component: App,
        children: [
            {
                index: true,
                // path: "/home",
                Component: Home
            },
            {
                // index: true,
                path: "/tasks",
                Component: Task
            },
            {
                path: "/users",
                Component: User
            }
        ]
    }
]);

export default router;