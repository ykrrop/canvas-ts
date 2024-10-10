import { render } from "@testing-library/react";
import CanvasComponent from "../components/CanvasComponent";
import { Rect, ConnectionPoint } from "../types/shapes";
import "@testing-library/jest-dom";

HTMLCanvasElement.prototype.getContext = jest.fn().mockReturnValue({
  clearRect: jest.fn(),
  strokeRect: jest.fn(),
  beginPath: jest.fn(),
  moveTo: jest.fn(),
  lineTo: jest.fn(),
  stroke: jest.fn(),
});

describe("CanvasComponent", () => {
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

  it("should render the canvas correctly", () => {
    const { container } = render(
      <CanvasComponent
        rect1={rect1}
        rect2={rect2}
        cPoint1={cPoint1}
        cPoint2={cPoint2}
      />
    );
    const canvas = container.querySelector("canvas");
    expect(canvas).toBeInTheDocument();
  });
});
