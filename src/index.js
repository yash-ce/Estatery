import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './Theme';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HouseDetails from './components/PropertyDetails/HouseDetails';
import Home from './routes/Home'
import PropertyDetails from './routes/PropertyDetails';
const appRouter = createBrowserRouter([
  {
    path : "/",
    element: <App/>,    
      
    children : [
     
      {
        path : "/",
        element: <Home/>,
      },
      {
        path : "/rent",
        element: <Home/>,
      },
      {
        path:"property-details",
        element: <PropertyDetails />,
      },
        
      {
        path: "property-details/:propertyId",
        element: <HouseDetails />,
      }
    
        

      
      
     

    ]
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
   <RouterProvider router={appRouter} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
