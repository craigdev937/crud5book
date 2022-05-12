export interface IData {
    title: string,
    first: string,
    last: string,
    age: number,
    info: string
};

export interface IBook extends IData {
    _id: string
};

export interface IBookState {
    books: IBook[],
    loading: boolean,
    error: string | null
};


