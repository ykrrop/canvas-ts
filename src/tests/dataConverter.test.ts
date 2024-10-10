import { dataConverter } from "../utils/dataConverter";
import { Rect, ConnectionPoint } from "../types/shapes";

describe("dataConverter function", () => {
  const rect1: Rect = {
    position: { x: 100, y: 100 },
    size: { width: 100, height: 50 },
  };

  const rect2: Rect = {
    position: { x: 300, y: 300 },
    size: { width: 100, height: 50 },
  };

  const validCPoint1: ConnectionPoint = {
    point: { x: 100, y: 125 },
    angle: 90,
  };

  const validCPoint2: ConnectionPoint = {
    point: { x: 300, y: 275 },
    angle: 90,
  };

  it("should return an array of points for valid connection points on edges", () => {
    const points = dataConverter(rect1, rect2, validCPoint1, validCPoint2);

    expect(points.length).toBe(4);
    expect(points[0]).toEqual({ x: 100, y: 125 });
    expect(points[1].x).toBe((100 + 300) / 2);
    expect(points[3]).toEqual({ x: 300, y: 275 });
  });

  it("should throw error if connection point 1 is not on edge", () => {
    const invalidCPoint1: ConnectionPoint = {
      point: { x: 150, y: 150 },
      angle: 90,
    };

    expect(() =>
      dataConverter(rect1, rect2, invalidCPoint1, validCPoint2)
    ).toThrow("Connection point 1 is not on the edge of rectangle 1");
  });

  it("should throw error if connection point 2 is not on edge", () => {
    const invalidCPoint2: ConnectionPoint = {
      point: { x: 350, y: 350 },
      angle: 90,
    };

    expect(() =>
      dataConverter(rect1, rect2, validCPoint1, invalidCPoint2)
    ).toThrow("Connection point 2 is not on the edge of rectangle 2");
  });
});
