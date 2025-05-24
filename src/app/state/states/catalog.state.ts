import { IAbout, IHero, IJobs, IMenu, IStudies } from "@Interfaces/global.interface";

export interface CatalogState {
    menu: IMenu[];
    about: IAbout[];
    images: string[];
    hero: IHero[];
    studies: IStudies[];
    jobs: IJobs[];
}