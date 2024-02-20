import { createBrowserRouter, Router, RouterProvider} from "react-router-dom" 
import HomePage from "./pages/HomePage"
import ErrorBoundary from "./pages/ErrorBoundary"
import LoginPage from "./pages/LoginPage"
import './scss/index.scss'
import RegisterPage from "./pages/RegisterPage"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorBoundary />
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