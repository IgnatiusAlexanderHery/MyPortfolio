import React, { useEffect, useState, useRef } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { CardWithImageUrlTitleTextRepositoryLive, SkillCard, CardTimeline, CardWithLeftImageTitleText } from "../Card/Card";

export const GridContainer = ({ GridDatas }) => {
  const ResponsiveGridLayout = WidthProvider(Responsive);

  function getSize() {
    if (window.innerWidth <= 320) {
      return 90;
    } else if (window.innerWidth <= 380) {
      return 180;
    } else if (window.innerWidth < 455) {
      return 180;
    } else if (window.innerWidth < 480) {
      return 160;
    } else {
      return 155;
    }
  }

  const getCols = () => {
    const width = window.innerWidth;
    if (width >= 1200) return 6;
    if (width >= 996) return 4;
    if (width >= 768) return 2;
    if (width >= 480) return 2;
    return 2;
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
      const occupied = {};

      const findNextEmptySpot = (w, h) => {
        let y = 0;
        while (true) {
          for (let x = 0; x <= cols - w; x++) {
            let spotAvailable = true;
            for (let i = 0; i < w; i++) {
              for (let j = 0; j < h; j++) {
                if (occupied[`${x + i},${y + j}`]) {
                  spotAvailable = false;
                  break;
                }
              }
              if (!spotAvailable) break;
            }
            if (spotAvailable) return { x, y };
          }
          y++;
        }
      };

      return items.map((item) => {
        const { w, h } = item;
        const { x, y } = findNextEmptySpot(w, h);

        for (let i = 0; i < w; i++) {
          for (let j = 0; j < h; j++) {
            occupied[`${x + i},${y + j}`] = true;
          }
        }

        maxY.current = Math.max(maxY.current, y + h);

        return { ...item, x, y };
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
          className="bg-white border dark:border-0 border-gray-300 flex flex-col items-center justify-center text-lg draggable-handle rounded-xl lg:text-base md:text-sm sm:text-xs xs:text-xs xxs:text-xs dark:bg-gray-900 dark:border-gray-700 dark:text-white hover:cursor-grab hover:bg-blue-950"
        >
          {GridData.type === "2" ? (
            <SkillCard {...GridData} />
          ) : GridData.type === "3" ? (
            <CardTimeline {...GridData} />
          ) : GridData.type === "4" ? (
            <CardWithLeftImageTitleText {...GridData} />
          ) : (
            <CardWithImageUrlTitleTextRepositoryLive {...GridData} />
          )}
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};
