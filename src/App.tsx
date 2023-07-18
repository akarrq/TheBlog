import { useEffect, useMemo, useState } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Typography, useMediaQuery } from '@mui/material';

import Post from './components/Post';
import SearchBar from './components/SearchBar';
import Sorter from './components/Sorter';
import AppBar from './components/AppBar';
import Skeleton from './components/Skeleton';

import { IApiData, ApiStatus, IPost } from './interface/interface';

function TheBlog() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const [mode, setMode] = useState<'light' | 'dark'>('light');
	const [data, setData] = useState<IApiData>({
		status: ApiStatus.Loading,
		error: null,
		data: null,
	});
	const [searchValue, setSearchValue] = useState<string>('');
	const [posts, setPosts] = useState<IPost[]>([]);
	const [sort, setSort] = useState(false);

	useEffect(() => {
		if (prefersDarkMode) setMode('dark');
		else setMode('light');
	}, [prefersDarkMode]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then((data: IApiData['data']) => {
				setData({ status: ApiStatus.Success, error: null, data });
				setPosts(data!);
			})
			.catch((err: Error) => {
				setData({ status: ApiStatus.Error, data: null, error: err });
			});
	}, []);

	useEffect(() => {
		if (searchValue != '') {
			const filteredPosts = [...data.data!].filter(
				(post) =>
					post.title.includes(searchValue.toLocaleLowerCase()) ||
					post.body.includes(searchValue.toLocaleLowerCase())
			);
			setPosts(filteredPosts);
		} else {
			setPosts(data.data!);
		}
	}, [data.data, posts, searchValue]);

	useEffect(() => {
		if (sort) {
			const sortedPosts = [...posts].sort(
				(a, b) => b.title.length - a.title.length
			);
			setPosts(sortedPosts);
		} else {
			const sortedPosts = [...posts].sort((a, b) => a.id - b.id);
			setPosts(sortedPosts);
		}
	}, [posts, sort]);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar mode={mode} setMode={setMode} theme={theme} />
			<Container maxWidth="sm">
				<SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
				<Sorter sort={sort} setSort={setSort} />
			</Container>
			<Container
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-evenly',
					paddingTop: '15px',
					paddingBottom: '15px',
				}}
			>
				{(data.status === ApiStatus.Success &&
					posts.map((post: IPost) => (
						<Post key={post.id} title={post.title} body={post.body} />
					))) ||
					(data.status === ApiStatus.Loading && <Skeleton items={3} />) ||
					(data.status === ApiStatus.Error && (
						<Typography>Oh no! Somethings went wrong :(</Typography>
					))}
			</Container>
		</ThemeProvider>
	);
}

export default TheBlog;
