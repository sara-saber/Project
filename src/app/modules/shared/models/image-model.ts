import { ResourceModel } from "./generic-model"

export interface Image {
    imgSrc: string
    imgAlt: string
}
export class Image extends ResourceModel<Image> implements Image {
    constructor(img?: Partial<Image>) {
        super(img);
        
    }
}
