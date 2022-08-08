import { Stack } from '@chakra-ui/react';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`

export const GsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  margin-left: 2rem;
`

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  @media only screen and (max-device-width: 62em) {
    gap: 2rem;
    padding: 0 1rem;
  }
`
export const InnerForm = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-device-width: 62em) {
    flex-direction: column;
    gap: 2rem;
  }
`

export const CarouselDiv = styled.div`
  width: 60%;
  height: 500px;
  @media only screen and (max-device-width: 62em) {
    width: 90%;
    height: 500px;
  }
`