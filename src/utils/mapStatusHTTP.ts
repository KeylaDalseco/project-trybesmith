export default function mapStatusHTTP(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    SUCCESSFUL: 200,
    IS_REQUIRED: 400,
    CREATED: 201,
  };
  return statusHTTPMap[status] ?? 500;
}