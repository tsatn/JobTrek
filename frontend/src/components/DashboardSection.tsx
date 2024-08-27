import React from 'react'
import JobList from './Joblist'

interface JobData {
  title: string
  company: string
}

interface DashboardSectionProps {
  title: string
  jobData: JobData[]
}

const DashboardSection: React.FC<DashboardSectionProps> = ({ title, jobData }) => {
  return (
    <div>
      <h1>{title}</h1>
      <JobList jobs={jobData} /> {}
    </div>
  )
}

export default DashboardSection
