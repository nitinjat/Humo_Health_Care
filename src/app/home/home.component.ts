import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let Fotter = new FooterComponent();
  }

}
