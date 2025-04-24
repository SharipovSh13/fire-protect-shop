interface SubCategory {
  subCatId: number;
  subName: string;
  quantity: number;
}

export interface IProducts {
  id: string;
  productName: string;
  category: SubCategory[];
}
