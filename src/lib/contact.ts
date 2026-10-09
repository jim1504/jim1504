// The address never appears as plain text in the HTML or the JavaScript bundle:
// it is stored reversed and base64-encoded, and decoded only when a visitor
// clicks to email or reveal it. That defeats address harvesters that scan page
// source. It is obfuscation, not encryption: a browser has to be able to read
// the address in order to open the mail app.
const ENCODED = 'bW9jLmxpYW1nQDQwNTFtYWlsbGl3Lm1pag=='

export const decodeEmail = () => [...atob(ENCODED)].reverse().join('')

export function requestCv() {
  window.location.href = `mailto:${decodeEmail()}?subject=${encodeURIComponent('CV request')}`
}
