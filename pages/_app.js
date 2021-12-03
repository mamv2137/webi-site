import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ChakraProvider resetCSS theme={theme}>
				<Header>Header space</Header>
				<Component {...pageProps} />
				<Footer />
			</ChakraProvider>
		</>
	);
}

export default MyApp;
