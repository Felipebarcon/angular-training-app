export interface Country {
  _id: string;
  name?: { [key: string]: string };
  capital?: string;
  flags?: { [key: string]: string };
  population?: string;
  area?: number;
}
