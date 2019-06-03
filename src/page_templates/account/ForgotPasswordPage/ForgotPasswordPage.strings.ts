const strings = {
  title: "Forgot Password",
  buttonText: "Request Password Change",
  emailLabel: "Email Address",
  emailPlaceholder: "Enter email",
  instructions:
    "Enter your email address and your password will be reset and emailed to you.",
};

export default strings;

type strings = keyof typeof strings;

export type stringTypes = { [key in strings]: string };
