import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/charts";

const Chart = (props) => {
  const list = () => {
    if (props.data !== undefined) {
      const config = {
        data: props?.data,
        isGroup: true,
        xField: "name",
        yField: "number",
        seriesField: "name",
        // khoảng cách giữa các cột trong một nhóm
        dodgePadding: 2,
        // khoảng cách giữa các nhóm
        intervalPadding: 20,
        label: {
          // Vị trí nhãn dữ liệu
          position: "middle", // 'top', 'middle', 'bottom'
          // các phương thức bố cục bổ xung
          layout: [
            // vị trí nhãn dữ liệu tự động
            { type: "interval-adjust-position" },
            // chống chặn nhãn dữ liệu
            { type: "interval-hide-overlap" },
            // Màu của văn bản nhãn dữ liệu
            { type: "adjust-color" },
          ],
        },
      };
      return <Column {...config} style={{ width: "100%" }} />;
    }
  };

  return <>{list()}</>;
};
export default Chart;
