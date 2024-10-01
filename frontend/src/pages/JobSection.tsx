import React from 'react';

interface JobSectionProps {
  title: string;
  jobs: { id: number; title: string; company: string }[];
  actionText: string;
}

const JobSection: React.FC<JobSectionProps> = ({ title, jobs, actionText }) => {
  return (
    <div className="bg-card text-card-foreground p-4 rounded-lg shadow-md flex flex-col justify-between max-w-96 min-w-80 h-full"> 
      {/* Title */}
      <div className="overflow-y-auto">
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        {/* Job List */}
        <ul className="space-y-2">
          {jobs.map((job) => (
            <li key={job.id} className="border border-border p-3 rounded-md">
              <h4 className="font-medium text-sm">{job.title}</h4>
              <p className="text-xs text-muted-foreground">{job.company}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Fixed Button at Bottom */}
      <div className="mt-4">
        <button className="bg-primary text-primary-foreground w-full px-3 py-2 rounded-md">
          {actionText}
        </button>
      </div>
    </div>
  );
};

export default JobSection;
