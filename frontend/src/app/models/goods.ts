
export class Goods {
    code: string
    name: string
    unit: string
    tax: number
    type: string // za ugostitelje

    countryOfOrigin: string
    foreignName: string
    barCode: string
    manufacturer: string
    tariff: number
    taxType: string
    amount: number
    description: string
    declaration: string

    storage: string
    purchasingPrice: number
    sellingPrice: number
    onStock: number
    minWanted: number
    maxWanted: number
}