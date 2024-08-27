import React from 'react'
import './Job.css'
interface JobProps {
  title: string
  company: string
}

const Job: React.FC<JobProps> = ({ title, company }) => {
  return (
    <div className='Job'>
      <h2>Job: {title}</h2>
      <h2>Company: {company}</h2>
    </div>
  )
}
export default Job
