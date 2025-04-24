import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../Components/Home/Home';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import About from '../Components/About/About';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: '/', element: <Home />},
            {path: 'header', element: <Header />},
            {path: 'about', element: <About />},
            // {path: 'work', element: <Work />},
            // {path: 'contact', element: <Contact />},
            {path: 'footer', element: <Footer />}
        ]
    }
]);

export default router;