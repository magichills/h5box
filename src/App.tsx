import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Docs from "./pages/Docs"
import Home from "./pages/Home"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </Router>
  </ChakraProvider>
)
