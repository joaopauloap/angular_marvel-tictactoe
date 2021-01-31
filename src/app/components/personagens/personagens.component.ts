import { PersonagensService } from '../personagens/personagens.service'
import { Component, OnInit } from '@angular/core';
import { Personagem } from './personagens.model';
import { Router } from '@angular/router';
import { AuthGuard } from '../game/game.authguard.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})

export class PersonagensComponent implements OnInit {

  players = {
    player1: {
      name: '',
      thumbnail: '',
      score:0
    },
    player2: {
      name: '',
      thumbnail: '',
      score:0
    },
  }

  personagensComponentFade = "fade-in"
  personagens: Personagem[]
  firstSelect: boolean = false
  selecionarPersonagem: boolean = true

  constructor(private personagensService: PersonagensService, private router: Router, private authguard: AuthGuard) { }

  ngOnInit(): void {

    this.personagensService.read().subscribe(res => {
      this.personagens = res.data.results
    })

  }

  personagemClick(e) {

    if ((e.target.nodeName == "TD") && (this.selecionarPersonagem == true)) {

      if (this.firstSelect == false) {
        this.firstSelect = true
        this.players.player1.name = e.target.id
        
        let getPersonagem = this.personagens.find(personagem => personagem.name === e.target.id)
        let thumbnailPath = getPersonagem.thumbnail["path"] + '.jpg'
        this.players.player1.thumbnail = thumbnailPath
        document.getElementById("overlay-" + e.target.id).innerText = "X"
      } else {
        this.selecionarPersonagem = false
        this.players.player2.name = e.target.id

        let getPersonagem = this.personagens.find(personagem => personagem.name === e.target.id)
        let thumbnailPath = getPersonagem.thumbnail["path"] + '.jpg'
        this.players.player2.thumbnail = thumbnailPath

        document.getElementById("overlay-" + e.target.id).innerText = "O"

        this.personagensComponentFade = "fade-out"

        setTimeout(() => {
          this.authguard.flag = true
          this.router.navigateByUrl('/game', { state: this.players })
        }, 3000);
      }

      e.target.className = "selected"
      document.getElementById("overlay-" + e.target.id).style.visibility = "visible"
    }

  }

}
