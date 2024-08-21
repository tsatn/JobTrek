import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NavbarLayout } from '@/layouts/NavbarLayout.tsx'
import { 
    EnterPage,
    JobDashboardPage
 } from './pages'

const router = createBrowserRouter([
  {
    path: '/auth/enter',
    element: <EnterPage />,
  },
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
        {
            path: '/',
            element: <JobDashboardPage />
        }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
