import { Category } from "src/app/modules/categories/models/category"


export class CategoryMenu{

    category:Category=new Category

    name:string=""
    get routerLink()
    {
        return "shop/"+this.category.categoryName
    }
}