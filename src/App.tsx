import React from "react";
import CanvasComponent from "./components/CanvasComponent";
import { Rect, ConnectionPoint } from "./types/shapes";

const App: React.FC = () => {
  const rect1: Rect = {
    position: { x: 100, y: 100 },
    size: { width: 100, height: 50 },
  };

  const rect2: Rect = {
    position: { x: 300, y: 300 },
    size: { width: 100, height: 50 },
  };

  const cPoint1: ConnectionPoint = {
    point: { x: 100, y: 125 },
    angle: 90,
  };

  const cPoint2: ConnectionPoint = {
    point: { x: 300, y: 275 },
    angle: 90,
  };

  return (
    <div>
      <h1>Canvas Drawing</h1>
      <CanvasComponent
        rect1={rect1}
        rect2={rect2}
        cPoint1={cPoint1}
        cPoint2={cPoint2}
      />
    </div>
  );
};

export default App;
