import { getLocal } from '@/hooks/use-local';

export interface RequestOptions extends RequestInit {
  params?: Record<string, any>; // Get参数
  token?: string; // token
  noCache?: boolean; // 服务端组件可选缓存策略
}

export async function request<T = any>(
  url: string,
  options: RequestOptions = {},
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const {
    params,
    token = getLocal('token'),
    headers,
    noCache,
    ...rest
  } = options;

  // 拼接Get参数
  let requestUrl = `${baseUrl}${url}`;
  if (params && Object.keys(params).length > 0) {
    const query = new URLSearchParams(params as any).toString();
    requestUrl += (url.includes('?') ? '&' : '?') + query;
  }

  // 默认headers
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...headers,
  };

  // fetch缓存配置
  const fetchOptions: RequestInit = {
    headers: defaultHeaders,
    ...rest,

    // 服务端组件可用cache参数
    ...(typeof window === 'undefined' && noCache ? { cache: 'no-store' } : {}),
  };

  const response: any = await fetch(requestUrl, fetchOptions);

  if (!response.ok) {
    let errorBody;
    try {
      errorBody = await response.json();
    } catch {
      errorBody = await response.text();
    }
    throw errorBody; // 只有状态码不是 2xx 才 throw
  }

  // 自动解析json
  const data: T = await response.json().catch(() => null);
  return data;
}
