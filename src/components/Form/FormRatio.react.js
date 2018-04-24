// @flow

import * as React from "react";
import cn from "classnames";
import { Grid } from "../";

type PropsForAll = {|
  +className?: string,
  +step?: number,
  +min?: number,
  +max?: number,
|};

type ControlledProps = {|
  ...PropsForAll,
  +value: number,
  +onChange: (SyntheticInputEvent<EventTarget>) => mixed,
|};

type UnControlledProps = {|
  ...PropsForAll,
  +defaultValue: number,
|};

type Props = ControlledProps | UnControlledProps;

type State = {|
  internalValue: number,
|};

class FormRatio extends React.PureComponent<Props, State> {
  state = {
    internalValue: !this.props.onChange ? this.props.defaultValue : 0,
  };

  handleOnChange = (e: SyntheticInputEvent<EventTarget>): mixed => {
    if (this.props.onChange) {
      this.props.onChange(e);
    } else {
      const value = Number(e.target.value);
      this.setState({ internalValue: value });
    }
  };

  render(): React.Node {
    const { className, step = 1, min = 0, max = 0 } = this.props;
    const classes = cn(className);

    const value: number = this.props.onChange
      ? this.props.value
      : this.state.internalValue;

    return (
      <Grid.Row className={classes} alignItems="center">
        <Grid.Col>
          <input
            type="range"
            className="form-control custom-range"
            step={step}
            min={min}
            max={max}
            onChange={this.handleOnChange}
            value={value}
          />
        </Grid.Col>
        <Grid.Col auto>
          <input
            type="number"
            className="form-control w-8"
            value={value}
            readOnly
          />
        </Grid.Col>
      </Grid.Row>
    );
  }
}

FormRatio.displayName = "Form.Ratio";

export default FormRatio;
