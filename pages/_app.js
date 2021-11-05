import "../styles/globals.css";
import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ChakraProvider resetCSS theme={theme}>
				<Box bg="primary.100" w="100%" p={4} color="white">
					Header space
				</Box>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}

export default MyApp;
