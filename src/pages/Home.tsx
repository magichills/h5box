import React, { useState } from 'react'
import { FormContainer, HomeContainer } from './style';
import { Heading, Switch, FormControl, FormLabel, Stack, RadioGroup, Radio, NumberInput, NumberIncrementStepper, NumberDecrementStepper, NumberInputStepper, NumberInputField, SimpleGrid, Box} from '@chakra-ui/react';
import { Carousel } from 'react-carousel-slider-component';
import slides from './../assests/ExampleSlides.json';
const Home = () => {
  const [indicator, setIndicator] = useState(true);
  const [indicatorType, setIndicatorType] = useState('circle');
  type IndicatorType = 'circle' | 'number';
  const [autoplay, setAutoplay] = useState<boolean>(false);
  const [autoplayDuration, setAutoplayDuration] = useState<number>(2);
  const [slidesToShow, setSlidesToShow] = useState<number>(1);
  const [slidesToScroll, setSlidesToScroll] = useState<number>(1);
  const [infinite, setInfinite] = useState<boolean>(false);
  return (
    <HomeContainer>
      <Heading as='h1' size='xl' noOfLines={1}>React Carousel Slider Component</Heading>
      <div style={{width: '60%', height: '500px'}}>
      <Carousel
        slides={slides['slides']}
        totalSlides={3}
        indicators={indicator}
        indicatorType={indicatorType as IndicatorType}
        autoplay={autoplay}
        autoplayDuration={autoplayDuration}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        infinite={infinite}
      >
      </Carousel>
      </div>
        <FormControl>
          <Stack direction='row' spacing={10}>
            <Box display='flex' flexDirection='row'>
              <FormLabel>Show Indicators</FormLabel>
              <Switch isChecked={indicator} onChange={() => setIndicator(!indicator)} />
            </Box>

            <FormLabel>Infinite Scroll</FormLabel>
            <Switch isChecked={infinite} onChange={() => setInfinite(!infinite)} />
            <FormLabel>Indicator type</FormLabel>
            <RadioGroup onChange={setIndicatorType} value={indicatorType}>
              <Stack direction='row' spacing={2} >
                <Radio value='circle' > Circle </Radio>
                <Radio value='number' > Number </Radio>
              </Stack>
            </RadioGroup>
          </Stack>
        </FormControl>

        <FormControl>
          <Stack direction='row' spacing={10}>
            <Stack>
              <FormLabel>Autoplay</FormLabel>
              <Switch isChecked={autoplay} onChange={() => setAutoplay(!autoplay)} />
              <FormLabel>Autoplay Duration(Seconds)</FormLabel>
              <NumberInput size='sm' maxW={20} step={1} defaultValue={2} min={1} max={60} onChange={(e) => setAutoplayDuration(parseInt(e))}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper/>
                  <NumberDecrementStepper/>
                </NumberInputStepper>
              </NumberInput>
            </Stack>
            <Stack>
              <FormLabel>Slides to Show</FormLabel>
              <NumberInput size='sm' maxW={20} step={1} defaultValue={1} min={1} max={3} onChange={(e) => setSlidesToShow(parseInt(e))}>
              <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper/>
                  <NumberDecrementStepper/>
                </NumberInputStepper>
              </NumberInput>
              <FormLabel>Slides to Scroll</FormLabel>
              <NumberInput size='sm' maxW={20} step={1} defaultValue={1} min={1} max={3} onChange={(e) => setSlidesToScroll(parseInt(e))}>
              <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper/>
                  <NumberDecrementStepper/>
                </NumberInputStepper>
              </NumberInput>
            </Stack>
          </Stack>
      </FormControl>
    </HomeContainer>
  )
}
export default Home;
