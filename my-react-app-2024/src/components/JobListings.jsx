// import jobs from '../jobs.json'
import JobListing from './JobListing'
import { useState, useEffect } from 'react';


const JobListings = ({isHome = false}) => {
    // const jobListings = isHome ? jobs.slice(0,3) : jobs;
    // console.log(jobs)

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fecthJobs = async () => {
        try{
          console.log("im in the try")
          const res = await fetch('http://localhost:3000/jobs')//error here prob since im using gitpod
          console.log("im after res")
          const data = await res.json();
          setJobs(data);
        } catch(error){
          console.log('error getting data', error)
        } finally{
          setLoading(false);
        }
      }

      fecthJobs();
    }, []);

  return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
             <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
              {isHome ? 'Recent Jobs' : 'Browse Jobs'}
            </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {jobs.map((job) => (
                        <JobListing job = {job} key = {job.id}></JobListing>
                    ))}
                    
                </div>
            </div>
    </section>
  )
}

export default JobListings