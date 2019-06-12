import Badge from "./Badge";
import BadgeAddOn from "./BadgeAddOn";
import BadgeList from "./BadgeList";

const CompoundBadge = Badge as typeof Badge & {
  AddOn: typeof BadgeAddOn;
  List: typeof BadgeList;
};

CompoundBadge.AddOn = BadgeAddOn;
CompoundBadge.List = BadgeList;

export { CompoundBadge as default, Badge, BadgeAddOn, BadgeList };
