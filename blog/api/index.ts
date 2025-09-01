const BASE_URL = 'http://localhost:3000';

export const request = async (
  url: string,
  options: RequestInit = {},
): Promise<T> => {
  const res = await fetch(`${BASE_URL}${url}`, { ...options });
};
