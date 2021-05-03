import {
    Button,
    chakra,
    InputGroup,
    Input,
    InputRightElement,
    Stack,
    Flex,
    Box,
    Spacer,
    Heading,
    Text,
    Menu,
    MenuButton,
    MenuList,
    Tag,
    Avatar,
    TagLabel,
} from '@chakra-ui/react'
import React, { useState, useEffect, useCallback } from 'react'
import { Link, useParams } from 'react-router-dom'
import useWebSocket, { ReadyState } from 'react-use-websocket';
import SingleChat from './SingleChat';
import { ArrowBackIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux'
import { useToast } from "@chakra-ui/react"
import api from '../../adaptor/api';
import AddUser from './AddUser';
const Detail = () => {
    const { id } = useParams()
    const { user } = useSelector(state => state.user)
    const toast = useToast()
    const initialUrl = `ws://127.0.0.1:8000/ws/chat/${id}/?token=${JSON.parse(localStorage.getItem('user')).token}`

    const [socketUrl, setsocketUrl] = useState(initialUrl)
    const [messages, setmessages] = useState([])
    const [roomInfo, setroomInfo] = useState({})
    const {
        sendMessage,
        lastMessage,
        readyState,
    } = useWebSocket(socketUrl);
    useEffect(() => {
        setsocketUrl(`ws://127.0.0.1:8000/ws/chat/${id}/?token=${JSON.parse(localStorage.getItem('user')).token}`)
        api.get(`chat/messages/?room=${id}`)
            .then(res => {
                setmessages(prev => [...res.data, ...prev])
            })
            .catch(err => console.log(err))
        setmessages([])
        document.title = `${id}`.toUpperCase()
    }, [id])

    useEffect(() => {
        if (lastMessage) {
            setmessages(prev => prev.concat(JSON.parse(lastMessage.data)))
            if (JSON.parse(lastMessage.data).user === user.username) {
                toast({
                    title: `message sent`,
                    // description: "Try ",
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                })
            }
            else {
                toast({
                    title: `message from ${JSON.parse(lastMessage.data).user}`,
                    description: `${JSON.parse(lastMessage.data).message}`,
                    status: "info",
                    duration: 2000,
                    isClosable: true,
                })
            }

        }

        // console.log(messages)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastMessage])
    useEffect(() => {
        api.get(`chat/room/${id}`)
            .then((res) => {
                // console.log(res.data)
                setroomInfo(res.data)
            })
            .catch(() => {

            })
    }, [id])
    const handleClickSendMessage = useCallback((e) => {
        e.preventDefault()
        sendMessage(JSON.stringify({
            message: e.target.message.value,
        }))
        e.target.message.value = ""
    }, [sendMessage]);

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    return (
        <Stack direction="column" mt={1}>

            {connectionStatus === "Open" ? <> <Flex bg="Highlight" p={5} borderRadius="20">
                <Button leftIcon={<ArrowBackIcon />} as={Link} to="/" />
                <Box p="2" ml={[1, 2, 4]}>
                    <Heading size="md">{id.replace(/_/g, ' ')}</Heading>

                </Box>

                <Spacer />
                <Stack direction="row" mr={4} display={{ base: "none", lg: "flex" }}>
                    <Text>
                        {roomInfo.total_members && <>{`Members:${roomInfo.total_members} `}</>}
                    </Text>
                    <Text pr={4}>
                        {roomInfo.public && <> Group Type: {roomInfo.public ? "Public" : "private"}</>}
                    </Text>
                    <Tag size="lg" colorScheme={connectionStatus === "Open" ? "green" : "red"} borderRadius="full">
                        <Avatar
                            bg={connectionStatus === "Open" ? "green" : "red"}
                            size="xs"
                            name="o"
                            ml={-1}
                            mr={2}
                        />
                        <TagLabel>{connectionStatus}</TagLabel>
                    </Tag>
                </Stack>

                {connectionStatus === "Closed" &&
                    toast({
                        title: `You Don't have access or no room with name ${id.replace(/_/g, ' ')}`,
                        // description: "Try ",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                    })}

                {roomInfo.admin === user.username && <Box>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Add User
                        </MenuButton>
                        <MenuList>
                            <AddUser roomId={roomInfo.id} />
                        </MenuList>
                    </Menu>
                </Box>}
            </Flex>
                <div>


                    <Box overflowY="scroll" height={['70vh', '80vh']} mb="20" >
                        {messages
                            .map((message, idx) => <Stack key={idx}>
                                <SingleChat data={message} id={idx} /></Stack>)}
                    </Box>
                </div>
                <chakra.form onSubmit={handleClickSendMessage} bottom={[0, 0, 0, 4]} position="fixed" alignSelf="center">
                    <InputGroup size="md" >
                        <Input
                            pr="4.5rem"
                            type="text"
                            variant="filled"
                            height="20"
                            minWidth={['sm', "md", 550, 800, 800]}
                            placeholder="Enter Message"
                            name="message"
                        />
                        <InputRightElement width="7rem" height="4.5rem" >
                            <Button size="lg" type="submit" my="auto" mx="auto">
                                send
                        </Button>
                        </InputRightElement>
                    </InputGroup>
                </chakra.form>

            </> : <></>}
            {connectionStatus === "Closed" && <Text>Try creating or joining different room</Text>}

        </Stack>
    )
}

export default Detail
