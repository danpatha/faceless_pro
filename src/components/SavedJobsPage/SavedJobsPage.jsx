import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { PanoramaSharp } from "@mui/icons-material";

function SavedJobsPage() {
  const dispatch = useDispatch();
  const savedJobsList = useSelector((store) => store.candidateReducer.saveJobs);
  const appliedJobsList = useSelector(
    (store) => store.candidateReducer.candidateJobs
  );
  const history = useHistory();

  console.log("savedJob", savedJobsList);
  useEffect(() => {
    dispatch({ type: "FETCH_SAVED_JOBS" });
    dispatch({ type: 'FETCH_APPLIED_JOBS' });
  }, []);

  function submitApplied(){
    dispatch({
        type: 'FETCH_APPLIED_JOBS',
    });
}

  return (
    <>
      <h1>Saved Jobs</h1>
      <section>
        {savedJobsList.map((job) => {
          return (
            <div key={job.id}>
              <h4> {job.title} </h4>

              <p> {job.company_name}</p>

              <p> {job.company_address}</p>

              <div onClick = {submitApplied}>
                {appliedJobsList.find((c) => c.id === job.id) ? (
                  <p>Applied</p>
                ) : (
                  <button
                    onClick={() => {
                      dispatch({
                        type: "APPLY_JOB",
                        payload: job,
                      });
                      history.push("/applied");
                    }}
                  >
                    APPLY{" "}
                  </button>
                )}
              </div>

              <button
                onClick={() => {
                  history.push(`/CandidateJobDetails/${job.id}`);
                  dispatch({
                    type: "VIEW_JOB_DETAILS",
                    payload: `${params.id}`,
                  });
                }}
              >
                DETAILS
              </button>

              <button
                onClick={() => {
                  dispatch({
                    type: "DELETE_JOB",
                    payload: job,
                  });
                }}
              >
                REMOVE{" "}
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default SavedJobsPage;
