import { Stack } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import SearchInput from "../components/SearchInput";
import MultiStep from "../components/MultiStep";
import Footer from "../components/Footer";

function Home() {
  return (
    <Stack
      className="main"
      sx={{
        width: "100%",
        minHeight: "100vh",
        alignItems: "center",
      }}
    >
      <Navbar />
      <SearchInput />
      <MultiStep />
      <Footer />
    </Stack>
  );
}

export default Home;
