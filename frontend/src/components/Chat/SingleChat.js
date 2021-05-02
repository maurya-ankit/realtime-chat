import { Avatar } from '@chakra-ui/avatar'
import { Text, Stack } from '@chakra-ui/react'
import React from 'react'
import Moment from 'react-moment';
import { useSelector } from 'react-redux'

const SingleChat = (props) => {
    const { user } = useSelector(state => state.user)

    return (
        <div>

            <Stack direction="row" spacing="8" my={2} alignItems="center"

                justifyContent={props.data?.user === user?.username ? "flex-end" : "flex-start"} mx={10}>
                {props.data?.user === user?.username ?
                    <Stack direction="row" bg="pink.300" py="3" px={6} borderRadius="30"
                        maxWidth="400" alignItems="flex-end"
                        spacing={4}>

                        <Stack   >
                            <Text align="end">
                                {props.data.message}
                            </Text>
                            <Text color="gray.500" fontSize="sm" align="end">
                                <Moment fromNow>{props.data.utc_time}</Moment>

                            </Text>
                        </Stack>
                        <Stack align="center">
                            <Avatar src="" name={props.data?.user} bg="blue.100" />
                            <Text color="gray.500" fontSize="sm" align="start">
                                {props.data?.user}

                            </Text>
                        </Stack>
                    </Stack>

                    : <Stack direction="row" spacing={4}
                        bg="gray.200" py="3" px={6} borderRadius="30" maxWidth="400"
                        alignItems="flex-end"
                    >
                        <Stack align="center">
                            <Avatar src="" name={props.data?.user} bg="blue.100" />
                            <Text color="gray.500" fontSize="sm" align="start">
                                {props.data?.user}

                            </Text>
                        </Stack>
                        <Stack>

                            <Text align="start">
                                {props.data.message}
                            </Text>
                            <Text color="gray.500" fontSize="sm" align="start">
                                <Moment fromNow>{props.data.utc_time}</Moment>

                            </Text>
                        </Stack>
                    </Stack>
                }


            </Stack>
        </div>
    )
}

export default SingleChat
