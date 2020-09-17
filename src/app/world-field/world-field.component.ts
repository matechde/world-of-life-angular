import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {WorldFieldGridRenderer} from './WorldFieldGridRenderer';
import {GameFieldViewModel} from './world-field.model';

@Component({
  selector: 'app-world-field',
  templateUrl: './world-field.component.html',
  styleUrls: ['./world-field.component.css']
})
export class WorldFieldComponent implements OnInit {

  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;

  worldFieldGridRenderer: WorldFieldGridRenderer;

  constructor() {
    this.worldFieldGridRenderer = new WorldFieldGridRenderer();
  }

  ngOnInit(): void {
    this.drawGameField();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(event);
    this.drawGameField();
  }

  onClick(event: MouseEvent) {
    console.log(event.offsetX + " | " + event.offsetY);
  }

  createGameFieldViewModel(): GameFieldViewModel {
    let width = this.canvas.nativeElement.offsetWidth;
    let height = this.canvas.nativeElement.offsetHeight;
    this.canvas.nativeElement.width = width;
    this.canvas.nativeElement.height = height;

    let xOffset: number = 0;
    let yOffset: number = 0;
    if (width > height) {
      xOffset = (width - height) / 2;
      width = height;
    } else {
      yOffset = (height - width) / 2;
      height = width;
    }

    return {
      width: width,
      height: height,
      xOffset: xOffset,
      yOffset: yOffset
    }
  }

  drawGameField() {
    const gameFieldViewModel = this.createGameFieldViewModel();

    this.canvas.nativeElement.width = gameFieldViewModel.width;
    this.canvas.nativeElement.height = gameFieldViewModel.height;

    const context = this.canvas.nativeElement.getContext("2d");

    this.worldFieldGridRenderer.drawGrid(context, width, height, widthOffset, heightOffset);
  }
}
