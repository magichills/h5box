import { Box, Container, Text, useColorModeValue, Stack } from '@chakra-ui/react';
import react from 'react';

const Footer = () => {
    return (
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        style={{bottom: '0', zIndex: '12', textAlign: 'center'}}
        >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
          >
          <Text>© 2022 Magic Hills Pty Ltd Australian Business Number (ABN) 73 140 123 511</Text>
          <Text>Made with Love and Passion in Sydney, Australia</Text>
        </Container>
      </Box>
    );
}
export default Footer;