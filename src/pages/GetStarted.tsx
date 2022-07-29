import React from 'react'
import { GsContainer } from './style';
import { Heading, Text, Code } from '@chakra-ui/react';
import { Carousel } from 'react-carousel-slider-component';
import slides from './../assests/ExampleSlides.json';
const GetStarted = () => {
  return (
    <GsContainer>
      <Heading as='h1' size='xl' noOfLines={1} alignSelf={'center'}>Get Started</Heading>
      <Text alignSelf={'center'}>React Carousel Component is a carousel component built with React.</Text>

      <Heading as='h2' size='lg' noOfLines={1}>Installation</Heading>
      <Code>
        npm install react-carousel-slider-component
      </Code>
      <Heading as='h2' size='lg' noOfLines={1}>Props</Heading>
        
      <Text alignSelf={'center'}>
        Single Item Carousel
      </Text>
      <div style={{width: '40%', height: '350px', alignSelf: 'center'}} >
      <Carousel
        slides={slides['slides']}
        totalSlides={3}
        indicators={true}
      >
      </Carousel>
      </div>
      <Code display="block" whiteSpace="pre" children={`      
        import React from 'react';
        import './App.scss';
        import Carousel from './components/Carousel/Carousel';
        function App() {
          const slides = [
            {
            src: 'https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            alt: 'Early morning at Lake Bled',
            href: 'https://unsplash.com/photos/XGDBdSQ70O0',
            href_target: '_blank',
            },
            {
            src: 'https://images.unsplash.com/photo-1518717202715-9fa9d099f58a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80',
            alt: 'A picture of grass landscape and blue sky',
            href: 'https://unsplash.com/photos/-nYBR0LFTvQ',
            href_target: '_blank',
            },
            {
              src: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1111&q=80',
              alt: 'A picture of a lake with a mountain in the background',
              href: 'https://unsplash.com/photos/oMneOBYhJxY',
              href_target: '_blank',
            }
          ];
          return (
              <div  style={{textAlign: 'center'}}>
              <h1>React Carousel Component</h1>
              <div style={{width: '40%', height: '350px'}}>
              <Carousel
                slides={slides}
                totalSlides={3}
                indicators={true}
              >
              </Carousel>
              </div>
          );
          export default App;
          }
      `
      }/>
    </GsContainer>
  )
}
export default GetStarted;
