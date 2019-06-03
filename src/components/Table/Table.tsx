import * as React from "react";
import cn from "classnames";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import TableCol from "./TableCol";
import TableColHeader from "./TableColHeader";

type BodyItem = {
  key: string | number;
  item: Array<{
    content?: React.ReactNode;
    className?: string;
    alignContent?: "left" | "center" | "right";
  }>;
};

type Props = {
  children?: React.ReactNode;
  className?: string;
  /**
   * Should this Table be optimized to contain Cards
   */
  cards?: boolean;
  /**
   * Give the table striped rows
   */
  striped?: boolean;
  /**
   * Make the table responsive
   */
  responsive?: boolean;
  highlightRowOnHover?: boolean;
  hasOutline?: boolean;
  verticalAlign?: "center";
  headerItems?: Array<{ content?: React.ReactNode; className?: string }>;
  bodyItems?: Array<BodyItem>;
};

function Table({
  className,
  children,
  cards,
  striped,
  responsive,
  highlightRowOnHover,
  hasOutline,
  verticalAlign,
  ...props
}: Props) {
  const classes = cn(
    "table",
    {
      "card-table": cards,
      "table-striped": striped,
      "table-hover": highlightRowOnHover,
      "table-outline": hasOutline,
      "table-vcenter": verticalAlign === "center",
    },
    className
  );

  const header = props.headerItems && (
    <Table.Header>
      <Table.Row>
        {props.headerItems.map((item, i) => (
          <Table.ColHeader key={i} className={item.className}>
            {item.content}
          </Table.ColHeader>
        ))}
      </Table.Row>
    </Table.Header>
  );

  const body = props.bodyItems && (
    <Table.Body>
      {props.bodyItems.map((row, i) => (
        <Table.Row key={row.key}>
          {row.item.map((col, i) => (
            <Table.Col
              className={col.className}
              alignContent={col.alignContent}
              key={i}
            >
              {col.content}
            </Table.Col>
          ))}
        </Table.Row>
      ))}
    </Table.Body>
  );

  const table = (
    <table className={classes} {...props}>
      {header}
      {body || children}
    </table>
  );

  return !responsive ? table : <div className="table-responsive">{table}</div>;
}

Table.defaultProps = {
  cards: false,
  striped: false,
  responsive: false,
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Col = TableCol;
Table.ColHeader = TableColHeader;

/** @component */
export default Table;
