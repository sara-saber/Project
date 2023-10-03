import { ResourceModel } from "../../shared/models/generic-model";
import { Image } from "../../shared/models/image-model";

export interface Product {
  
  productName: string
  productImg: Image
  productPrice: number
  categoryName: string
  productDetails: string
}
export class Product extends ResourceModel<Product> implements Product {

  constructor(product?: Partial<Product>) {
    super(product)
  }

}


/*export function showProduct(name:string):Product{
return name=='admin'?new ProductForAdmin:new ProductForUser
}*/