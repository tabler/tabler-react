//@flow
const strings = {
  title: "My Profile",
  nameLabel: "Name",
  namePlaceholder: "Your name",
  bioLabel: "Bio",
  bioPlaceholder: "Say something about yourself",
  emailLabel: "Email",
  emailPlaceholder: "your-email@example.com",
  passwordLabel: "Password",
  passwordPlaceholder: "password",
  buttonText: "Save",
};

export default strings;

export type stringTypes = { [$Keys<typeof strings>]: string };
