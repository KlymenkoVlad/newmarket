export interface User {
  createdAt: string;
  email: string;
  name: string;
  profilePicUrl: string;
  role: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface Product {
  [key: string]: any;
  _id: string;
  user: User;
  name: string;
  price: number;
  mainPicture: string;
  pictures?: string[];
  description: string;
  quantity: number;
  pastPrice?: number;
  category: string;
  rating: number;
  date: string;
  __v: number;
}
