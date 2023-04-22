import React from "react";
import { Button, Container, styled, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Container
        style={{
            paddingTop: "5rem",
        }}
        >
            <Text fontSize="4xl" mb="4"
            style={{
                fontWeight: "bold",
                color: "#AC424D",
            }}
            >
                Web Keuanganku
            </Text>
            <Text mb="6">Website untuk manajemen pengeluaran uang saku mingguan</Text>
            <Button as={Link} to="/login" variant="outline" mr="8"
            style={{
                color : "white",
                backgroundColor : "#31336C",
            }}
            >
                Login
            </Button>
        </Container>
    );
};

export default Home;
