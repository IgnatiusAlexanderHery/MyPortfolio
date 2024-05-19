import React, { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { CardWithImageUrlTitleTextRepositoryLive } from "../Card/Card";
export const GridContainer = ({ GridDatas }) => {
  const ResponsiveGridLayout = WidthProvider(Responsive);

  function getSize() {
    if (window.innerWidth <= 320) {
      return 150;
    } else if (window.innerWidth < 480) {
      return 250;
    } else {
      return 300;
    }
  }

  let [rowHeight, setRowHeight] = useState(getSize);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setRowHeight(getSize);
    });
  }, []);

  return (
    <ResponsiveGridLayout
      className="layout justify-center"
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 6, md: 4, sm: 4, xs: 2, xxs: 1 }}
      rowHeight={rowHeight}
      isResizable={false}
      autoSize={true}
      draggableHandle=".draggable-handle"
      // isBounded={true}
    >
      {GridDatas.map((GridData, index) => {
        return (
          <div
            key={index}
            data-grid={{ x: GridData.x, y: GridData.y, w: GridData.w, h: GridData.h }}
            className="bg-white border dark:border-0 border-gray-300 flex flex-col items-center justify-center text-lg draggable-handle rounded-xl lg:text-base md:text-sm sm:text-xs xs:text-xs xxs:text-xs dark:bg-gray-900 dark:border-gray-700 dark:text-white"
          >
            <CardWithImageUrlTitleTextRepositoryLive {...GridData} />
          </div>
        );
      })}
    </ResponsiveGridLayout>
  );
};
