import React, { useState } from "react";
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
    useColorModeValue,
} from "@chakra-ui/react";

import { FaChevronDown } from "react-icons/fa";
import { BsFillLightbulbFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import SidebarUser from "../SidebarUser/SidebarUser";
import style from "./NavMenu.module.css";
// import { getColorMode, setColorMode } from "../../helper/colorMode/colorMode";
import { useDispatch } from "react-redux";
import { dispatchLogout } from "../../redux/setData/setData";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavMenuComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [load, setLoad] = useState(false);
    const dispatch = useDispatch();
    const { toggleColorMode } = useColorMode();

    return (
        <Flex
            height={"50px"}
            justifyContent="space-around"
            alignItems={"center"}
            bg={useColorModeValue("", "gray.900")}
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
                    bg={useColorModeValue("white", "gray.600")}
                >
                    <DrawerOverlay />
                    <DrawerContent
                        bg={useColorModeValue("gray.200", "gray.800")}
                    >
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
                        <MenuItem>
                            <Button
                            width="100%"
                                isLoading={load}
                                onClick={() => {
                                    setLoad(true);
                                    dispatch(dispatchLogout());
                                }}
                            >
                                Logout
                            </Button>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/dashboard/me/update">
                                Modifica credenziali
                            </Link>
                        </MenuItem>
                        {/* <MenuItem><Link to="/dashboard/insertcv">Inserisci il tuo CV</Link></MenuItem> */}
                        <Divider />
                        <MenuItem>
                            <Link to="/dashboard">Annunci</Link>
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                toggleColorMode();
                            }}
                        >
                            Cambia tema
                            <BsFillLightbulbFill />
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    );
}

export default NavMenuComponent;
