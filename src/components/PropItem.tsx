import React from 'react';
import { Text, Divider, Heading, Box, Flex} from '@chakra-ui/react';
type Props = {
    title: string;
    description: string;
    type: string;
    defaultValue?: string;
    required: string;
}
const PropItem = ({ title, description, type, defaultValue, required} : Props) => {
    return (
        <Box>
        <Heading as="h1" size="l" noOfLines={1}>{title}</Heading>
        <Text as='sub'>{required}</Text>
        <Text>Type: {type}</Text>
        {defaultValue ? <Text>Default: {defaultValue}</Text> : null}
        <Text>Description: {description}</Text>
    </Box>
    );

}
export default PropItem;