import Cookie from "js-cookie"

export const getCookie = (name: string): string | null => {
  return Cookie.get(name) ?? null
};

export const deleteCookie = (name: string) => {
  Cookie.remove(name);
};

export const setAccessToken = (token: string) => {
  // Cookie.set("accessToken", token, {expires: 15 / (24 * 60)}) // 15분 뒤 만료
  Cookie.set("accessToken", token, {expires: 0.5 / (24 * 60), secure: true, sameSite: 'strict'}) // 15분 뒤 만료
}

export const setRefreshToken = (token: string) => {
  Cookie.set("refreshToken", token, {expires: 7, secure: true, sameSite: 'strict'}) // 7일 뒤 만료
}

export const setEmail = (email: string) => {
  Cookie.set("email", email, {expires: 7, secure: true, sameSite: 'strict'}) // 7일 뒤 만료
}

export const setUserId = (id: string) => {
  Cookie.set("userId", id, {expires: 7, secure: true, sameSite: 'strict'}) // 7일 뒤 만료
}