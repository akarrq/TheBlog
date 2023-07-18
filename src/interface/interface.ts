export enum ApiStatus {
	Loading,
	Success,
	Error,
}

export interface IPost {
	id: number;
	title: string;
	body: string;
}

export interface IApiData {
	status: ApiStatus;
	error: Error | null;
	data: IPost[] | null;
}
