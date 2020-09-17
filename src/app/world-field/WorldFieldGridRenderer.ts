export class WorldFieldGridRenderer {
  drawGrid(context: CanvasRenderingContext2D, width: number, height: number, widthOffset: number, heightOffset: number) {
    for (let xIndex = 0; xIndex < width; xIndex += width / 10) {
      const xPos = xIndex + widthOffset;
      context.moveTo(xPos, heightOffset);
      context.lineTo(xPos, height + heightOffset);
    }

    for (let yIndex = 0; yIndex < height; yIndex += height / 10) {
      const yPos = yIndex + heightOffset;
      context.moveTo(widthOffset, yPos);
      context.lineTo(width + widthOffset, yPos);
    }

    context.strokeStyle = "#ddd";
    context.stroke();
  }
}
