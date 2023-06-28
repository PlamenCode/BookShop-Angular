export interface Book{
    name: string,
    author: string,
    img: string,
    price: number,
    description: string,
    // _id: string
};

export interface BookId{
    name: string,
    author: string,
    img: string,
    price: number,
    description: string,
    ownerId: string,
    _id: string
}

export interface createForm{
    name: string,
    author: string,
    img: string,
    price: number,
    description: string
}