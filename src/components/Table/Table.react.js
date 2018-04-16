// @flow

import * as React from "react";
import cn from "classnames";
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
|};

function Table({
  className,
  children,
  cards,
  striped,
  responsive,
  ...props
}: Props): React.Node {
  const classes = cn(
    "table",
    { "card-table": !!cards, "table-striped": !!striped },
    className
  );
  return !responsive ? (
    <table className={classes} {...props}>
      {children}
    </table>
  ) : (
    <div className="table-responsive">
      <table className={classes} {...props}>
        {children}
      </table>
    </div>
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

export default Table;
