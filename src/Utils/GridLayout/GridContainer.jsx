import React from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { GridItem, GridItemWithImage } from "../Card/Card";

export const GridContainer = ({ GridDatas }) => {
  return (
    <GridLayout className="layout justify-center" cols={4} width={1200} isResizable={false} autoSize={true} draggableHandle=".draggable-handle">
      {GridDatas.map((GridData, index) => {
        if (GridData.image) {
          return <div key={index} data-grid={{ x: 1, y: 0, w: 4, h: 2 }} className="bg-white border border-gray-300 flex flex-col items-center justify-center text-lg draggable-handle"></div>;
        }
        return <div key={index} data-grid={{ x: 1, y: 0, w: 6, h: 2 }} className="bg-white border border-gray-300 flex flex-col items-center justify-center text-lg draggable-handle"></div>;
      })}
    </GridLayout>
  );
};
