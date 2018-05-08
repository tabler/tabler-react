// @flow

import * as React from "react";
import cn from "classnames";
import "./Table.css";
import TableHeader from "./TableHeader.react";
import TableBody from "./TableBody.react";
import TableRow from "./TableRow.react";
import TableCol from "./TableCol.react";
import TableColHeader from "./TableColHeader.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +cards?: boolean,
  +striped?: boolean,
  +responsive?: boolean,
  +highlightRowOnHover?: boolean,
  +hasOutline?: boolean,
  +verticalAlign?: "center",
  +headerItems?: Array<{ +content?: React.Node, +className?: string }>,
  +bodyItems?: Array<
    Array<{
      +content?: React.Node,
      +className?: string,
      +alignContent?: "left" | "center" | "right",
    }>
  >,
|};

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
}: Props): React.Node {
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
        <Table.Row>
          {row.map(col => (
            <Table.Col
              className={col.className}
              alignContent={col.alignContent}
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

  return !responsive ? (
    table
  ) : (
    <div className="Table.table-responsive">{table}</div>
  );
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
