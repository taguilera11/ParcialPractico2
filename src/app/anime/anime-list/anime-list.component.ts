import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedBAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];
  ratingPromedio: string = "";
  constructor(private animeService: AnimeService) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
      this.calcularPromedio()
    });
    
  }

  calcularPromedio(): void{
    console.log(this.animes)
    let total = 0;
    this.animes.forEach(anime => {
      total += parseFloat(anime.Rating)
    });
    this.ratingPromedio = (total/this.animes.length).toFixed(2)
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
  }

  ngOnInit() {
    this.getAnimes();
  }

}
