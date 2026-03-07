export function createApiResponse<T>(data: T): {
  success: boolean;
  data: T;
  timestamp: Date;
} {
  return {
    success: true,
    data: data,
    timestamp: new Date()
  };
}