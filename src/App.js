import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Proker from './pages/AddProker.js';
import AuthRoute from './components/Auth.js';
import PrivateRoute from './components/Private.js';
import './App.css';
import { ChakraProvider, Flex} from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Footer from './pages/Footer.js';
import NavigasiBar from './pages/Navigasibar.js';
import FirstPage from './pages/FirstPage.js';
import History from './pages/History.js';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <NavigasiBar/>
        <Flex maxW="100%" mx="auto" minH="100vh" pt={20} direction="column">
          <Routes >
            <Route path="/" element={<Home />} />
            <Route element={<AuthRoute />}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/menupage" element={<FirstPage />} />
              <Route path="/proker" element={<Proker />} />
              <Route path="/history" element={<History />} />
            </Route>
          </Routes>
          < Footer/>
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
