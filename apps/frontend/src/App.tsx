import { Box, Container, VStack } from "@chakra-ui/react";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Box h="full" bgColor="#f7f7f7">
      <VStack h="100vh" align="stretch" gap="0">
        <Navbar />
        <VStack align="stretch" flex="1" overflowY={"auto"} py={4}>
          <Container maxW="container.lg" h="full">
            <VStack align="stretch">
              <Home />
            </VStack>
          </Container>
        </VStack>
      </VStack>
    </Box>
  );
}

export default App;
