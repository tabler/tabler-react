import { colors } from "tabler-react";

export const cardChart1Data = {
  series: [
    {
      name: "Profits",
      data: [
        37,
        35,
        44,
        28,
        36,
        24,
        65,
        31,
        37,
        39,
        62,
        51,
        35,
        41,
        35,
        27,
        93,
        53,
        61,
        27,
        54,
        43,
        19,
        46,
        39,
        62,
        51,
        35,
        41,
        67,
      ],
    },
  ],
  height: "100%",
  type: "area" as any,
  options: {
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    xaxis: {
      type: "datetime",
    },
    labels: Array(30)
      .fill(0)
      .map((_, n) => `2019-05-${n + 1}`),
    colors: [colors.blue],
    fill: {
      opacity: 0.16,
    },
    sparkline: {
      enabled: true,
    },
  },
};

export const chartActiveUsersData = {
  series: [
    {
      name: "May",
      data: [
        37,
        35,
        44,
        28,
        36,
        24,
        65,
        31,
        37,
        39,
        62,
        51,
        35,
        41,
        35,
        27,
        93,
        53,
        61,
        27,
        54,
        43,
        4,
        46,
        39,
        62,
        51,
        35,
        41,
        67,
      ],
    },
    {
      name: "April",
      data: [
        93,
        54,
        51,
        24,
        35,
        35,
        31,
        67,
        19,
        43,
        28,
        36,
        62,
        61,
        27,
        39,
        35,
        41,
        27,
        35,
        51,
        46,
        62,
        37,
        44,
        53,
        41,
        65,
        39,
        37,
      ],
    },
  ],
  height: "100%",
  type: "line" as any,
  options: {
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: [2, 1],
      dashArray: [0, 3],
    },
    xaxis: {
      type: "datetime",
    },
    labels: Array(30)
      .fill(0)
      .map((_, n) => `2019-05-${n + 1}`),
    colors: [colors.blue, colors.gray],
    legend: {
      show: false, //hide legend
    },
  },
};

export const chartActiveUsers2Data = {
  series: [
    {
      name: "Profits",
      data: [
        37,
        35,
        44,
        28,
        36,
        24,
        65,
        31,
        37,
        39,
        62,
        51,
        35,
        41,
        35,
        27,
        93,
        53,
        61,
        27,
        54,
        43,
        19,
        46,
        39,
        62,
        51,
        35,
        41,
        67,
      ],
    },
  ],
  type: "bar" as any,
  height: "100%",
  options: {
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    xaxis: {
      type: "datetime",
    },
    labels: Array(30)
      .fill(0)
      .map((_, n) => `2019-05-${n + 1}`),
    colors: [colors.blue],
  },
};

export const chartTemperatureData = {
  series: [
    {
      name: "Tokyo",
      data: [
        7.0,
        6.9,
        9.5,
        14.5,
        18.4,
        21.5,
        25.2,
        26.5,
        23.3,
        18.3,
        13.9,
        9.6,
      ],
    },
    {
      name: "London",
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
    },
  ],
  type: "line" as any,
  height: "150px",
  options: {
    chart: {
      type: "line",
    },
    grid: {
      show: true,
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    colors: [colors.blue, colors.green],
    legend: {
      show: false, //hide legend
    },
    markers: {
      size: 2,
    },
  },
};

export const chartDonutData = {
  series: [63, 37],
  type: "donut" as any,
  height: "200px",
  options: {
    pie: {
      height: "100%",
    },
    colors: [colors.green, colors["green-light"]],
    legend: {
      show: false, //hide legend
    },
  },
};

export const chartPieData = {
  series: [63, 44, 12, 14],
  type: "pie" as any,
  height: "200px",
  options: {
    pie: {
      height: "100%",
    },
    dataLabels: {
      enabled: true,
    },
    colors: [
      colors["blue-darker"],
      colors.blue,
      colors["blue-light"],
      colors["blue-lighter"],
    ],
    legend: {
      show: false, //hide legend
    },
  },
};
