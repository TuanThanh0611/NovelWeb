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
  title: string; // Dữ liệu chỉ cần kiểu string
  authName: string|undefined;
  description: string;
  genres:NovelGenre[];
  cover: string;
}
export interface CardNovelInfo {
  title: string;
  publicId: string;
  chapterNumber: number;
  ranking: number;
  rating: number;
  cover: string;
}
export interface NovelPageInfo {
  title: string;
  subtitle: string;
  authName: string;
  description: string;
  genres: NovelGenre[];
  status:string;
  publicId: string;
  views: number;
  chapterNumber: number;
  ranking: number;
  rating: number;
  cover: string;

}
export interface Novel extends BaseNovel {
  publicId: string;
}

export type CreateGenreFormContent = {
  name: FormControl<string>;
};

export type CreateNovelFormContent = {
  title: FormControl<string>;
  authName: FormControl<string>;
  description: FormControl<string>;
  genres: FormControl<NovelGenre[]>;
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
