import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PyramidSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
  AccumulationSelection,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import { PyramidData } from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";

const Pyramid = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="CHART" title="Pyramid" />
      <AccumulationChartComponent
        id="pyramid-chart"
        tooltip={{ enable: true }}
        legendSettings={{ background: "white" }}
        background={currentMode === "Dark" ? "#33373e" : "#fff"}
      >
        <Inject
          services={[
            AccumulationDataLabel,
            AccumulationTooltip,
            PyramidSeries,
            AccumulationLegend,
            AccumulationSelection,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            name="Food"
            dataSource={PyramidData}
            xName="x"
            yName="y"
            type="Pyramid"
            with="45%"
            high="80%"
            neckWith="15%"
            gapRation={0.03}
            explode
            emptyPointSettings={{ mode: "Drop", fill: "red" }}
            dataLabel={{
              visible: true,
              position: "Inside",
              name: "text",
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pyramid;
