import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'
import { Artist } from '../../models/artist';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {
    searchStr:string;
    searchResult:Artist[];
    constructor(private _spotifyService:SpotifyService) { }

    ngOnInit() { 
    }

    searchMusic() {
        if (this.searchStr && this.searchStr.length > 2) {
            this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res=>{
                this.searchResult = res.artists.items;
            });
        }
    }
}