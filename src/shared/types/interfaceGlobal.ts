
export interface SubCategory {
  subId: string;
  subName: string;
}

export interface IProducts {
  categoryName: string;
  img: string;
  subCategory: SubCategory[];
  id: string;
}

export interface IMycommand{
  rolUsers:string,
  userName:string
  userAvatar:string,
  userPhoneNumber:string
  id:string
}