import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import GetStarted from "./pages/GetStarted"
import Footer from "./components/Footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GetStarted" element={<GetStarted />} />
      </Routes>
      <Footer />
    </Router>
  </ChakraProvider>
)
