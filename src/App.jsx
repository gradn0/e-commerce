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

function App() {
  const router = createBrowserRouter([
    {
      path: `/`, 
      element: <SidebarLayout left={Categories} right={ListingPage} />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: `/category`,
      element:<SidebarLayout left={Categories} right={ListingPage} />,
    },
    {
      path: `/category/:category`,
      element:<SidebarLayout left={Categories} right={ListingPage} />,
    },
    {
      path: `/product/:productId`,
      element:<SidebarLayout left={Categories} right={ProductPage} />,
    },
    {
      path: `/login`,
      element: <LoginPage />,
    },
    {
      path: `/register`,
      element: <RegisterPage />,
    },
    {
      path: `/basket`,
      element: <MonoLayout><BasketPage /></MonoLayout>
    },
    {
      path: `/checkout`,
      element: <MonoLayout><CheckoutPage /></MonoLayout>,
    },
    {
      path: `/checkout/success`,
      element: <MonoLayout><CheckoutSuccessPage /></MonoLayout>,
    }
  ], {
    basename: "/e-commerce"
  })

  return (
    <div>
      <RouterProvider  router={router} />
    </div>
  )
}

export default App