import React from "react";
import {
    chakra,
    Box,
    useColorModeValue,
    Flex,
    Button,
    Stack,
} from "@chakra-ui/react";
import { logout } from '../../../store/user'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const LoggedIn = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)
    const history = useHistory();


    return (
        <Flex px={4} py={32} mx="auto">
            <Box mx="auto" w={[300, 500]} justifyContent="center" display="flex" flexDirection="column">
                <chakra.h1
                    mb={3}
                    fontSize={{ base: "3xl", md: "4xl" }}
                    fontWeight="bold"
                    lineHeight="shorter"
                    color={useColorModeValue("gray.900", "white")}
                >
                    Hi, {user?.username}!
        </chakra.h1>
                <chakra.p mb={5} color="gray.500" fontSize={{ md: "lg" }}>
                    visit homepage to start chatting
        </chakra.p>
                <Stack>
                    <Button
                        w={{ base: "full", sm: "auto" }}
                        variant="solid"
                        bg="blue.400"
                        size="lg"
                        mb={{ base: 2, sm: 0 }}
                        onClick={() => history.push(`/`)}

                    >
                        Home Page
                    </Button>
                    <Button
                        w={{ base: "full", sm: "auto" }}
                        variant="solid"
                        bg="yellow.400"
                        size="lg"
                        mb={{ base: 2, sm: 0 }}
                        onClick={() => dispatch(logout())}
                    >
                        Logout
                    </Button>
                </Stack>
            </Box>
        </Flex>
    );
};

export default LoggedIn;