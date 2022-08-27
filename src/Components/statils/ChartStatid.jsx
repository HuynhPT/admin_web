import React from "react";
import { Pie } from "@ant-design/charts";

function ChartStatid(props) {
  const piePlot = {
    appendPadding: 10,
    data: props.data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [{ type: "element-active" }],
    theme: {
      styleSheet: {
        brandColor: "#87CEEB99",
        paletteQualitative10: ["#87CEEB99", "#FF69B499", "#99FF99"],
      },
    },
  };
  return (
    <Pie
      {...piePlot}
      style={{ width: 370, height: 350, margin: "-60px 70px" }}
    />
  );
}

export default ChartStatid;
