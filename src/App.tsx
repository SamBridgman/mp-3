import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Root';

const router = createBrowserRouter([{ path: '*', Component: Root }]);

export default function App() {
    return <RouterProvider router={router} />;
}
