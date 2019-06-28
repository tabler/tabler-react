import Timeline from "./Timeline";
import TimelineItemBadge from "./TimelineItemBadge";
import TimelineItem from "./TimelineItem";
import TimelineItemDescription from "./TimelineItemDescription";
import TimelineItemTime from "./TimelineItemTime";
import TimelineItemTitle from "./TimelineItemTitle";
import TimelineItemContent from "./TimelineItemContent";
import TimelineItemIcon from "./TimelineItemIcon";

const CompoundTimeline = Timeline as typeof Timeline & {
  Item: typeof TimelineItem;
  ItemBadge: typeof TimelineItemBadge;
  ItemDescription: typeof TimelineItemDescription;
  ItemTime: typeof TimelineItemTime;
  ItemTitle: typeof TimelineItemTitle;
  ItemContent: typeof TimelineItemContent;
  ItemIcon: typeof TimelineItemIcon;
};

CompoundTimeline.Item = TimelineItem;
CompoundTimeline.ItemBadge = TimelineItemBadge;
CompoundTimeline.ItemDescription = TimelineItemDescription;
CompoundTimeline.ItemTime = TimelineItemTime;
CompoundTimeline.ItemTitle = TimelineItemTitle;
CompoundTimeline.ItemContent = TimelineItemContent;
CompoundTimeline.ItemIcon = TimelineItemIcon;

export { CompoundTimeline as default };
