import { useEffect} from "react";
import {
    Flex,
    Heading,
    Stack,
    Tab,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
} from "@chakra-ui/react";
import { IoCodeWorking } from "react-icons/io5";
import LoginComponent from "../Components/Auth/LoginComponent";
import RegisterComponent from "../Components/Auth/RegisterComponent";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../Components/Modal/ModalComponent";
import { getColorMode } from "../helper/colorMode/colorMode";

import useAuth from "../hooks/useAuth";
// import { getSomeJobs } from "../helper/Api/GetApi";
// import CardsJobsContainer from "../Components/CardsJobsContainer/CardsJobsContainer";

const App = () => {
    // const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();
    // const modal= useSelector(state=>state.modal);
    // const [isLogin, setIsLogin] = useState(false);
    const [token, user, isLogged] = useAuth();

    // const getJobsList = useCallback(async () => {
    //     const someJobs = await getSomeJobs();
    //     return setJobs(someJobs);
    // }, []);

    useEffect(() => {
        if (user && token && isLogged) {
            return navigate("/dashboard");
        }
        // getJobsList();
    }, [navigate, user, token, isLogged]);

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            bg={() => (getColorMode() ? "dark" : "gray.200")}
            justifyContent="center"
            alignItems="center"
        >
            <ModalComponent />
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <IoCodeWorking size="50px" color="teal" />
                <Heading color="blue.400">Larajobs</Heading>
            </Stack>

            {/* <Flex  
                flexDir="column"
                m={20}
                justifyContent="center"
                alignItems="center">
                {jobs.length > 0 ? <CardsJobsContainer jobs={jobs} /> : ""}
            </Flex> */}

            <Tabs variant="soft-rounded" colorScheme="cyan">
                <TabList>
                    <Tab>Login </Tab>
                    <Tab>Registrati</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <LoginComponent />
                    </TabPanel>
                    <TabPanel>
                        <RegisterComponent />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    );
};

export default App;
