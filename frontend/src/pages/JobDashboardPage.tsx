// export const JobDashboardPage = () => {
//     return <>Dashboard</>
// }
import JobSection from './JobSection';

export const JobDashboardPage = () => {
  const savedJobs = [{ id: 1, title: 'Network Analyst', company: 'Esri' }];
  const savedJobs1 = [{ id: 2, title: 'Data Analyst', company: 'Google' }];
  const savedJobs2 = [{ id: 3, title: 'Security Analyst', company: 'Amazon' }];
  const savedJobs3 = [{ id: 4, title: 'Network Analyst', company: 'Amazon' }];
  const savedJobs4 = [{ id: 5, title: 'Data Scientist', company: 'Meta' }];

  const appliedJobs = [{ id: 6, title: 'Software Developer', company: 'SIG' }];
  const interviewJobs = [{ id: 7, title: 'Embedded Engineer', company: 'Caltek Staffing' }];
  const offerJobs = [{ id: 8, title: 'Graduate Engineer', company: 'Palo Alto Networks' }];

  return (
    <div className="dashboard bg-blue-100 h-full w-full flex flex-col">
      <h2 className="text-2xl font-bold pb-4">Job Tracker Dashboard</h2>
      {/* Scrollable job sections */}
      <div className="job-sections flex space-x-4 overflow-x-auto items-start w-full h-full p-4">
        <JobSection title="Saved" jobs={[...savedJobs, ...savedJobs1, ...savedJobs2, ...savedJobs3, ...savedJobs4]} actionText="Add Job" />
        <JobSection title="Applied" jobs={appliedJobs} actionText="Set application date" />
        <JobSection title="Interview" jobs={interviewJobs} actionText="Add an interview" />
        <JobSection title="Offer" jobs={offerJobs} actionText="Add a salary" />
      </div>
    </div>
  );
};

export default JobDashboardPage;
