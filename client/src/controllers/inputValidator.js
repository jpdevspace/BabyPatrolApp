
const validateBabyName = str => {

};

export const validateInput = (str, inputName) => {
  switch(inputName) {
    case "babyName": return validateBabyName(str);
    default:
      return;
  }
}