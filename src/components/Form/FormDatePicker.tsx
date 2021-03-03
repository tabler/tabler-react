import React, { useState, useEffect } from "react";
import FormSelect, { FormSelectProps } from "./FormSelect";
import FormInputGroup from "./FormInputGroup";
import El from "../El/El";
import { TablerComponentProps } from "../../helpers/createTablerElement";

export interface FormDatePickerProps
  extends Omit<TablerComponentProps, "onChange"> {
  defaultDate: Date;
  minYear: number;
  maxYear: number;
  format: string;
  monthLabels: Array<string>;
  onChange?: (value: Date) => void;
  dayProps?: FormSelectProps;
  monthProps?: FormSelectProps;
  yearProps?: FormSelectProps;
  value?: Date;
}

type ChangeTypes = "mm" | "yyyy" | "dd";

type DateComponents = { [Key in ChangeTypes]: React.ReactNode };

/**
 * A simple date picker using 3 FormSelect's.
 */
const FormDatePicker = function ({
  onChange,
  monthLabels,
  minYear,
  maxYear,
  format,
  className,
  dayProps,
  monthProps,
  yearProps,
  value,
  defaultDate,
  ...rest
}: FormDatePickerProps) {
  const [currentDate, setCurrentDate] = useState<Date | null | undefined>(
    typeof value !== undefined ? value : defaultDate || new Date(Date.now())
  );

  useEffect(() => {
    if (value && currentDate !== value) {
      setCurrentDate(value);
    }
  }, []);

  // Handle date changes
  const _handleOnChange = (type: ChangeTypes, value: number): void => {
    const newDate: Date = new Date(currentDate || Date.now());

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
    setCurrentDate(newDate);
    if (onChange) {
      onChange(newDate);
    }
  };

  // Creates an array with numeric values from start to end
  const _range = (start: number, end: number): Array<number> =>
    Array.from({ length: end + 1 - start }, (_, k) => k + start);

  // Renders the months select
  const _renderMonths = () => {
    const onChangeMonths = (e: React.MouseEvent<HTMLSelectElement>): void =>
      _handleOnChange("mm", Number((e.target as HTMLSelectElement).value));

    return (
      <FormSelect
        key="month"
        value={currentDate ? currentDate.getUTCMonth() : ""}
        onChange={onChangeMonths}
        {...monthProps}
      >
        <option value="" />
        {monthLabels.map((name, index) => (
          <option key={index} value={index}>
            {name}
          </option>
        ))}
      </FormSelect>
    );
  };

  // Renders the days select
  const _renderDays = () => {
    const currentMonthDays =
      currentDate &&
      new Date(
        currentDate.getUTCFullYear(),
        currentDate.getUTCMonth() + 1,
        0
      ).getDate();
    const daysRange = currentMonthDays ? _range(1, currentMonthDays) : [];
    const currentDay = currentDate && currentDate.getUTCDate();

    const onChangeDays = (e: React.MouseEvent<HTMLSelectElement>) =>
      _handleOnChange("dd", Number((e.target as HTMLSelectElement).value));

    return (
      <FormSelect
        key="dd"
        value={currentDay || ""}
        onChange={onChangeDays}
        {...dayProps}
      >
        <option value="" />
        {daysRange.map(day => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </FormSelect>
    );
  };

  // renderes the years select
  const _renderYears = () => {
    const yearsRange = _range(minYear, maxYear).reverse();
    const currentYear = currentDate && currentDate.getUTCFullYear();

    const onChangeYears = (e: React.MouseEvent<HTMLSelectElement>) =>
      _handleOnChange("yyyy", Number((e.target as HTMLSelectElement).value));

    return (
      <FormSelect
        key="yy"
        onChange={onChangeYears}
        value={currentYear || ""}
        {...yearProps}
      >
        <option value="" />
        {yearsRange.map(year => (
          <option key={year} value={year}>
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
    <El.Div className={className} {...rest}>
      <FormInputGroup>
        {formatSplit.map(
          (type: string): React.ReactNode => dateComponents[type as ChangeTypes]
        )}
      </FormInputGroup>
    </El.Div>
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
