import { Page, useStore } from './lib/useStore'
import { HomePage } from './pages/HomePage'
import { BadPage } from './pages/BadPage'
import { JobListPage } from './pages/JobListPage'
import { JobDetailPage } from './pages/JobDetailPage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { ProfilePage } from './pages/ProfilePage'

const Router: Record<Page, React.FC<{}>> = {
  home: HomePage,
  bad: BadPage,
  jobList: JobListPage,
  jobDetail: JobDetailPage,
  login: LoginPage,
  register: RegisterPage,
  profile: ProfilePage,
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
