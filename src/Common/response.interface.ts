export default interface IResponse {
    id: string;
    message: string;
    body?: {
        data : Record<string , never>
    };
}