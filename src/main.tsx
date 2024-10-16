import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "@tanstack/react-router";
import router from "@/router.tsx";

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
