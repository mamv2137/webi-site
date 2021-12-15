import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ChakraProvider resetCSS theme={theme}>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</ChakraProvider>
		</>
	);
}

export default MyApp;
