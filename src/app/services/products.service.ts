import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db: AngularFireDatabase) { }

  create(product){
     this.db.list('/products').push(product);
  }

  getpro()
  {
    return this.db.list('/products').snapshotChanges();
  }

getByID(productId){
  return this.db.object('/products/' + productId).valueChanges();
}


update(pid: string, product){
return this.db.object('/products/' + pid).update(product);
}
delete(pid: string){
  return this.db.object('/products/' + pid).remove();
}

}
