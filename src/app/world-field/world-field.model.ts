export interface WorldFieldViewModel {
  width: number;
  height: number;
  cellSize: number;
}

export interface WorldDto {
  worldCellDtos: WorldCellDto[];
}

export interface WorldCellDto {
  worldPositionDto: WorldPositionDto;
}

export interface WorldPositionDto {
  x: number;
  y: number;
}
