import React, { useState } from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    SimpleGrid,
    Flex,
    VisuallyHidden,
    Input,
    Button,
} from '@chakra-ui/react'
import api from '../../adaptor/api';
import { useParams } from 'react-router-dom'
const AddUser = (props) => {
    const { id } = useParams()
    const [person, setperson] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('chat/membership/', { person, 'room': id })
            .then(res => {
                setperson("")
            })
            .catch(err => console.log(err))
    }
    return (
        <Box as="form" mb={6} rounded="lg" shadow="xl" onSubmit={handleSubmit} >
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
                        value={person}
                        onChange={(e) => setperson(e.target.value)}
                    />
                </Flex>
                <Button w="full" bg="blue.200" py={2} type="submit">
                    Add to room
                </Button>
            </SimpleGrid>
        </Box>
    )
}

export default AddUser
