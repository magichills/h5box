import React, { useState } from 'react'
import { CarouselDiv, FormContainer, HomeContainer, InnerForm } from './style';
import { Heading, Switch, FormControl, FormLabel, Stack, RadioGroup, Radio, NumberInput, NumberIncrementStepper, NumberDecrementStepper, NumberInputStepper, NumberInputField, Box} from '@chakra-ui/react';
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
      <Heading as='h1' size='xl' textAlign={'center'}>React Carousel Slider Component</Heading>
      <CarouselDiv>
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
      </CarouselDiv>
      <FormContainer>
        {/* <Heading as='h1' size='lg' textAlign={'center'}>Settings</Heading> */}
        <FormControl >
          <Stack direction='row' spacing={5} justifyContent='center'>
            <Box display='flex' flexDirection='row'>
              <FormLabel>Show Indicators</FormLabel>
              <Switch isChecked={indicator} onChange={() => setIndicator(!indicator)} />
            </Box>
            <FormLabel>Infinite Scroll</FormLabel>
            <Switch isChecked={infinite} onChange={() => setInfinite(!infinite)} />
          </Stack>
          <Stack direction='row' spacing={5} justifyContent='center'>
            <FormLabel>Indicator type</FormLabel>
            <RadioGroup onChange={setIndicatorType} value={indicatorType}>
              <Stack direction='row' spacing={2} >
                <Radio value='circle' > Circle </Radio>
                <Radio value='number' > Number </Radio>
              </Stack>
            </RadioGroup>
          </Stack>
        </FormControl>

        <InnerForm>
          <FormControl>
              <Stack direction='row' justifyContent={'center'}>
                <FormLabel>Autoplay</FormLabel>
                <Switch isChecked={autoplay} onChange={() => setAutoplay(!autoplay)} />
                <FormLabel>Autoplay Duration</FormLabel>
                <NumberInput size='sm' maxH={8} maxW={20} step={1} defaultValue={2} min={1} max={60} onChange={(e) => setAutoplayDuration(parseInt(e))}>
                <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper/>
                    <NumberDecrementStepper/>
                  </NumberInputStepper>
                </NumberInput>
              </Stack>
          </FormControl>
          <FormControl>
              <Stack direction={{base: 'column', lg: 'row' }} justifyContent={'center'} alignItems='center' gap={2}>
                <FormLabel>Slides to Show</FormLabel>
                <NumberInput size='sm' maxH={8} maxW={20} step={1} defaultValue={1} min={1} max={3} onChange={(e) => setSlidesToShow(parseInt(e))}>
                <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper/>
                    <NumberDecrementStepper/>
                  </NumberInputStepper>
                </NumberInput>
                <FormLabel>Slides to Scroll</FormLabel>
                <NumberInput size='sm' maxH={8} maxW={20} step={1} defaultValue={1} min={1} max={3} onChange={(e) => setSlidesToScroll(parseInt(e))}>
                <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper/>
                    <NumberDecrementStepper/>
                  </NumberInputStepper>
                </NumberInput>
              </Stack>
          </FormControl>
        </InnerForm>
      </FormContainer>
    </HomeContainer>
  )
}
export default Home;
