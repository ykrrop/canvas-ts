import { Point, Rect, ConnectionPoint } from "../types/shapes";

const isConnectionPointOnEdge = (
  rect: Rect,
  cPoint: ConnectionPoint
): boolean => {
  const { x, y } = cPoint.point;
  const left = rect.position.x - rect.size.width / 2;
  const right = rect.position.x + rect.size.width / 2;
  const top = rect.position.y - rect.size.height / 2;
  const bottom = rect.position.y + rect.size.height / 2;

  return (
    ((x === left || x === right) && y >= top && y <= bottom) ||
    ((y === top || y === bottom) && x >= left && x <= right)
  );
};

export const dataConverter = (
  rect1: Rect,
  rect2: Rect,
  cPoint1: ConnectionPoint,
  cPoint2: ConnectionPoint
): Point[] => {
  if (!isConnectionPointOnEdge(rect1, cPoint1)) {
    throw new Error("Connection point 1 is not on the edge of rectangle 1");
  }
  if (!isConnectionPointOnEdge(rect2, cPoint2)) {
    throw new Error("Connection point 2 is not on the edge of rectangle 2");
  }

  const midpointX = (cPoint1.point.x + cPoint2.point.x) / 2;

  const points: Point[] = [
    cPoint1.point,
    { x: midpointX, y: cPoint1.point.y },
    { x: midpointX, y: cPoint2.point.y },
    cPoint2.point,
  ];

  return points;
};
