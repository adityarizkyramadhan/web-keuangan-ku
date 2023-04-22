import React, { useState, useEffect } from "react";
import api from "../router/index.js";
import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Container,
  Flex,
  Button,

} from "@chakra-ui/react";


const History = () => {
  // get data from api and store in state
  const [data, setData] = useState([]);
  const [jumlahTotal, setJumlahTotal] = useState();
  const getData = async () => {
    const { data } = await api.get("/uang/week");
    setData(data.data.records);
    setJumlahTotal(data.data.total)
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <h1 style={{
        textAlign: "center",
        paddingBottom: "3rem",
        fontWeight: "bold",
        fontSize: "20px"
      }}>Riwayat Pengeluaran</h1>
      <Table variant="simple" mb="6">
        <Thead>
          <Tr>
            <Th>No.</Th>
            <Th>Harga</Th>
            <Th>Detail</Th>
          </Tr>
        </Thead>
        {data.length === 0 ? (
          <Tfoot>
            <Tr>
              <Td colSpan={4} textAlign="center">
                Tidak ada data
              </Td>
            </Tr>
          </Tfoot>
        ) : (
          <Tbody>
            {data.map((row, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{row.jumlah.toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                }
                )
                }
                </Td>
                <Td>{row.detail}</Td>
              </Tr>
            ))}
          </Tbody>
        )}
      </Table>
      <h2 style={{
            textAlign: "center",
            paddingBottom: "3rem",
            fontWeight: "bold",
            fontSize: "15px"
          }
        }
      >Total Pengeluaran : {jumlahTotal}</h2>

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
          }}
        >
          Kembali
        </Button>
      </Flex>
    </Container >
  );
};

export default History;
