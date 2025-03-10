export interface IBook {
  name: string;
  author: string;
}

export class Book implements IBook {
  name = '';
  author = '';

  constructor(options?: Partial<IBook>) {
    Object.assign(this, options);
  }
}
