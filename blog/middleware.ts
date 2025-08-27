import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const middleware = (request: NextRequest) => {
  // 默认跳转到home
  // const path = request.nextUrl.pathname
  // if(path === '/') {
  //   return NextResponse.redirect(new URL('/home', request.url))
  // }
}

// export const config = {
//   matcher: ['/']
// }
