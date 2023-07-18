import { ToggleButton, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Sorter({
	sort,
	setSort,
}: {
	sort: boolean;
	setSort: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<ToggleButton
			value="most interesting"
			selected={sort}
			aria-pressed={sort}
			onChange={() => {
				setSort(!sort);
			}}
		>
			<Tooltip title="Show most interesting first">
				<FavoriteIcon />
			</Tooltip>
		</ToggleButton>
	);
}
