import { FaGithub } from "react-icons/fa";
import { Spacer, ButtonGroup, Button, useColorModeValue, Flex, MenuItem, MenuList, MenuButton, IconButton, Menu} from '@chakra-ui/react';
import { ColorModeSwitcher } from './../../ColorModeSwitcher';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiSend } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const color = useColorModeValue('black', 'white');
  const NavLink = styled(Link)`
    font-size: 1.5rem;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    color: ${color};
  `;
  const Nav = styled(Flex)`
    overflow: hidden;
    top: 0;
    height: 50px;
    z-index: 12;
    padding: 0.2rem calc((100vw - 1500px) / 2);
  `;
  return (
      <Nav direction='row' minWidth='max-content' alignItems='center' gap='2'>
        <ButtonGroup display={{lg: 'flex', base:'none'}}>
          <NavLink to='/' data-cy="home nav">
            React Carousel Slider Component
          </NavLink>
        </ButtonGroup>
        <Spacer />
        <ButtonGroup gap='2'>
          <ColorModeSwitcher />
          <Link to='/GetStarted' data-cy="Docs">
              <Button leftIcon={<FiSend />} variant='outline' colorScheme='Github'  display={{lg: 'flex', base:'none'}}>
                Get Started
              </Button>
          </Link>
          <Button leftIcon={<FaGithub />} variant='outline' colorScheme='Github' display={{lg: 'flex', base:'none'}}>
            <a href='https://github.com/magichills/React-Carousel-Slider-Component' target='_blank' rel="noreferrer">
              Github
            </a>
          </Button>
          <Button variant='solid' colorScheme='teal'  display={{lg: 'flex', base:'none'}}>
            <a href='https://www.npmjs.com/package/react-carousel-slider-component' target='_blank' rel="noreferrer">
              Download
            </a>
          </Button>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<GiHamburgerMenu />}
              variant='outline'
              display={{base: 'flex', lg: 'none'}}  
            />
            <MenuList>
              <Link to='/' data-cy="home-nav">
                <MenuItem>
                  Home
                </MenuItem>
              </Link>
              <Link to='/GetStarted' data-cy="Docs">
                <MenuItem>
                  Get Started
                </MenuItem>
              </Link>
              <a href='https://github.com/magichills/React-Carousel-Slider-Component' target='_blank' rel="noreferrer">
                <MenuItem>
                  Github
                </MenuItem>
              </a>
              <a href='https://www.npmjs.com/package/react-carousel-slider-component' target='_blank' rel="noreferrer">
                <MenuItem >
                  Download
                </MenuItem>
              </a>
            </MenuList>
          </Menu>
        </ButtonGroup>
      </Nav>
  );
};

export default Navbar;