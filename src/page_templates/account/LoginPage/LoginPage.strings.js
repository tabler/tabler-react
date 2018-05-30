//@flow
const strings = {
  title: "Login to your Account",
  buttonText: "Login",
  emailLabel: "Email Address",
  emailPlaceholder: "Enter email",
  passwordLabel: "Password",
  passwordPlaceholder: "Password",
};

export default strings;

export type stringTypes = { [$Keys<typeof strings>]: string };
