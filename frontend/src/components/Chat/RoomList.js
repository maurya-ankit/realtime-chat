import React, { useEffect, useState } from 'react'
import {
    Box,
    Container,
    SimpleGrid,
    Text,
    Avatar,
    HStack,
    VStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import api from '../../adaptor/api'

const RoomList = () => {
    const [rooms, setrooms] = useState([])
    useEffect(() => {
        api.get('chat/room/')
            .then(res => setrooms(res.data))
            .catch(res => console.log(res))
    }, [])
    return (
        <Box p={4} bg="Highlight" borderRadius="20">
            <Container maxW={'6xl'} mt={2}  >
                <SimpleGrid >
                    {rooms.map((room) => (
                        <HStack key={room.id} align={'top'} as={Link}
                            _hover={{ backgroundColor: "blue.200" }}
                            bg="InfoBackground"
                            width="100%"
                            alignItems="center"
                            borderRadius="20"
                            p={3} m={3}
                            to={`/${room.name}`}>
                            <Box color={'green.400'} px={2}>
                                <Avatar src="" name={room.name} size="sm" />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={300}>{room.name.replace(/_/g, ' ')}</Text>
                            </VStack>
                        </HStack>
                    ))}
                </SimpleGrid></Container>
        </Box>
    )
}

export default RoomList
