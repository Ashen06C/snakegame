import { Providers } from "./components/ui/provider";
import { Provider } from "react-redux";
import store from "./store";
import { Container, Heading } from "@chakra-ui/react";
import ScoreCard from "./components/ScoreCard";
import CanvasBoard from "./components/CanvasBoard";

function App() {
  return (
    <Provider store={store}>
      <Providers>
        <Container maxW="container.lg" centerContent>
          <Heading as="h1" size="xl">
            Snake Game
          </Heading>
          <ScoreCard />
          <CanvasBoard height={600} width={1000} />
        </Container>
      </Providers>
    </Provider>
  );
}

export default App;
