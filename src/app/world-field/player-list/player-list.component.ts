import {Component, OnInit} from '@angular/core';
import {PlayerLoginDto, PlayerPrivateDto, PlayerPublicDto} from './player.model';
import {PlayerListService} from './player-list.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  loginName = new FormControl();
  players: PlayerPublicDto[] = [];
  player: PlayerPrivateDto;

  constructor(private playerListService: PlayerListService) {
  }

  ngOnInit(): void {
    this.playerListService.getPlayers().subscribe((playerPublicDtos: PlayerPublicDto[]) => {
      this.players = playerPublicDtos;
    });
  }

  login() {
    this.playerListService.login({name: this.loginName.value})
      .subscribe((playerPrivateDto: PlayerPrivateDto) => this.player = playerPrivateDto);
  }
}
