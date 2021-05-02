import React, { lazy, Suspense } from 'react';
import {
    Box,
    Grid,
    GridItem,
    Spinner
} from '@chakra-ui/react';
import RoomList from './RoomList';
import {
    Switch,
    Route,
} from "react-router-dom";
const Detail = lazy(() => import('./Detail'));
const NewRoom = lazy(() => import('./NewRoom'));

function Chat() {
    return (
        <Box textAlign="center" fontSize="xl" >
            <Grid minH="100vh" pt={3}>
                <Grid
                    // templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={4}
                >
                    <GridItem colSpan={1} display={['none', 'none', 'flex']} >
                        <RoomList />
                    </GridItem>
                    <GridItem colSpan={[5, 5, 4]}  >
                        <Suspense
                            fallback={<Spinner thickness="4px"
                                speed="0.65s"
                                emptyColor="gray.200"
                                color="blue.500"
                                size="xl" mx="auto"
                            />}>
                            <Switch>
                                <Route path="/:id">
                                    <Detail />
                                </Route>
                                <Route path="/*">
                                    <NewRoom />
                                </Route>
                            </Switch>
                        </Suspense>
                    </GridItem>
                </Grid>


            </Grid>
        </Box>
    );
}

export default Chat;