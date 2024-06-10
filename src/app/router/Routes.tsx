import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../features/home/HomePage";
import Chip from "../features/Chip/Chip";
import About from "../features/about/About";
import Contact from "../features/contact/Contact";
import AnalogIc from "../features/analogic/AnalogIc";
import Layoutic from "../features/layoutic/Layoutic";
import Mixedic from "../features/mixedic/Mixedic";

// import Scratch from "../features/scratch/Scratch";
// import ProfilePage from "../features/profiles/ProfilePage";

// import Scratch from "../../features/scratch/Scratch";
// import AccountPage from "../../features/auth/AccountPage";
// import ProfilePage from "../../features/profiles/ProfilePage";

export const router =createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {path: '/home', element:<HomePage/>},
            {path: '/chip', element:<Chip/>},
            {path: '/about', element:<About/>},
            {path: '/contact', element:<Contact/>},
            {path: '/analogic', element: <AnalogIc />},
            {path: '/layoutic', element: <Layoutic />},
            {path: '/mixedic', element: <Mixedic />},
            // {path: '/scratch', element:<Scratch/>},
            // {path: '/profiles/:id', element:<ProfilePage/>},
            // Needs to add profile item in signedinMenu

        ]
    }
])