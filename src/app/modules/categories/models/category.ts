import { ResourceModel } from "../../shared/models/generic-model";
export interface Category {
  categoryName: string
  description: string
  categoryId: number

}
export class Category extends ResourceModel<Category> {
  constructor(category?: Partial<Category>) {
    super(category)
  }
}