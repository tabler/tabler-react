import * as React from "react";
import cn from "classnames";
import Grid from "../Grid";

import { MouseEvents, FocusEvents, PointerEvents } from "../../types";
// FormEvents not imported due to check on props utilization. Props typing do not use mandatory props.

interface PropsForAll extends MouseEvents, FocusEvents, PointerEvents {
  className?: string;
  step?: number;
  min?: number;
  max?: number;
  value?: number;
  onChange?: (event: React.ChangeEvent<EventTarget>) => any;
  defaultValue?: number;
}

interface ControlledProps extends PropsForAll {
  value: number;
  onChange: (event: React.ChangeEvent<EventTarget>) => any;
}

interface UnControlledProps extends PropsForAll {
  defaultValue: number;
}

type Props = ControlledProps | UnControlledProps;

type State = {
  internalValue: number;
};

class FormRatio extends React.PureComponent<Props, State> {
  state = {
    internalValue: !this.props.onChange ? this.props.defaultValue : 0,
  };

  handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): any => {
    if (this.props.onChange) {
      this.props.onChange(e);
    } else {
      const value = Number(e.target.value);
      this.setState({ internalValue: value });
    }
  };

  render() {
    const {
      className,
      step = 1,
      min = 0,
      max = 0,
      onClick,
      onMouseEnter,
      onMouseLeave,
      onPointerEnter,
      onPointerLeave,
      onFocus,
      onBlur,
    } = this.props;
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
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            value={value}
          />
        </Grid.Col>
        <Grid.Col auto>
          <input
            type="number"
            className="form-control w-8"
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            readOnly
          />
        </Grid.Col>
      </Grid.Row>
    );
  }
}

(FormRatio as any).displayName = "Form.Ratio";

export default FormRatio;
