export interface USER {
    id: number,
    email: string,
    username: string
    password: string,
    name: {
        firstname: string,
        lastname: string
    },
    address: {
        city: string,
        street: string,
        number: number,
        zipcode: string,
        geolocation: {
            lat: number,
            long: number
        }
    },
    phone: number
}