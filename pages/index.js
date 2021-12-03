import { Box } from "@chakra-ui/layout";
import Introduction from "../components/Introduction";
import { Container } from '@chakra-ui/react'

export default function Home(){
  return(
    <Container h="100vh" display="flex" alignItems="center" justifyContent="center">
        <Introduction />
    </Container>
  );
}
