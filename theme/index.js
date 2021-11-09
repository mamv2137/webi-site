import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: "pink.100",
				color: "purple.800",
			},
			// styles for the `a`
			a: {
				color: "teal.700",
				_hover: {
					textDecoration: "underline",
				},
			},
		},
	},
	colors,
});

export default theme;
