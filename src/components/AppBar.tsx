import { useMemo } from 'react';

import {
	AppBar as Bar,
	IconButton,
	Theme,
	Toolbar,
	Tooltip,
	Typography,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function AppBar({
	mode,
	setMode,
	theme,
}: {
	mode: 'light' | 'dark';
	setMode: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
	theme: Theme;
}) {
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[setMode]
	);

	return (
		<Bar position="relative">
			<Toolbar>
				<Typography
					variant="h6"
					color="inherit"
					noWrap
					component="div"
					sx={{ flexGrow: 1 }}
				>
					TheBlog
				</Typography>
				<Tooltip
					title={`Change to ${mode === 'light' ? 'dark' : 'light'} mode`}
				>
					<IconButton
						sx={{ ml: 1 }}
						onClick={colorMode.toggleColorMode}
						color="inherit"
					>
						{theme.palette.mode === 'dark' ? (
							<Brightness7Icon />
						) : (
							<Brightness4Icon />
						)}
					</IconButton>
				</Tooltip>
			</Toolbar>
		</Bar>
	);
}
