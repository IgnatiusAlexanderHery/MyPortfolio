import React, { useEffect, useState, useRef } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { CardWithImageUrlTitleTextRepositoryLive, SkillCard } from "../Card/Card";

export const GridContainer = ({ GridDatas }) => {
  const ResponsiveGridLayout = WidthProvider(Responsive);

  function getSize() {
    if (window.innerWidth <= 320) {
      return 75;
    } else if (window.innerWidth < 480) {
      return 125;
    } else {
      return 150;
    }
  }

  const getCols = () => {
    const width = window.innerWidth;
    if (width >= 1200) return 6;
    if (width >= 996) return 4;
    if (width >= 768) return 4;
    if (width >= 480) return 2;
    return 1;
  };

  const [rowHeight, setRowHeight] = useState(getSize);
  const [cols, setCols] = useState(getCols);

  useEffect(() => {
    const handleResize = () => {
      setRowHeight(getSize);
      setCols(getCols());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let maxY = useRef(0);

  const [gridLayout, setGridLayout] = useState([]);

  useEffect(() => {
    const calculateGridPositions = (items, cols) => {
      let x = 0;
      let y = 0;

      return items.map((item) => {
        if (x + item.w > cols) {
          x = 0;
          y += 1;
        }

        const position = { ...item, x, y };

        x += item.w;
        maxY.current = Math.max(maxY.current, y + item.h);

        return position;
      });
    };

    const updatedLayout = calculateGridPositions(GridDatas, cols);
    setGridLayout(updatedLayout);
  }, [GridDatas, cols]);

  return (
    <ResponsiveGridLayout
      className="layout justify-center select-none"
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 6, md: 4, sm: 4, xs: 2, xxs: 1 }}
      rowHeight={rowHeight}
      isResizable={false}
      autoSize={true}
      draggableHandle=".draggable-handle"
      maxRows={maxY.current + 1}
    >
      {gridLayout.map((GridData, index) => (
        <div
          key={index}
          data-grid={{ x: GridData.x, y: GridData.y, w: GridData.w, h: GridData.h }}
          className="bg-white border dark:border-0 border-gray-300 flex flex-col items-center justify-center text-lg draggable-handle rounded-xl lg:text-base md:text-sm sm:text-xs xs:text-xs xxs:text-xs dark:bg-gray-900 dark:border-gray-700 dark:text-white"
        >
          {GridData.type === "2" ? <SkillCard {...GridData} /> : <CardWithImageUrlTitleTextRepositoryLive {...GridData} />}
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};
