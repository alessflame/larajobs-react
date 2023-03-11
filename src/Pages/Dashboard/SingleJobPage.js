import React, { useCallback, useEffect, useState } from "react";
import DashBoardLayout from "../../Layouts/DashBoard/DashBoardLayout";
import SingleJob from "../../Components/SingleJob/SingleJob";
import { getSingleJob } from "../../helper/Api/GetApi";
import { useParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

function SingleJobPage() {
  const [job, setJob] = useState({});
  const { id } = useParams();

  const setJobCallback = useCallback(async () => {
    // console.log("id:", id);
    const job= await getSingleJob(id);
    setJob(job);
    // console.log(job);
  }, [id]);

  useEffect(() => {setJobCallback();}, [setJobCallback]);

  return (
    <>
      <DashBoardLayout children={ Object.entries(job).length> 0? <SingleJob {...job} /> : <Spinner/>} />
    </>
  );
}

export default SingleJobPage;
