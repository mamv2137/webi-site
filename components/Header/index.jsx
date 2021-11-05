import React from "react";
import { Box, Link } from "@chakra-ui/react";
import { BsDiscord, BsTwitter } from "react-icons/bs";

function Header(props) {
	return (
		<>
			<Box
				bg="secondary.100"
				w="100%"
				p={4}
				color="tertiary.800"
				boxShadow="lg"
				display="flex"
				justifyContent="space-between"
			>
				Genis Logo
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="baseline"
				>
					<Link href="/" px={3}>
						Home
					</Link>
					<Link href="/about" px={3}>
						About
					</Link>
					<Link href="/roadmap" px={3}>
						Roadmap
					</Link>
				</Box>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="baseline"
				>
					Connect with wallet placeholder
					<Box display="flex" ml={6}>
						<Link px={2}>
							<BsDiscord />
						</Link>
						<Link px={2}>
							<BsTwitter />
						</Link>
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default Header;
