export const validateMinLength = (str, minLength) => str && str.length >= minLength;

export const pwdMatch = (pwdA, pwdB) => {
  return (
    pwdA            &&
    pwdA.length > 0 &&
    pwdB            &&
    pwdB.length > 0 &&
    pwdA === pwdB
  );
}
