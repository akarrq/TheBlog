import { Card, CardContent, Skeleton as SkeletonItem } from '@mui/material';

export default function Skeleton({ items = 1 }) {
	const skeletons = Array(items).fill(null);
	return (
		<>
			{skeletons.map((_skeleton, i) => (
				<Card
					key={i}
					sx={{
						width: 345,
						marginTop: ['5px', '10px'],
						marginBottom: ['5px', '10px'],
					}}
				>
					<SkeletonItem variant="rectangular" height={140} />
					<CardContent>
						<SkeletonItem sx={{ fontSize: '1.5rem' }} />
						<SkeletonItem />
						<SkeletonItem />
					</CardContent>
				</Card>
			))}
		</>
	);
}
