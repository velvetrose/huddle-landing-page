import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'huddle-landing-page';

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit() {
    //#region timeLine-01
    let tl1 = gsap.timeline({
      onComplete: () => {
        console.log('Section 1 - Timeline completed!');
      },
    });

    gsap.from('.logo', {
      opacity: 0,
      x: -40,
      duration: 2,
    });

    tl1
      .from('.one h1', {
        opacity: 0,
        y: -30,
        delay: 1,
        duration: 1,
      })
      .from('.one p', {
        opacity: 0,
        x: -30,
        duration: 1,
      })
      .from('.one button', {
        opacity: 0,
        y: 30,
        duration: 1,
      })
      .from(
        '.one .image .image-1',
        {
          x: -1000,
          opacity: 0,
          duration: 1,
        },
        'simultaneous',
      )
      .from(
        '.one .image .image-2',
        {
          x: 1000,
          opacity: 0,
          duration: 1,
        },
        'simultaneous',
      );

    // gsap.timeline()
    // .from('.one .image .image-1',{
    //   x:-1000,
    //   opacity:0,
    //   scrollTrigger:{
    //     trigger:'.one .image',
    //     start:'10% 50%',
    //     scrub:2,
    //     markers:true,
    //     pin:true,
    //     pinSpacing:true
    //   }
    // },'time')
    // .from('.one .image .image-2',{
    //   x:1000,
    //   opacity:0,
    //   scrollTrigger:{
    //     trigger:'.one .image',
    //     start:'10% 50%',
    //     scrub:2,
    //   }
    // },'time');

    //#endregion

    //#region timeline-02

    gsap.to('#counter-01', {
      duration: 3,
      innerHTML: 1.4,
      modifiers: {
        innerHTML: this.roundPartial(1),
      },
      scrollTrigger: {
        trigger: '#counter-01',
        start: 'top 80%',
        end: 'top 10%',
        // markers: true,
        toggleActions: 'play complete restart reset',
      },
    });

    gsap.to('#counter-02', {
      duration: 3,
      innerHTML: 2.7,
      modifiers: {
        innerHTML: this.roundPartial(1),
      },
      scrollTrigger: {
        trigger: '#counter-02',
        start: 'top 80%',
        end: 'top 10%',
        toggleActions: 'play complete restart reset',
      },
    });
    //#endregion

    //#region timeline-03

    gsap
      .timeline()
      .from(
        '#illus-01',
        {
          x: 2000,
          opacity: 0,
          duration: 2,
          scrollTrigger: {
            trigger: ' #illus-01',
            start: 'top 75%',
            end: 'top 20%',
            scrub: 3,
            // markers: true,
          },
        },
        'same',
      )
      .from(
        '#info-01',
        {
          x: -1000,
          opacity: 0,
          duration: 2,
          scrollTrigger: {
            trigger: ' #info-01',
            start: 'top 75%',
            end: 'top 20%',
            scrub: 3,
          },
        },
        'same',
      );
    //#endregion

    //#region timeline-04

    gsap
      .timeline()
      .from(
        '#illus-02',
        {
          x: -3000,
          opacity: 0,
          duration: 2,
          scrollTrigger: {
            trigger: ' #illus-02',
            start: 'top 75%',
            end: 'top 20%',
            scrub: 3,
          },
        },
        'same',
      )
      .from(
        '#info-02',
        {
          x: 2000,
          opacity: 0,
          duration: 2,
          scrollTrigger: {
            trigger: ' #info-02',
            start: 'top 75%',
            end: 'top 20%',
            scrub: 3,
          },
        },
        'same',
      );
    //#endregion

    //#region timeline-05

    gsap
      .timeline()
      .from(
        '#illus-03',
        {
          x: 2000,
          opacity: 0,
          duration: 2,
          scrollTrigger: {
            trigger: ' #illus-03',
            start: 'top 75%',
            end: 'top 20%',
            scrub: 3,
          },
        },
        'same',
      )
      .from(
        '#info-03',
        {
          x: -1000,
          opacity: 0,
          duration: 2,
          scrollTrigger: {
            trigger: ' #info-03',
            start: 'top 75%',
            end: 'top 20%',
            scrub: 3,
          },
        },
        'same',
      );
    //#endregion

    //#region timeline-06
    gsap
      .timeline()
      .from('.CTA p', {
        y: -200,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '.CTA p',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 3,
        },
      })
      .from('.CTA button', {
        y: 200,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '.CTA button',
          start: 'top 95%',
          end: 'top 85%',
          scrub: 3,
        },
      });
    //#endregion

    //#region timeline-07
    gsap
      .timeline()
      .from('footer .newsletter', {
        x: 500,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 3,
        },
      })
      .from('footer .contact-details', {
        x: -500,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 95%',
          end: 'top 85%',
          scrub: 3,
        },
      });
    //#endregion
  }

  roundPartial(places: any) {
    var p = Math.pow(10, places || 0);
    return function (value: any) {
      return Math.round(value * p) / p;
    };
  }
}
