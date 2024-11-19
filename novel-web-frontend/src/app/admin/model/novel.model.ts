import { FormControl, FormRecord } from '@angular/forms';


export interface NovelGenre {
  publicId?: string;
  name?: string;
}

export interface NovelPicture {
  file: File;
  mimeType: string;
}

export interface BaseNovel {
  brand: string;
  color: string;
  description: string;
  name: string;
  genre: NovelGenre;
  featured: boolean;
  picture: NovelPicture;
}

export interface Novel extends BaseNovel {
  publicId: string;
}

export type CreateGenreFormContent = {
  name: FormControl<string>;
};

export type CreateNovelFormContent = {
  brand: FormControl<string>;
  color: FormControl<string>;
  description: FormControl<string>;
  name: FormControl<string>;
  price: FormControl<number>;
  genre: FormControl<string>;
  featured: FormControl<boolean>;
  pictures: FormControl<NovelPicture[]>;
  stock: FormControl<number>;
};

export interface ProductFilter {
  genre?: string | null;
  sort: string[];
}

export type FilterProductsFormContent = {
  sort: FormControl<string>;
}

export interface ProductFilterForm {
  sort: string
}
