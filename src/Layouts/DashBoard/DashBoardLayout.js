import { Container, Stack, Flex, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ModalComponent from "../../Components/Modal/ModalComponent";
import SidebarUser from "../../Components/SidebarUser/SidebarUser";
import style from "./DashBoardLayout.module.css";
import NavMenuComponent from "../../Components/NavMenu/NavMenuComponent";
// import { getColorMode } from "../../helper/colorMode/colorMode";
import useAuth from "../../hooks/useAuth";
import { dispatchUser } from "../../redux/setData/setData";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../helper/Api/token";
// import ReactCSSTransitionGroup from 'react-transition-group'; // ES6

function DashBoardLayout({ children }) {
    // const mode = () => getColorMode();

    const [token, user, isLogged] = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token || !user || !isLogged) {
            dispatchUser(dispatch);
            if (!getToken()) {
                return navigate("/");
            }
        }
    }, [dispatch, isLogged, navigate, token, user]);

    return (
        <Stack w={"100%"}>
            <NavMenuComponent />
            <Flex
                justifyContent="space-around"
                bg={useColorModeValue("gray.200", "dark")}
            >
                <div className={style.sidebar}>
                    <SidebarUser />
                </div>

                {/* <Spacer/> */}
                <Container
                    minWidth={"75%"}
                    min-height={"100%"}
                    bg={useColorModeValue("gray.200", "dark")}
                >
                    {children}
                </Container>
            </Flex>
            <ModalComponent />
        </Stack>
    );
}

export default DashBoardLayout;
