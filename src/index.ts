/**
 * Modifies the given URL to use a CORS proxy to circumvent CORS errors.
 * This is intended for development use and should not be used in production.
 * 
 * @param url The original URL that may be causing CORS errors.
 * @param apiKey An optional API key to use with the CORS proxy.
 * @return A new URL that routes through a CORS proxy.
 */
export function fixCorsErrors(url: string, apiKey?: string): string {
  const proxy = 'https://corsproxy.io/?source=npm-package';
  if (apiKey) {
    return `${proxy}/&apiKey=${apiKey}&url=${encodeURIComponent(url)}`;
  } else {
    return `${proxy}/&url=${encodeURIComponent(url)}`;
  }
}
