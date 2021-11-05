import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ChakraProvider resetCSS theme={theme}>
				<Header>Header space</Header>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}

export default MyApp;
