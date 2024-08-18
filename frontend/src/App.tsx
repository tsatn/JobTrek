import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NavbarLayout } from '@/layouts/NavbarLayout.tsx'
import { HomePage } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
