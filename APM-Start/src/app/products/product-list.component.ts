import { Component ,OnDestroy,OnInit } from '@angular/core';
import { IProduct } from './product';  
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
  //selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product List!';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  private _listFilter: string = '';
  sub!: Subscription;
  
  public get listFilter() : string {
    return this._listFilter;
  }

  public set listFilter(v : string) {
    this._listFilter = v;
    console.log('In Setter:', v);
    this.filteredProducts = this.performFilter(v);//TODO filtra con el valor agregado como parametro
  }

  filteredProducts: IProduct[] = [];//TODO: es para guardar en otra lista los productos filtrados y no perder los productos originales
  
  products: IProduct[] = [];

  //TODO: se utiliza un parametro de constructor para definir la dependencia(la clase.servicio que importamos)
  constructor(private productService: ProductService) {

  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct)=>
    product.productName.toLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
      console.log('In OnInit');
      this.sub = this.productService.getProducts().subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = this.products;
          
        },
        error: err =>  this.errorMessage = err
      });
      
      //this.listFilter = 'cart';
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  //TODO: cambia el titulo de la pagina con el parametro de mensaje, al presionar las estrellas de rating del producto
  onRatingClicled(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

}
