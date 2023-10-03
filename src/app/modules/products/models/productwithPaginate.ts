
import { ResourceModel } from 'src/app/modules/shared/models/generic-model';
import { Product } from './product';


export interface ProductWithPage {
    page: number
    perPage: number
    data: Product[]

}
export class ProductWithPage extends ResourceModel<ProductWithPage>  {

    constructor(ProductWithPaginate?:Partial<ProductWithPage>) {
        super(ProductWithPaginate)
    }
}