import {
  useToast,
  Container,
  Text,
  Flex,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../router/index.js";
import "react-quill/dist/quill.snow.css";

const AddProker = () => {

  const [detail, setDetail] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();
  const { onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await api.post("/uang/", {
        jumlah,
        detail
      });
      toast({
        title: "Success",
        description: "Pengeluaran berhasil ditambahkan",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/menupage");
      setIsLoading(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: error,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  };

  //form input proker
  return (
    <Container>
      <Text fontSize="24px" color="#31336C" fontWeight="bold" mb={"1rem"}>
        Tambah Keuangan
      </Text>
      <form onSubmit={handleSubmit}>
        <Flex flexDirection="column">
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "black",
              marginBottom: "3px",
              marginTop: "3px",
            }}
          >
            Harga Pengeluaran
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              *
            </span>
          </p>
          <Input
            type="number"
            marginTop="10px"
            placeholder="Harga Pengeluaran"
            value={jumlah}
            onChange={(e) => setJumlah(e.target.value)}
            style={{ marginBottom: "1rem" }}
          />
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "black",
              marginBottom: "3px",
              marginTop: "3px",
            }}
          >
            Detail Pengeluaran
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              *
            </span>
          </p>
          <Input
            type="text"
            placeholder="Detail"
            marginTop="10px"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            style={{ marginBottom: "1rem" }}
          />
          <Button
            type="submit"
            colorScheme={isLoading ? "blue" : "teal"}
            isLoading={isLoading}
            marginTop="2rem"
          >
            Submit
          </Button>
        </Flex>
      </form>
      <Flex
        justifyContent="center"
        style={{
          paddingTop: "3rem",
        }}
      >
        <Button
          as={Link}
          to="/menupage"
          style={{
            color: "white",
            backgroundColor: "#31336C",
            marginBottom: "1rem",
          }}
        >
          Kembali
        </Button>
      </Flex>
    </Container>
  );
};

export default AddProker;
