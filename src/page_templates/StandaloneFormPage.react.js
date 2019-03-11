// @flow

import * as React from "react";

type Props = {|
  +children?: React.Node,
  +imageURL?: string,
|};

function StandaloneFormPage(props: Props): React.Node {
  return (
    <div className="page">
      <div className="page-single">
        <div className="container">
          <div className="row">
            <div className="col col-login mx-auto">
              <div className="text-center mb-6">
                <img src={props.imageURL} className="h-6" alt="logo" />
              </div>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StandaloneFormPage;
