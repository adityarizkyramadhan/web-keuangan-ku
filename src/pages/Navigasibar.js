import { Container,  } from "@chakra-ui/react";
import React from "react";

const Navigasibar = () => {
    return (
        <Container
            maxWidth="full"
            bg={'#31336C'}
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
            >Web Pengatur Keuangan</h1>
        </Container>
    );
}

export default Navigasibar;
