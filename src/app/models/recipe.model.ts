export interface Recipe{
  _id: number; // underscore per adeguarlo a MongoDB
  title: string;
  description: string;
  image: string;
  difficulty: number;
  date: string;
  published: boolean;
}
