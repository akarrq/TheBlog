import type { SetStateAction } from 'react';
import { Box, TextField } from '@mui/material';

export default function SearchBar({
	searchValue,
	setSearchValue,
}: {
	searchValue: string;
	setSearchValue: React.Dispatch<SetStateAction<string>>;
}) {
	return (
		<Box component="div" sx={{ mt: 1 }}>
			<TextField
				name="searchValue"
				margin="normal"
				fullWidth
				label="Search posts"
				autoFocus
				value={searchValue}
				onChange={(e) => {
					setSearchValue(e.currentTarget.value);
				}}
			/>
		</Box>
	);
}
