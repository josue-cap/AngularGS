import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: '././star.component.html',
  styleUrls: ['././star.component.css']
})
export class StartComponent implements OnChanges{
    //TODO: el @Input() nos sirve para declarar una entrada en el componente hijo
    @Input() rating: number = 0;
    cropWidth: number = 75;
    //TODO: este output manda una salida ejecutada por el onClick, el cual se procesa en la clase padre como un evento y se usa como parametro en el html padre como un metodo
    @Output() ratingClicked: EventEmitter<string> =
     new EventEmitter<string>();
    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }
    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating}`);
    }
} 