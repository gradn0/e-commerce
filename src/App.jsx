import { createBrowserRouter, RouterProvider} from "react-router-dom" 

import './scss/index.scss'

import ErrorBoundary from "./pages/ErrorBoundary"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ListingPage from "./pages/ListingPage"
import MainLayout from "./layouts/MainLayout"
import Categories from "./components/Categories"
import ProductPage from "./pages/ProductPage"

function App() {
  const router = createBrowserRouter([
    {
      path: '/', 
      element: <MainLayout left={Categories} right={ListingPage} />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: '/category',
      element:<MainLayout left={Categories} right={ListingPage} />,
    },
    {
      path: '/category/:category',
      element:<MainLayout left={Categories} right={ListingPage} />,
    },
    {
      path: '/product/:productId',
      element:<MainLayout left={Categories} right={ProductPage} />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App