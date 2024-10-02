import { Search } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const InputTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#7A4FE8",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#7A4FE8",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
      borderRadius: "1rem",
      boxShadow: "5px 10px 10px rgba(0,0,0,0.05) ",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00aeed",
    },
  },
});
function SearchInput() {
  return (
    <Stack
      direction={"column"}
      gap={1}
      sx={{
        mt: [2, 3],
        px:[2],
        width: "100%",
        maxWidth: "950px",
      }}
    >
      <Typography>
        <span style={{ fontWeight: "bold" }}>Ask me</span> - e.g: GreAI/ What
        the best way to looks like symphatic?
      </Typography>
      <InputTextField
        sx={{
          width: "100%",
          borderRadius: "1rem",
          backgroundColor: "#fff",
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  zIndex: 1,
                }}
              >
                <Typography sx={{ color: "#a5a5a5" }}>GreAI/</Typography>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  zIndex: 1,
                }}
              >
                <IconButton color="black">
                  <Search color="black" />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Stack>
  );
}

export default SearchInput;
