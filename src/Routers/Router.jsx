import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../Components/Home/Home';
import Contact from '../Components/Contact/Contact';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: '/', element: <Home />},
            {path: 'contact', element: <Contact />}
        ]
    }
]);

export default router;