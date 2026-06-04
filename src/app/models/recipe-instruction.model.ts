export interface RecipeInstruction{
  _id: number; // underscore per adeguarlo a MongoDB
  title: string;
  presentation: string;
  ingredients: string;
  preparation: string;
  conservation: string;
  suggestion: string;
  curiosita: string;
}
