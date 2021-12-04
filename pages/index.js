import Introduction from "../components/Introduction";
import { Container } from '@chakra-ui/react'

export default function Home(){
  return(
    <Container display="flex" alignItems="center" justifyContent="center">
        <Introduction />
    </Container>
  );
}
