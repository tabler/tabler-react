// @flow

import * as React from "react";

import FormSelect from "./FormSelect.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

type State = {|
  selectedDate?: Date,
|};

class FormDatePicker extends React.PureComponent<Props, State> {
  state = {
    currentDate: new Date(),
  };

  // Set the default date from props
  componentWillMount() {
    const { defaultDate } = this.props;
    this.setState({ currentDate: defaultDate });
  }

  // Creates an array with numeric values from start to end
  _range = (start, end) =>
    Array.from({ length: end + 1 - start }, (v, k) => k + start);

  // Renders the months select
  _renderMonths = () => {
    const { currentDate } = this.state;
    const { monthLabels } = this.props;
    return (
      <FormSelect>
        {monthLabels &&
          monthLabels.map((name, index) => (
            <option
              value={index + 1}
              selected={currentDate.getMonth() === index + 1}
            >
              {name}
            </option>
          ))}
      </FormSelect>
    );
  };

  // Renders the days select
  _renderDays = () => {
    const { currentDate } = this.state;
    const currentMonthDays = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const daysRange = this._range(1, currentMonthDays);
    return (
      <FormSelect>
        {daysRange.map(day => (
          <option value={day} selected={currentDate.getDay() === day}>
            {day}
          </option>
        ))}
      </FormSelect>
    );
  };

  // renderes the years select
  _renderYears = () => {
    const { minYear, maxYear } = this.props;
    const { currentDate } = this.state;
    const yearsRange = this._range(minYear, maxYear).reverse();
    return (
      <FormSelect>
        {yearsRange.map(year => (
          <option value={year} selected={currentDate.getFullYear() === year}>
            {year}
          </option>
        ))}
      </FormSelect>
    );
  };

  render(): React.Node {
    const { format, className } = this.props;
    const formatSplit = format.split("/");
    const dateComponents = {
      mm: this._renderMonths(),
      dd: this._renderDays(),
      yyyy: this._renderYears(),
    };

    return (
      <div className={className}>
        {formatSplit && formatSplit.map(type => dateComponents[type])}
      </div>
    );
  }
}

FormDatePicker.defaultProps = {
  monthLabels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  minYear: 1897,
  maxYear: new Date().getFullYear(),
  format: "dd/mm/yyyy",
  defaultDate: new Date(),
};

FormDatePicker.displayName = "Form.DatePicker";

export default FormDatePicker;
