// Function to validate email format
export function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Function to validate password format
export function validatePassword(password) {
  const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=\S+$).{6,}$/;
  return passwordPattern.test(password);
}

// Function to validate minimum field length
export function validateField(value) {
  if (!value || value.trim().length < 6) {
    return `Field must contain at least 6 characters.`;
  }
  return null;
}

