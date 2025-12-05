import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, {useEffect} from 'react';

import {MainPage} from "./MainPage/MainPage";

const pageName = "My Portfolio";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        children: [
        ]
    }
])

function App() {

    useEffect(() => {

        document.title = pageName;

    }, [])

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
