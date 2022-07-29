import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton
} from '@chakra-ui/react'
import { IconType } from 'react-icons'

type Props = {
    icon: IconType
    title: string
    active?: boolean
    navSize?: string
}
export default function NavItem({ icon, title, active, navSize } : Props) {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize === "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    p={3}
                    borderBottom={active ? "1px solid #AEC8CA" : "none"}
                    _hover={{ borderBottom: "1px solid #AEC8CB" }}
                    w={"100%"}
                >
                    <MenuButton w="100%">
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "gray.500"} />
                            <Text ml={5} display={navSize === "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}