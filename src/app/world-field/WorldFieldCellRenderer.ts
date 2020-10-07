import {WorldCellDto, WorldFieldViewModel, WorldPositionDto} from './world-field.model';

export class WorldFieldCellRenderer {
  drawWorldCell(context: CanvasRenderingContext2D,
                worldFieldViewModel: WorldFieldViewModel,
                worldCellDto: WorldCellDto) {
    const cellSize: number = worldFieldViewModel.cellSize;
    context.fillStyle = "rgb(200,0,0)";
    context.fillRect(worldCellDto.worldPositionDto.x * cellSize,
      worldCellDto.worldPositionDto.y * cellSize, cellSize, cellSize);
  }

  drawSelectedWorldCell(context: CanvasRenderingContext2D,
                        worldFieldViewModel: WorldFieldViewModel,
                        worldPositionDto: WorldPositionDto) {
    const cellSize: number = worldFieldViewModel.cellSize;
    context.fillStyle = "rgb(0,200,0)";
    context.fillRect(worldPositionDto.x * cellSize,
      worldPositionDto.y * cellSize, cellSize, cellSize);
  }
}
