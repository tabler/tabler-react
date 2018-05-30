//@flow
const strings = {
  title: "Forgot Password",
  buttonText: "Request Password Change",
  emailLabel: "Email Address",
  emailPlaceholder: "Enter email",
  instructions:
    "Enter your email address and your password will be reset and emailed to you.",
};

export default strings;

export type stringTypes = { [$Keys<typeof strings>]: string };
