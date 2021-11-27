import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: "white.100",
				color: "purple.800",
			},
		},
	},
	colors,
});

export default theme;
