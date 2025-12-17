export function getCookie(name: string): string | null {
    if (typeof document === "undefined") return null;
  
    const cookies = document.cookie.split("; ");
  
    const found = cookies.find((row) => row.startsWith(`${name}=`));
    if (!found) return null;
  
    const value = found.split("=")[1];
    return decodeURIComponent(value);
  }
  