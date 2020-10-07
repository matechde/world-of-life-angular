import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {WorldFieldGridRenderer} from './WorldFieldGridRenderer';
import {WorldCellDto, WorldDto, WorldFieldViewModel, WorldPositionDto} from './world-field.model';
import {WorldFieldService} from './world-field.service';
import {WorldFieldCellRenderer} from './WorldFieldCellRenderer';

@Component({
  selector: 'app-world-field',
  templateUrl: './world-field.component.html',
  styleUrls: ['./world-field.component.css']
})
export class WorldFieldComponent implements OnInit {

  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;

  worldFieldGridRenderer: WorldFieldGridRenderer;
  worldFieldCellRenderer: WorldFieldCellRenderer;
  selectedCells: WorldPositionDto[] = [];
  cellSize: number = 10;
  worldDto: WorldDto;

  constructor(private gameFieldService: WorldFieldService) {
    this.worldFieldGridRenderer = new WorldFieldGridRenderer();
    this.worldFieldCellRenderer = new WorldFieldCellRenderer();
  }

  ngOnInit(): void {
    this.drawWorldField(this.createGameFieldViewModel());
    this.gameFieldService.getWorld().subscribe((worldDto: WorldDto) => {
      this.worldDto = worldDto;
      const worldFieldViewModel = this.createGameFieldViewModel();
      this.drawWorldField(worldFieldViewModel);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.drawWorldField(this.createGameFieldViewModel());
  }

  onMouseDown(event: MouseEvent) {
    console.log(event.buttons);
    if (event.buttons === 1) {
      this.addSelectedCell(event);
      this.drawWorldField(this.createGameFieldViewModel());
    }
  }

  onMouseMove(event: MouseEvent) {
    if (event.buttons === 1) {
      this.addSelectedCell(event);
      this.drawWorldField(this.createGameFieldViewModel());
    }
  }

  onMouseUp(event: MouseEvent) {
    this.gameFieldService.setCells(this.selectedCells).subscribe();
    this.selectedCells = [];
  }

  addSelectedCell(event: MouseEvent) {
    const selectedCell: WorldPositionDto = {
      x: Math.floor(event.offsetX / this.cellSize),
      y: Math.floor(event.offsetY / this.cellSize)
    };
    if (this.selectedCells.filter(value => value.x === selectedCell.x && value.y === selectedCell.y).length === 0) {
      this.selectedCells.push(selectedCell);
    }
  }

  createGameFieldViewModel(): WorldFieldViewModel {
    let width = this.canvas.nativeElement.offsetWidth;
    let height = this.canvas.nativeElement.offsetHeight;
    this.canvas.nativeElement.width = width;
    this.canvas.nativeElement.height = height;

    return {
      width: width,
      height: height,
      cellSize: this.cellSize
    }
  }

  drawWorldField(worldFieldViewModel: WorldFieldViewModel) {
    this.canvas.nativeElement.width = worldFieldViewModel.width;
    this.canvas.nativeElement.height = worldFieldViewModel.height;

    const context = this.canvas.nativeElement.getContext("2d");

    this.worldFieldGridRenderer.drawGrid(context, worldFieldViewModel);
    this.selectedCells.forEach(worldPositionDto =>
      this.worldFieldCellRenderer.drawSelectedWorldCell(context, worldFieldViewModel, worldPositionDto));
    if (this.worldDto) {
      this.worldDto.worldCellDtos.forEach((worldCellDto: WorldCellDto) => {
        this.worldFieldCellRenderer.drawWorldCell(context, worldFieldViewModel, worldCellDto);
      });
    }
  }
}
