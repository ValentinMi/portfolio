import React from "react";
import Drawer from "./components/Drawer";
import Router from "./Router";
import { Flex, Box } from "@chakra-ui/core";
import { getRemoteImgSrc } from "./utils/getRemoteImgSrc";

function App() {
  return (
    <div className="App">
      <Flex justify="space-between">
        <Drawer />
        <Box
          w="100%"
          style={{
            backgroundImage: `url(${getRemoteImgSrc(
              "/uploads/bg_f4cb58a012.jpg"
            )})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Router />
        </Box>
      </Flex>
    </div>
  );
}

export default App;
