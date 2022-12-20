import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public isLoading: boolean = false;
  public playlist: any;
  public loop: boolean = true;



  constructor(private youtubeService: YoutubeService){}

  ngOnInit(): void {
    // this.getYoutubePlaylist();
  }

  // getYoutubePlaylist(){
  //   this.isLoading = true;
  //   this.youtubeService.getPlaylist().subscribe((data: any) => {
  //     data.items.reverse();
  //     this.playlist = data.items;
  //     this.isLoading = false;
  //   });
  // }

}
