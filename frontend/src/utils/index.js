export function redirectToMail(email, subject, body) {
  window.location.href = `mailto:${email}`;
}