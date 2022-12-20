import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiKey } from 'environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  constructor(private http: HttpClient) { }

  getPlaylist() {    
    const url = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLaJgEKWDlVXR_mfuM1i-y3KYJkUv8e58c&key='+ apiKey;
    return this.http.get(url);
  }
  
}
