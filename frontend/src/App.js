import React, { lazy, Suspense } from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Spinner,
  Flex,
  Button,
  Spacer,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import { HamburgerIcon } from '@chakra-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from './store/user'
const Chat = lazy(() => import('./components/Chat'));
const Auth = lazy(() => import('./components/Auth'));

function App() {
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()


  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh">
            <Flex bg={useColorModeValue("Highlight", 'gray.700')} p={4} borderBottomRadius="20" maxH={20} >
              <Box p="2">
                <Heading size="md">Realtime Chat App</Heading>
              </Box>
              <Spacer />
              <Box>
                {user ?
                  <>
                    <Box display={{ base: "none", md: "flex" }}>
                      <Button onClick={() => dispatch(logout())} colorScheme="telegram" mr={[0, 1, 2]}>
                        Logout
                </Button>
                      <ColorModeSwitcher justifySelf="flex-end" />

                    </Box>
                    <Menu display={{ base: 'block', md: 'none' }}>
                      <MenuButton as={Button} rightIcon={<HamburgerIcon />} display={{ base: "block", md: "none" }} pl="2" mx="2" />
                      <MenuList>
                        <Button onClick={() => dispatch(logout())} colorScheme="telegram" mr={[0, 1, 2]}>
                          Logout
                </Button>
                        <ColorModeSwitcher justifySelf="flex-end" />
                      </MenuList>
                    </Menu>
                  </>
                  :
                  <>
                    <Box display={{ base: "none", md: "flex" }}>
                      <Button as={Link} to="/auth/signup" colorScheme="facebook" mx={[0, 1, 2]}>
                        Sign Up
                </Button>
                      <Button colorScheme="linkedin" as={Link} to="/auth/" mx={[0, 1, 2]} >Log in</Button>
                      <ColorModeSwitcher justifySelf="flex-end" mx="auto" />

                    </Box>
                    <Menu >
                      <MenuButton as={Button} rightIcon={<HamburgerIcon />} display={{ base: "block", md: "none" }} pl="2" mx="2" />
                      <MenuList>
                        <Button as={Link} to="/auth/signup" colorScheme="facebook" mx={2}>
                          Sign Up
                </Button>
                        <Button colorScheme="linkedin" as={Link} to="/auth/" mx={2}>Log in</Button>
                        <ColorModeSwitcher justifySelf="flex-end" mx="auto" />
                      </MenuList>
                    </Menu>
                  </>}

              </Box>
            </Flex>
            <Suspense
              fallback={<Spinner thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl" mx="auto"
              />}>
              <Switch>
                <Route path="/auth">
                  <Auth />
                </Route>
                {user ?
                  <Route path="/" >
                    <Chat />
                  </Route> :
                  <Redirect to="/auth" />
                }

              </Switch>
            </Suspense>
          </Grid>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;