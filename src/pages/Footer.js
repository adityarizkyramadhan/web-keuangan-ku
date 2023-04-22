
import { Container } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    return (
        <Container
            maxWidth="full"
            mt="auto"
            textAlign="center"
            py="3"
            bg="#AC424D"
            textColor="white"
        >
        <h1
        style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1rem',
            textAlign: 'center',
            paddingTop: '1rem',
            paddingBottom : '1rem'
        }}
        >Made with ❤ by Aditya Rizky Ramadhan</h1>
        </Container>
    );
};

export default Footer;
