import { Spinner, VStack } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { getAllCategories } from "../../helper/Api/GetApi";
import CategoryFilter from "../../Components/CategoryFilter/CategoryFilter";
import DashBoardLayout from "../../Layouts/DashBoard/DashBoardLayout";
import CardsJobsContainer from "../../Components/CardsJobsContainer/CardsJobsContainer";
import { useSelector, useDispatch } from "react-redux";
import { dispatchJobsAds } from "../../redux/setData/setData";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const [categories, setCategories] = useState([]);
  const jobAds = useSelector((state) => state.jobAds);
  const filter = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();
  const [token, user, isLogged] = useAuth();
  const navigate=useNavigate();


  const setJobAds = useCallback(async () => {
    dispatch(dispatchJobsAds(filter));
  }, [dispatch, filter]);

  const getCategories = useCallback(async () => {
    setCategories(await getAllCategories());
  }, []);

  useEffect(() => {
    getCategories();
    setJobAds();
    if (!isLogged) {
      return navigate("/");
  }
  }, [getCategories, setJobAds, navigate, user, token, isLogged]);

  return (
    <>
      <DashBoardLayout
        children={
          <VStack with={"100%"} pb="100px">
            <CategoryFilter categories={categories} />
            {jobAds.isLoad === false ? (
              <Spinner />
            ) : (
              <CardsJobsContainer jobs={jobAds.value} />
            )}
          </VStack>
        }
      />
    </>
  );
}

export default DashboardPage;
