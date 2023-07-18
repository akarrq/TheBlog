import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function Post({ title, body }: { title: string; body: string }) {
	return (
		<Card
			sx={{
				maxWidth: 345,
				marginTop: ['5px', '10px'],
				marginBottom: ['5px', '10px'],
			}}
		>
			<CardMedia
				component="img"
				height="140"
				image="src/assets/european-shorthair-8107433_640.jpg"
				alt="sweet kitten"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{body}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default Post;
