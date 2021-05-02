import React, { useState, lazy, Suspense } from "react";
import {
    Box,
    GridItem,
    useColorModeValue,
    Button,
    Center,
    Flex,
    chakra,
    SimpleGrid,
    VisuallyHidden,
    Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../store/user'
import { Spinner } from "@chakra-ui/react"
const LoggedIn = lazy(() => import('./LoggedIn'));
const Login = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const handleSignIn = (e) => {
        e.preventDefault();
        const loginData = {
            username, password
        }
        dispatch(login(loginData))
    }
    return (
        <Box py="auto" mx="auto" >
            <SimpleGrid
                alignItems="center"
                width={[300, 400, 500]}
                mx="auto"
            >
                {!user ? <GridItem colSpan={{ base: "auto", md: 4 }}>
                    <Box as="form" mb={6} rounded="lg" shadow="xl" onSubmit={handleSignIn}>
                        <Center pb={0}
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            color={useColorModeValue("gray.700", "gray.600")}>
                            <p pt={2}>Login</p>
                        </Center>
                        <SimpleGrid
                            columns={1}
                            px={6}
                            py={4}
                            spacing={4}
                            borderBottom="solid 1px"
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            borderColor={useColorModeValue("gray.200", "gray.700")}
                        >
                            <Flex>
                                <VisuallyHidden>Username</VisuallyHidden>
                                <Input
                                    mt={0}
                                    type="text"
                                    placeholder="Username"
                                    required={true}
                                    onChange={(e) => setusername(e.target.value)}
                                />
                            </Flex>
                            <Flex>
                                <VisuallyHidden>Password</VisuallyHidden>
                                <Input
                                    mt={0}
                                    type="password"
                                    placeholder="Password"
                                    required={true}
                                    onChange={(e) => setpassword(e.target.value)}

                                />
                            </Flex>
                            <Button w="full" bg="blue.200" py={2} type="submit">
                                Sign in
                            </Button>
                        </SimpleGrid>
                    </Box>
                    <chakra.p fontSize="md" textAlign="center" color="gray.600">
                        Don't have an account?{" "}
                        <chakra.a color="blue.500" as={Link} to="/auth/signup">
                            Signup
            </chakra.a> {" "} here
                    </chakra.p>
                </GridItem> :
                    <Suspense fallback={<Spinner />}>
                        <LoggedIn />
                    </Suspense>

                }
            </SimpleGrid>
        </Box>
    );
};

export default Login;