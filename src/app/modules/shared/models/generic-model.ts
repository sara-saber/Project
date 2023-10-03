export abstract class ResourceModel<T> {
  public id?: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public isActive!: boolean

  constructor(model?: Partial<T>) {
    if (model) {
      Object.assign(this, model);
    }
    if (!this.createdAt) {
      this.createdAt = new Date();
    }
    if (!this.updatedAt) {
      this.updatedAt = new Date();
    }
    if (!this.isActive) {
      this.isActive =false;
    }
  }

  public toJson(): any {
    return JSON.parse(JSON.stringify(this));
  }
}


