import Card from "./Card";
import CardBody from "./CardBody";
import CardAlert from "./CardAlert";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import CardMap from "./CardMap";
import CardOptions from "./CardOptions";
import CardOptionsItem from "./CardOptionsItem";
import CardStatus from "./CardStatus";
import CardTitle from "./CardTitle";

const CompoundCard = Card as typeof Card & {
  Alert: typeof CardAlert;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
  Header: typeof CardHeader;
  Map: typeof CardMap;
  Options: typeof CardOptions;
  OptionsItem: typeof CardOptionsItem;
  Status: typeof CardStatus;
  Title: typeof CardTitle;
};

CompoundCard.Alert = CardAlert;
CompoundCard.Body = CardBody;
CompoundCard.Footer = CardFooter;
CompoundCard.Header = CardHeader;
CompoundCard.Map = CardMap;
CompoundCard.Options = CardOptions;
CompoundCard.OptionsItem = CardOptionsItem;
CompoundCard.Status = CardStatus;
CompoundCard.Title = CardTitle;

export { CompoundCard as default };
