const strings = {
  title: "Login to your Account",
  buttonText: "Login",
  emailLabel: "Email Address",
  emailPlaceholder: "Enter email",
  passwordLabel: "Password",
  passwordPlaceholder: "Password",
};

export default strings;

type strings = keyof typeof strings;

export type stringTypes = { [key in strings]: string };
