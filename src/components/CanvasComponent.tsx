import { useRef, useEffect } from "react";
import { Rect, ConnectionPoint, Point } from "../types/shapes";
import { dataConverter } from "../utils/dataConverter";

type CanvasComponentProps = {
  rect1: Rect;
  rect2: Rect;
  cPoint1: ConnectionPoint;
  cPoint2: ConnectionPoint;
};

const CanvasComponent: React.FC<CanvasComponentProps> = ({
  rect1,
  rect2,
  cPoint1,
  cPoint2,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.strokeRect(
          rect1.position.x - rect1.size.width / 2,
          rect1.position.y - rect1.size.height / 2,
          rect1.size.width,
          rect1.size.height
        );

        ctx.strokeRect(
          rect2.position.x - rect2.size.width / 2,
          rect2.position.y - rect2.size.height / 2,
          rect2.size.width,
          rect2.size.height
        );

        const points: Point[] = dataConverter(rect1, rect2, cPoint1, cPoint2);

        ctx.beginPath();
        points.forEach((point, index) => {
          if (index === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        });
        ctx.stroke();
      }
    }
  }, [rect1, rect2, cPoint1, cPoint2]);

  return <canvas ref={canvasRef} width={500} height={500} />;
};

export default CanvasComponent;
