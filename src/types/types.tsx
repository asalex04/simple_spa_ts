interface IAddress {
    street: string,
    city: string,
    zipcode: number,
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress,
    phone: number,
    website: string,
    company: {
        name: string
    },
    comment: string
}

export interface IForm {
    name: string
    username: string
    email: string
    street: string
    city: string
    zipcode: number
    phone: number
    website: string
    comment: string
}