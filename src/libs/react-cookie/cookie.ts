import { Cookies } from "react-cookie";

const cookies = new Cookies();

const setCookie = (name: string, value: string, options: {}) => {
  return cookies.set(name, value, { ...options });
};

const getCookie = (name: string) => {
  return cookies.get(name);
};

const removeCookie = (name: string) => {
  return cookies.remove(name);
};

export { setCookie, getCookie, removeCookie };
