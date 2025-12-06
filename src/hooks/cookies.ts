import Cookie from "js-cookie"

export const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null;
  }
  return null;
};

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

export const setAccessToken = (token: string) => {
  // Cookie.set("accessToken", token, {expires: 15 / (24 * 60)}) // 15분 뒤 만료
  Cookie.set("accessToken", token, {expires: 15 / (24 * 60)}) // 15분 뒤 만료
}

export const setRefreshToken = (token: string) => {
  Cookie.set("refreshToken", token, {expires: 7}) // 7일 뒤 만료
}

export const setEmail = (email: string) => {
  Cookie.set("email", email, {expires: 7}) // 7일 뒤 만료
}

export const setUserId = (id: string) => {
  Cookie.set("userId", id, {expires: 7}) // 7일 뒤 만료
}