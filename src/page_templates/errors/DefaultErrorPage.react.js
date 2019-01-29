// @flow

import * as React from "react";

import Container from "../../components/Container.react";
import Page from "../../components/Page/Page.react";
import Header from "../../components/Header/Header.react";
import Icon from "../../components/Icon/Icon.react";
import Button from "../../components/Button/Button.react";

export type Props = {|
  +title?: string,
  +subtitle?: string,
  +details?: string,
  +action?: string,
|};

function DefaultErrorPage(props: Props): React.Node {
  const _onBackClick = (
    event: SyntheticMouseEvent<HTMLInputElement>
  ): boolean => {
    window.history.back();
    event.preventDefault();
    return true;
  };

  const {
    title = "Error",
    subtitle = "Sorry an unkown error occurred",
    details,
    action = "Go back",
  } = props;
  return (
    <Page className="text-center">
      <Container>
        <Header.H1 className="display-1 text-muted mb-5">{title}</Header.H1>
        <Header.H2>{subtitle}</Header.H2>
        {details && (
          <Header.H4 className="text-muted font-weight-normal mb-7">
            {details}
          </Header.H4>
        )}
        <Button onClick={_onBackClick} className="btn-primary">
          <Icon className="mr-2" name="arrow-left" />
          {action}
        </Button>
      </Container>
    </Page>
  );
}

export default DefaultErrorPage;
