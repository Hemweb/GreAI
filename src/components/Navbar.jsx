import { AppBar, Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MinimizeIcon from "@mui/icons-material/Minimize";

function Navbar() {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#fff",
          width: "100%",
          boxShadow: "none",
          // position:'fixed',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            width: "100%",
            maxWidth: "950px",
            alignItems: "center",
            justifyContent: "space-between",
            px: [2],
            py: [1],
          }}
        >
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Box
              sx={{
                height: "2rem",
              }}
            >
              <img src="/vite.svg" width={"auto"} height={"100%"} />
            </Box>
            <Typography
              sx={{
                background:
                  "linear-gradient(91.83deg, rgb(0, 174, 237) 0%, rgb(168, 119, 237) 100%) text",
                WebkitTextFillColor: "transparent",
                fontWeight: "700",
              }}
            >
              GreAI
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={1}>
            <IconButton>
              <MinimizeIcon />
            </IconButton>

            <IconButton>
              <MenuIcon />
            </IconButton>
          </Stack>
        </Stack>
      </AppBar>
    </>
  );
}

export default Navbar;
