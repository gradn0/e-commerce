import { createBrowserRouter, RouterProvider} from "react-router-dom" 

import './scss/index.scss'

import ErrorBoundary from "./pages/ErrorBoundary"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Listing from "./components/Listing"
import MainLayout from "./layouts/MainLayout"
import Categories from "./components/Categories"

function App() {
  const router = createBrowserRouter([
    {
      path: '/', 
      element: <MainLayout left={Categories} right={Listing} />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: '/category',
      element:<MainLayout left={Categories} right={Listing} />,
    },
    {
      path: '/category/:category',
      element:<MainLayout left={Categories} right={Listing} />,
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