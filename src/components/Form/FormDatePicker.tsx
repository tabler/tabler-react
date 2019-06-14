import React, { useState } from "react";
import FormSelect, { FormSelectProps } from "./FormSelect";
import FormInputGroup from "./FormInputGroup";

export interface FormDatePickerProps
  extends Pick<FormSelectProps, Exclude<keyof FormSelectProps, "onChange">> {
  defaultDate: Date;
  minYear: number;
  maxYear: number;
  format: string;
  monthLabels: Array<string>;
  onChange?: (value: Date) => void;
}

type ChangeTypes = "mm" | "yyyy" | "dd";

type DateComponents = { [Key in ChangeTypes]: React.ReactNode };

const FormDatePicker = function({
  onChange,
  monthLabels,
  minYear,
  maxYear,
  format,
  className,
}: FormDatePickerProps) {
  const [currentDate, setCurrentDate] = useState<Date>(new Date(Date.now()));

  // Handle date changes
  const _handleOnChange = (type: ChangeTypes, value: number): void => {
    const newDate: Date = new Date(currentDate);

    // Change month
    if (type === "mm") {
      newDate.setMonth(value);
    }

    // Change day
    if (type === "dd") {
      newDate.setDate(value);
    }

    if (type === "yyyy") {
      newDate.setFullYear(value);
    }
    setCurrentDate(currentDate);
    if (onChange) {
      onChange(newDate);
    }
  };

  // Creates an array with numeric values from start to end
  const _range = (start: number, end: number): Array<number> =>
    Array.from({ length: end + 1 - start }, (v, k) => k + start);

  // Renders the months select
  const _renderMonths = () => {
    const onChangeMonths = (e: React.ChangeEvent<HTMLSelectElement>): void =>
      _handleOnChange("mm", Number(e.target.value));

    return (
      <FormSelect onChange={onChangeMonths}>
        {monthLabels.map((name, index) => (
          <option
            key={index}
            value={index}
            selected={currentDate.getUTCMonth() === index}
          >
            {name}
          </option>
        ))}
      </FormSelect>
    );
  };

  // Renders the days select
  const _renderDays = () => {
    const currentMonthDays = new Date(
      currentDate.getUTCFullYear(),
      currentDate.getUTCMonth() + 1,
      0
    ).getDate();
    const daysRange = _range(1, currentMonthDays);
    const currentDay = currentDate.getUTCDate();

    const onChangeDays = (e: React.ChangeEvent<HTMLSelectElement>) =>
      _handleOnChange("dd", Number(e.target.value));

    return (
      <FormSelect onChange={onChangeDays}>
        {daysRange.map(day => (
          <option key={day} value={day} selected={currentDay === day}>
            {day}
          </option>
        ))}
      </FormSelect>
    );
  };

  // renderes the years select
  const _renderYears = () => {
    const yearsRange = _range(minYear, maxYear).reverse();
    const currentYear = currentDate.getUTCFullYear();

    const onChangeYears = (e: React.ChangeEvent<HTMLSelectElement>) =>
      _handleOnChange("yyyy", Number(e.target.value));

    return (
      <FormSelect onChange={onChangeYears}>
        {yearsRange.map(year => (
          <option key={year} value={year} selected={currentYear === year}>
            {year}
          </option>
        ))}
      </FormSelect>
    );
  };

  const formatSplit = format.split("/");
  const dateComponents: DateComponents = {
    mm: _renderMonths(),
    dd: _renderDays(),
    yyyy: _renderYears(),
  };

  return (
    <div className={className}>
      <FormInputGroup>
        {formatSplit.map(
          (type: string): React.ReactNode => dateComponents[type as ChangeTypes]
        )}
      </FormInputGroup>
    </div>
  );
};

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
  format: "mm/dd/yyyy",
  defaultDate: new Date(),
};

export default FormDatePicker;
