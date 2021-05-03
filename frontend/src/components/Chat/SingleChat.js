import { Avatar } from '@chakra-ui/avatar'
import { Text, Stack, useColorModeValue } from '@chakra-ui/react'
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

                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    <Stack direction="row" bg={useColorModeValue("linkedin.200", "facebook.600")} py="3" px={6} borderRadius="30"
                        maxWidth="400" alignItems="flex-end"
                        spacing={4}>

                        <Stack   >
                            <Text align="end" fontSize="lg">
                                {props.data.message}
                            </Text>
                            <Text color="gray.500" fontSize="sm" align="end">
                                <Moment fromNow>{props.data.utc_time}</Moment>

                            </Text>
                        </Stack>
                        <Stack align="center">
                            <Avatar src="" name={props.data?.user} size="sm" bg="blue.100" />
                            <Text color="gray.500" fontSize="sm" align="start">
                                {props.data?.user}

                            </Text>
                        </Stack>
                    </Stack>

                    : <Stack direction="row" spacing={4}
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        bg={useColorModeValue("facebook.100", 'gray.600')} py="3" px={6} borderRadius="30" maxWidth="400"
                        alignItems="flex-end"
                    >
                        <Stack align="center">
                            <Avatar src="" name={props.data?.user} size="sm" bg="blue.100" />
                            <Text color="gray.500" fontSize="sm" align="start">
                                {props.data?.user}

                            </Text>
                        </Stack>
                        <Stack>

                            <Text align="start" fontSize="lg">
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
