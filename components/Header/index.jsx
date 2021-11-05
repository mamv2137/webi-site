import React from "react";
import { Box } from "@chakra-ui/react";

function Header({ children }) {
	return (
		<Box
			bg="secondary.100"
			w="100%"
			p={4}
			color="tertiary.800"
			boxShadow="lg"
		>
			{children}
		</Box>
	);
}

export default Header;
