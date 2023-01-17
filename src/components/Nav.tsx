import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<AppBar position="static" style={{ background: "white" }}>
			<Toolbar>
				<Typography variant="h1" fontSize={"2rem"} flexGrow={1}>
					<Link to="">Weather Ups</Link>
				</Typography>
				<Stack direction={"row"} spacing={2}>
					<Button variant="outlined" color="info">
						<Link to="about">About</Link>
					</Button>
					<IconButton>
						<DarkModeIcon />
					</IconButton>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default Nav;
