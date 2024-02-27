import { Component, Input } from '@angular/core';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent {
  slides :any[] = [
    
    {
      url:'/assets/images/exterieur2.jpeg',
      title: 'First slide label',
      description: 'this is the first slide'
    },
    {
      url:'/assets/images/exterieur3.jpeg',
      title: 'First slide label',
      description: 'this is the first slide'
    },
    {
      url:'/assets/images/interieur1.png',
      title: 'First slide label',
      description: 'this is the first slide'
    },
    {
      url:'/assets/images/interieur2.png',
      title: 'First slide label',
      description: 'this is the first slide'
    },
    {
      url:'/assets/images/garçon.png',
      title: 'First slide label',
      description: 'this is the first slide'
    },
    {
      url:'/assets/images/fille.png',
      title: 'First slide label',
      description: 'this is the first slide'
    },
    {
      url:'/assets/images/raquette.jpeg',
      title: 'Second slide label',
      description: 'this is the second slide'
    },
    {
      url:'/assets/images/terre1.png',
      title: 'First slide label',
      description: 'this is the first slide'
    },
    {
      url:'/assets/images/terre2.png',
      title: 'First slide label',
      description: 'this is the first slide'
    },
    {
      url:'/assets/images/vueduciel.png',
      title: 'First slide label',
      description: 'this is the first slide'
    }
  ];
                        
  currentSlide = 0;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  hidden = false; // Déclarez une entrée pour le statut caché
  autoPlay = true

  next(): void {
   
    let currentSlide =(this.currentSlide + 1) % this.slides.length;
    this.jumpToSlide(currentSlide);
    
  }

  previous() : void{
     let currentSlide= (this.currentSlide - 1 + this.slides.length) % this.slides.length;
     this.jumpToSlide(currentSlide);
  }

  jumpToSlide(index : number) : void { 
    
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, 500)
  }

  constructor(){
    if(this.autoPlay){
      setInterval(()=>{
        this.next();

      },3000)
    }
  }
    
}
