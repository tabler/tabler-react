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
  hasChanged: boolean,
|};

class FormRatio extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      internalValue: props.defaultValue || props.value || 0,
      hasChanged: false,
    };
  }
  handleOnChange = (e: SyntheticInputEvent<EventTarget>) => {
    const { onChange = false } = this.props;
    const value: number = Number(e.target.value);
    if (onChange) {
      onChange(e);
      this.setState({ hasChanged: true });
    } else {
      this.setState({ internalValue: value, hasChanged: true });
    }
  };
  render() {
    const {
      className,
      step = 1,
      min = 0,
      max = 0,
      value,
      onChange,
    } = this.props;
    const { internalValue, hasChanged } = this.state;
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
            value={
              !hasChanged ? internalValue : onChange ? value : internalValue
            }
          />
        </Grid.Col>
        <Grid.Col auto>
          <input
            type="number"
            className="form-control w-8"
            value={
              !hasChanged ? internalValue : onChange ? value : internalValue
            }
            readOnly
          />
        </Grid.Col>
      </Grid.Row>
    );
  }
}

export default FormRatio;
