import Tag from "../Badge/Badge";
import TagAddOn from "../Badge/BadgeAddOn";
import TagList from "../Badge/BadgeList";

const CompoundTag = Tag as typeof Tag & {
  AddOn: typeof TagAddOn;
  List: typeof TagList;
};

CompoundTag.AddOn = TagAddOn;
CompoundTag.List = TagList;

export { CompoundTag as default, Tag, TagAddOn, TagList };
