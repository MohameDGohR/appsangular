import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take, switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  category$ ;
  errorshere = '';
  products: any = {} ;
  id ;
  constructor(private routeact: ActivatedRoute ,
              private router: Router,
              private catser: CategoriesService,
              private prod: ProductsService) {
    this.category$ = this.catser.getcategories();
    this.id = this.routeact.snapshot.paramMap.get('id');
    if (this.id){
        // console.log('id is ' + id);
        this.prod.getByID(this.id).pipe(take(1)).subscribe(udf =>   {
          console.log(udf);
          if (udf){
          this.products = udf ;
        }
      });
    }
   }

  ngOnInit(): void {
  }
  save(p){
    if (p.valid){
      if (this.id )
      {
       console.log('here is id ' + this.id );
       this.prod.update(this.id, p.value);
      }else{
        this.prod.create(p.value);
      }
      this.router.navigateByUrl('admin/products');

    }else{
      this.errorshere = 'enter valid data';
    }

  }

  delete(){
    if (confirm('are you want to delete the product ?'))
    {
      this.prod.delete(this.id) ;
    }
    this.router.navigateByUrl('admin/products');
  }



}
