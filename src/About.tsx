import { Box, Typography, Button, Container, Link, Stack } from "@mui/material";

const About = () => {
	return (
		<Container maxWidth="md">
			<Box mt={2}>
				<Typography variant="h3" component={"h2"}>
					Resources
				</Typography>
				<Typography variant="subtitle1" component="h3">
					Open Meteo API
				</Typography>
				<Link href="https://open-meteo.com/en/docs" target="_blank">
					https://open-meteo.com/en/docs
				</Link>
			</Box>
			<Box mt={2}>
				<Typography variant="h3" component={"h2"}>
					About this App
				</Typography>
				<Typography variant="body1">
					This app is completely built with React and Tailwind CSS. I took
					inspiration from{" "}
					<Link href="https://weatherups.netfily.app" target="_blank">
						weatherups.netfily.app
					</Link>{" "}
					.
					<br />
					You can grab the source code on{" "}
					<Link
						href="https://github.com/bhendi-boi/weather-app-mui"
						target="_blank"
					>
						github
					</Link>{" "}
					.
				</Typography>
			</Box>
			<Box mt={2}>
				<Typography variant="h3" component={"h2"}>
					About Me
				</Typography>
				<Typography variant="body1">
					I am Jyothikrishna. I am a sophomore from IIITDM, Kancheepuram. You
					can contact me through the following socials or by visiting my{" "}
					<Link href="https://bhendi-boi.github.io/portfolio" target="_blank">
						portfolio
					</Link>{" "}
					website.
					<Stack direction="row" gap={2} justifyContent="space-around" mt={1}>
						<Link href="https://bhendi-boi.github.io/portfolio" target="_blank">
							Github
						</Link>{" "}
						<Link href="https://bhendi-boi.github.io/portfolio" target="_blank">
							LinkedIn
						</Link>{" "}
						<Link href="mailto:bhendiisgreen@gmai.com" target="_blank">
							Gmail
						</Link>{" "}
						<Link href="https://dev.to/bhendi" target="_blank">
							Dev.to
						</Link>{" "}
					</Stack>
				</Typography>
			</Box>
		</Container>
	);
};

export default About;
