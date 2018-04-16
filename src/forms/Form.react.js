// @flow

import * as React from "react";

type Props = {|
  +action: string,
  +children?: React.Node,
  +method: string,
  +title: string
|};

function Form(props: Props): React.Node {
  return (
    <form className="card" action={props.action} method={props.method}>
      <div className="card-body p-6">
        <div className="card-title">{props.title}</div>
        {props.children}
        <div className="form-footer">
          <button type="submit" className="btn btn-primary btn-block">
            Create new account
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
