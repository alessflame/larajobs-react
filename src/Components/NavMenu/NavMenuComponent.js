import React, { useState, useEffect } from "react";
import {
    Flex,
    Box,
    Menu,
    MenuButton,
    IconButton,
    Button,
    MenuList,
    MenuItem,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    DrawerHeader,
    Divider,
    useColorMode,
} from "@chakra-ui/react";

import { FaChevronDown } from "react-icons/fa";
import { BsFillLightbulbFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import SidebarUser from "../SidebarUser/SidebarUser";
import style from "./NavMenu.module.css";
import { getColorMode, setColorMode } from "../../helper/colorMode/colorMode";
import { useDispatch } from "react-redux";
import { dispatchLogout } from "../../redux/setData/setData";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavMenuComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLightMode, setIsLightMode] = useState(getColorMode());
    const dispatch = useDispatch();
    const {toggleColorMode } = useColorMode()


    const refresh = () => window.location.reload(true);

    useEffect(() => {
        setColorMode(isLightMode);
    }, [isLightMode]);

    return (
        <Flex
            height={"50px"}
            justifyContent="space-around"
            alignItems={"center"}
            bg={isLightMode ? "gray.900" : ""}
        >
            <Box>
                <Box className={style.buttonMenu}>
                    <IconButton
                        variant="outline"
                        colorScheme="teal"
                        icon={<HiMenu size="30px" />}
                        onClick={() => setIsOpen(true)}
                    />
                </Box>

                <Drawer
                    isOpen={isOpen}
                    placement="left"
                    bg={isLightMode ? "gray.600" : "white"}
                >
                    <DrawerOverlay />
                    <DrawerContent bg={isLightMode ? "gray.800" : "gray.200"}>
                        <DrawerHeader>
                            {" "}
                            <IconButton
                                colorScheme="teal"
                                textAlign="right"
                                icon={<AiOutlineClose size="30px" />}
                                onClick={() => setIsOpen(false)}
                            />
                        </DrawerHeader>

                        <SidebarUser />
                    </DrawerContent>
                </Drawer>
            </Box>

            <Box>
                <Menu>
                    <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                        Menu
                    </MenuButton>
                    <MenuList>
                        <MenuItem
                            onClick={() => {
                                dispatch(dispatchLogout());
                            }}
                        >
                            Logout
                        </MenuItem>
                        <MenuItem>
                            <Link to="/dashboard/me/update">Modifica credenziali</Link>
                        </MenuItem>
                        <MenuItem><Link to="/dashboard/insertcv">Inserisci il tuo CV</Link></MenuItem>
                        <Divider />
                        <MenuItem><Link to="/dashboard">Annunci</Link></MenuItem>
                        <MenuItem
                            
                                onClick={() => {
                                     toggleColorMode();

                                    setIsLightMode(!isLightMode);
                                  
                                }}
                            >
                                {!isLightMode ? "Dark Mode" : "Light Mode"}
                                <BsFillLightbulbFill />
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    );
}

export default NavMenuComponent;
