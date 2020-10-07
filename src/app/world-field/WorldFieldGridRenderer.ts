import {WorldFieldViewModel} from './world-field.model';

export class WorldFieldGridRenderer {
  drawGrid(context: CanvasRenderingContext2D, worldFieldViewModel: WorldFieldViewModel) {
    for (let xPos = 0; xPos < worldFieldViewModel.width; xPos += worldFieldViewModel.cellSize) {
      context.moveTo(xPos, 0);
      context.lineTo(xPos, worldFieldViewModel.height);
    }

    for (let yPos = 0; yPos < worldFieldViewModel.height; yPos += worldFieldViewModel.cellSize) {
      context.moveTo(0, yPos);
      context.lineTo(worldFieldViewModel.width, yPos);
    }

    context.strokeStyle = "#ddd";
    context.stroke();
  }
}
