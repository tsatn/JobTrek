import DashboardSection from '../components/DashboardSection'
import './JobDashboardPage.css'

interface JobData {
  title: string
  company: string
}
const jobDataSaved: JobData[] = [{ title: 'Sample 1', company: 'Sample 1' }]
const jobDataApplied: JobData[] = []
const jobDataInterview: JobData[] = []
const jobDataOffer: JobData[] = []

export const JobDashboardPage = () => {
  return (
    <div className='JobDashboardPage'>
      <DashboardSection title='Saved' jobData={jobDataSaved} />
      <DashboardSection title='Applied' jobData={jobDataApplied} />
      <DashboardSection title='Interview' jobData={jobDataInterview} />
      <DashboardSection title='Offer' jobData={jobDataOffer} />
    </div>
  )
}
