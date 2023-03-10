import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.session';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  exibir = false;
  constructor(private loadeService: LoaderService) { }

  ngOnInit(): void {
    this.loadeService.loadEvent.subscribe(e => this.exibir = e);
  }

}
