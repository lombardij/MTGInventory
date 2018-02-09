export interface ICard {
    name: string,
    colors: string[],
    manaCost: string,
    type: string,
    supertypes: string[],
    types: string[],
    subtypes:string[],
    rarity: string,
    imageUrl: string,
    manaImages: string[],
    set: string,
    setName: string
}

export interface ICardCollection {
    cards: ICard[]
}