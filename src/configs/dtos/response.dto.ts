export interface ResponseDTO<T> {
	code: number;
	success: boolean;
	message: string;
	data?: T;
}