import { createBrowserRouter, RouterProvider} from "react-router-dom" 

import './scss/index.scss'

import ErrorBoundary from "./pages/ErrorBoundary"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ListingPage from "./pages/ListingPage"
import SidebarLayout from "./layouts/SidebarLayout"
import Categories from "./components/Categories"
import ProductPage from "./pages/ProductPage"
import BasketPage from "./pages/BasketPage"
import MonoLayout from "./layouts/MonoLayout"
import CheckoutPage from "./pages/CheckoutPage"
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage"
import {BASE_URL} from './globalVars'

function App() {
  const router = createBrowserRouter([
    {
      path: `${BASE_URL}/`, 
      element: <SidebarLayout left={Categories} right={ListingPage} />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: `${BASE_URL}/category`,
      element:<SidebarLayout left={Categories} right={ListingPage} />,
    },
    {
      path: `${BASE_URL}/category/:category`,
      element:<SidebarLayout left={Categories} right={ListingPage} />,
    },
    {
      path: `${BASE_URL}/product/:productId`,
      element:<SidebarLayout left={Categories} right={ProductPage} />,
    },
    {
      path: `${BASE_URL}/login`,
      element: <LoginPage />,
    },
    {
      path: `${BASE_URL}/register`,
      element: <RegisterPage />,
    },
    {
      path: `${BASE_URL}/basket`,
      element: <MonoLayout><BasketPage /></MonoLayout>
    },
    {
      path: `${BASE_URL}/checkout`,
      element: <MonoLayout><CheckoutPage /></MonoLayout>,
    },
    {
      path: `${BASE_URL}/checkout/success`,
      element: <MonoLayout><CheckoutSuccessPage /></MonoLayout>,
    }
  ])

  return (
    <div>
      <RouterProvider  router={router} />
    </div>
  )
}

export default App