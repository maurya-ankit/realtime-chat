import React, { useState } from "react";
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
import api from '../../../adaptor/api'
import { useToast } from "@chakra-ui/react"
import { useHistory } from 'react-router-dom'
const Signup = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const history = useHistory();
    const toast = useToast()
    const handleRegistration = (e) => {
        e.preventDefault();
        api.post('/auth/users/', { username, password, email })
            .then(res => {
                // console.log(res)
                toast({
                    title: "Account created.",
                    description: "We've created your account for you with provided credentials",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                })
                history.push(`/auth`);
            })
            .catch(err => {
                console.log(err)
                toast({
                    title: "Account creation failed",
                    description: "please check credentials again or try changing username or email or both",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                })
            })
    }
    return (
        <Box px={8} py={24} mx="auto">
            <SimpleGrid
                alignItems="center"
                width={[300, 400, 500]}
                mx="auto"
            >
                <GridItem colSpan={{ base: "auto", md: 4 }}>
                    <Box as="form" mb={6} rounded="lg" shadow="xl" onSubmit={handleRegistration}>
                        <Center pb={0} color={useColorModeValue("gray.700", "gray.600")}>
                            <p pt={2}>Signup</p>
                        </Center>
                        <SimpleGrid
                            columns={1}
                            px={6}
                            py={4}
                            spacing={4}
                            borderBottom="solid 1px"
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
                                <VisuallyHidden>Email Address</VisuallyHidden>
                                <Input
                                    mt={0}
                                    type="email"
                                    placeholder="Email"
                                    required={true}
                                    onChange={(e) => setemail(e.target.value)}
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
                                Sign up
                            </Button>
                        </SimpleGrid>
                    </Box>
                    <chakra.p fontSize="md" textAlign="center" color="gray.600">
                        Already have an account?{" "}
                        <chakra.a color="blue.500" as={Link} to="/auth/">
                            Signin
            </chakra.a> {" "} here
                    </chakra.p>
                </GridItem>
            </SimpleGrid>
        </Box>
    );
};

export default Signup;