import Header from "./components/Header";
import Form from "./components/Form";
import { Box } from "@mui/material";

const App = () => {
  return (
    <>
      <Header />
      <Box sx={{ py: 5, bgcolor: "lightgreen" }}>
        <Form />
      </Box>
    </>
  );
};

export default App;
