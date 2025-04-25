export interface SubCategory {
  subCatId: number;
  subName: string;
  quantity: number;
}

export interface IProducts {
  id: number;
  productName: string;
  category: SubCategory[];
  price:number
}
