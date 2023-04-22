import { Button, Container, Input, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../router/index.js";

// make form login with chakra-ui
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const { data } = await api.post("/user/login", {
                username: username,
                password: password,
            });
            localStorage.setItem("token", data.data.token);
            toast({
                title: "Success",
                description: "Anda berhasil login",
                status: "success",
                duration: 9000,
                isClosable: true,
            });
            setIsLoading(false);
            navigate("/menupage");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            toast({
                title: "Error",
                description: "Password anda atau username anda salah! Silahkan coba kontak PIT yaa 😊",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
            navigate("/");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
            setIsLoading(false);
        }
    };

    return (
        <Container>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                Login
            </Text>
            <form onSubmit={handleSubmit}>
                <Input
                    type="username"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{
                        marginBottom: "1rem",
                    }}
                />
                <Input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        marginBottom: "1rem",
                    }}
                />
                <Button type="submit" mt={4}
                    colorScheme={isLoading ? "blue" : "teal"}
                    isLoading={isLoading}
                    style={{
                        color: "white",
                        backgroundColor: "#31336C",

                    }}
                >
                    Login
                </Button>
            </form>
        </Container>
    );
}

export default Login;
