// @flow

import * as React from "react";
import cn from "classnames";
import { Grid } from "../";

type Props = {|
  +className?: string,
  +step?: number,
  +min?: number,
  +max?: number,
  +defaultValue?: number,
  +value?: number,
  +onChange?: (SyntheticInputEvent<EventTarget>) => mixed,
|};

type State = {|
  internalValue: number,
|};

class FormRatio extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    if (props.defaultValue && (props.value || props.onChange)) {
      console.error(
        `Warning Form.Ratio: You should not use defaultValue with value
         and onChange if you want to control the input yourself`
      );
    }

    this.state = {
      internalValue: props.defaultValue || props.value || 0,
    };
  }

  handleOnChange = (e: SyntheticInputEvent<EventTarget>) => {
    const { defaultValue, onChange } = this.props;
    const value = Number(e.target.value);
    if (typeof defaultValue !== "number") {
      if (onChange) onChange(e);
    } else {
      this.setState({ internalValue: value });
    }
  };

  render(): React.Node {
    const {
      className,
      step = 1,
      min = 0,
      max = 0,
      defaultValue,
      value,
    } = this.props;
    const { internalValue } = this.state;
    const classes = cn(className);
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
            value={typeof defaultValue === "number" ? internalValue : value}
          />
        </Grid.Col>
        <Grid.Col auto>
          <input
            type="number"
            className="form-control w-8"
            value={typeof defaultValue === "number" ? internalValue : value}
            readOnly
          />
        </Grid.Col>
      </Grid.Row>
    );
  }
}

export default FormRatio;
