// @flow

import * as React from "react";

type Props = {|
  +location: Object,
  +callback: (location: { pathname: string }) => void,
|};
type State = {||};

class RouterContextProvider extends React.Component<Props, State> {
  componentDidMount(): void {
    const { callback, location } = this.props;
    callback(location);
  }

  render(): React.Node {
    return null;
  }
}

export default RouterContextProvider;
