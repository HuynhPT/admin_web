import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/charts";

function Chartcolum() {
  const [dataPro, setDataPro] = useState();
  useEffect(() => {
    fetch("https://huynhpt.github.io/testchart.json")
      .then((data) => data.json())
      .then((data) => {
        setDataPro(data);
      });
  }, []);
  const list = () => {
    if (dataPro !== undefined) {
      const config = {
        data: dataPro,
        isGroup: true,
        xField: "month",
        yField: "dats",
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
        theme: {
          styleSheet: {
            brandColor: "#E0CFBA",
            paletteQualitative10: ["#E0CFBA", "#87CEEB"],
          },
        },
      };
      return <Column {...config} style={{ margin: "0 100px" }} />;
    }
  };

  return <>{list()}</>;
}

export default Chartcolum;
