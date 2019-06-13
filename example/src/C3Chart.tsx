import React, { useEffect, useRef, CSSProperties } from "react";

import c3, { ChartAPI, ChartConfiguration, Data } from "c3";

interface C3ChartProps extends ChartConfiguration {
  className?: string;
  style?: CSSProperties;
  onPropsChanged?: Function;
  unloadBeforeLoad?: boolean;
}

const C3Chart = function(props: C3ChartProps) {
  const chart = useRef<null | ChartAPI>(null);
  const chartRef = useRef(null);
  const prevPropsRef = useRef(props);

  const destroyChart = function() {
    try {
      if (chart.current) {
        chart.current.destroy();
        chart.current = null;
      }
    } catch (err) {
      throw new err();
    }
  };

  const generateChart = function(config: ChartConfiguration) {
    const newConfig = Object.assign({ bindto: chartRef.current }, config);
    return c3.generate(newConfig);
  };

  const loadNewData = function(data: Data) {
    if (chart.current) {
      chart.current.load(data as any);
    }
  };

  const unloadData = function() {
    if (chart.current) {
      chart.current.unload();
    }
  };

  useEffect(() => {
    const updateChart = function(config: ChartConfiguration) {
      if (!chart.current) {
        chart.current = generateChart(config);
      }

      if (props.unloadBeforeLoad) {
        unloadData();
      }

      loadNewData(config.data);
    };

    updateChart(props);
    if (props.onPropsChanged) {
      props.onPropsChanged(prevPropsRef.current, props, chart);
    }
    prevPropsRef.current = props;
    return () => {
      destroyChart();
    };
  }, [props]);

  const className = props.className || "";
  const style = props.style || {};

  return <div ref={chartRef} className={className} style={style} />;
};

export default C3Chart;
