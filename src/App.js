import React from "react";
import Drawer from "./components/Drawer";
import Router from "./Router";
import { Flex, Box } from "@chakra-ui/core";

function App() {
  return (
    <div className="App">
      <Flex justify="space-between">
        <Drawer />
        <Box w="100%">
          <Router />
        </Box>
      </Flex>
    </div>
  );
}

export default App;
