import { Component, OnInit ,ViewChild} from '@angular/core';
import * as $ from 'jquery';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource ,NgbCarouselConfig   } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  images =  ["../../assets/images/untitled-1.png", "../../../assets/images/untitled-2.png", "../../../assets/images/untitled-3.png", "../../../assets/images/untitled-4.png", "../../../assets/images/mopner-mouth-opener-plane-steel.png"];
  
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }
  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
  constructor(ngbconfig : NgbCarouselConfig) 
  { 
    ngbconfig.interval = 2000;  
    ngbconfig.wrap = true;  
    ngbconfig.keyboard = true;  
  }


  ngOnInit(): void {
  }

}
