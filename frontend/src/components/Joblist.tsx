import React from 'react'
import Job from './Job'

interface JobData {
  title: string
  company: string
}

interface JobListProps {
  jobs: JobData[]
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job, index) => (
        <Job key={index} title={job.title} company={job.company} />
      ))}
    </div>
  )
}

export default JobList
