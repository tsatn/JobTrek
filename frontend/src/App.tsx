import { Page, useStore } from './lib/useStore'
import { HomePage } from './routes/HomePage' 
import { BadPage } from './routes/BadPage'
import { JobListPage } from './routes/JobListPage'
import { JobDetailPage } from './routes/JobDetailPage'
import { LoginPage } from './routes/LoginPage'
import { RegisterPage } from './routes/RegisterPage'
import { ProfilePage } from './routes/ProfilePage'


const Router: Record<Page, React.FC<{}>> = {
    'home': HomePage,
    'bad': BadPage,
    'jobList': JobListPage,
    'jobDetail': JobDetailPage,
    'login': LoginPage,
    'register': RegisterPage,
    'profile': ProfilePage,
}

function App() {
  const { page } = useStore()
  const CurrentPage = Router[page]

  return (
    <>
      <CurrentPage />
    </>
  )
}

export default App
