import React, { useState } from 'react'
import {
    Flex,
    IconButton,
} from '@chakra-ui/react'
import {
    FiMenu,
    FiSend,
    FiEdit3
} from 'react-icons/fi'
import NavItem from './NavItem'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")

    const handleOnClick = () => {
        if (navSize === "large") {
            changeNavSize("small")
        } else {
            changeNavSize("large")
        }
    }
    
    return (
        <Flex
            pos="sticky"
            left="0"
            h="95vh"
            w={navSize === "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={handleOnClick}  aria-label={''}/>

                <NavItem navSize={navSize} icon={FiSend} title="Get Started" active/>
                <NavItem navSize={navSize} icon={FiEdit3} title="Examples" />
            </Flex>
        </Flex>
    )
}