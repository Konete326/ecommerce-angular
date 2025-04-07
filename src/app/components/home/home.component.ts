import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { ClothComponent } from '../cloth/cloth.component';

@Component({
  selector: 'app-home',
  imports: [SliderComponent,ClothComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
