import Alert from "./Alert";
import AlertLink from "./AlertLink";

const CompoundAlert = Alert as typeof Alert & {
  Link: typeof AlertLink;
};

CompoundAlert.Link = AlertLink;

export { CompoundAlert as default, Alert, AlertLink };
