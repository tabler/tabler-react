import * as React from "react";

type Props = {
  children?: React.ReactNode;
  imageURL?: string;
};

function StandaloneFormPage(props: Props) {
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
