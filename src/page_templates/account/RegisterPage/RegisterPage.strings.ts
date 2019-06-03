const strings = {
  title: "Create New Account",
  buttonText: "Create Account",
  nameLabel: "Name",
  namePlaceholder: "Enter name",
  emailLabel: "Email Address",
  emailPlaceholder: "Enter email",
  passwordLabel: "Password",
  passwordPlaceholder: "Password",
  termsLabel: "Agree to the terms and policy",
};

export default strings;

type strings = keyof typeof strings;

export type stringTypes = { [key in strings]: string };
