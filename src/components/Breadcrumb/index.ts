import Breadcrumb from "./Breadcrumb";
import BreadcrumbItem from "./BreadcrumbItem";

const CompoundBreadcrumb = Breadcrumb as typeof Breadcrumb & {
  Item: typeof BreadcrumbItem;
};

CompoundBreadcrumb.Item = BreadcrumbItem;

export { CompoundBreadcrumb as default, Breadcrumb, BreadcrumbItem };
