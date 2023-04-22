import React, { useState } from "react";
import { Button, Container, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import api from "../router/index.js";
const logout = () => {
  localStorage.clear();
  setTimeout(() => {
    window.location.reload();
  }, 1000);
};

const resetKeuangan = async () => {
  try {
    await api.get("/uang/reset");
    alert("Keuangan berhasil di-reset!");
  } catch (error) {
    console.log(error);
    alert("Terjadi kesalahan saat mereset keuangan");
  }
};

const FirstPage = () => {
  return (
    <Container>
      <Text
        fontSize="4xl"
        mb="4"
        style={{
          fontWeight: "bold",
          color: "#AC424D",
        }}
      >
        MENU UTAMA
      </Text>

      <Flex flexDirection={"column"}>
        <Button
          as={Link}
          to="/proker"
          variant="outline"
          style={{
            color: "white",
            backgroundColor: "#31336C",
            marginBottom: "0.5rem",
          }}
        >
          Tambah Pengeluaran
        </Button>
        <Button
          as={Link}
          to="/history"
          variant="outline"
          style={{
            color: "white",
            backgroundColor: "#31336C",
            marginBottom: "0.5rem",
          }}
        >
          Riwayat Pengeluaran
        </Button>
        <Button
          colorScheme="red"
          onClick={resetKeuangan}
          style={{
            marginBottom: "0.5rem",
          }}
        >
          Reset Keuangan Mingguan
        </Button>
        <Button
          colorScheme="red"
          onClick={logout}
          style={{
            marginBottom: "0.5rem",
          }}
        >
          Logout
        </Button>
      </Flex>
    </Container>
  );
};
export default FirstPage;
