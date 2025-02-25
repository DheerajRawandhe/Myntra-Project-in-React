import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import {Bag}  from "./routes/Bag";
import { Home } from './routes/Home';
import {Provider} from "react-redux"; 
import myntraStore from './store';
import "bootstrap/dist/css/bootstrap.min.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />
     
      },
      {
        path: "/bag",
        element: <Bag/>,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <Provider store={myntraStore}>
  <RouterProvider router={router} />
  </Provider>

  </StrictMode>,
)

// export default createBrowserRouter;
