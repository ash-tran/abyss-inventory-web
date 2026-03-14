// define the structure of a mutation
export interface Mutation {
  rarity: string
  region: string
  multiplier: number
}

// define the structure of a star
export interface Star {
  value: number
  multiplier: number
}

// define the structure of a region
export interface Region {
  name: string
}

// define the structure of a fish item
export interface Fish {
  name: string;
  rarity: string;
  price: number;
  weight: (number | string)[]
  image: string;
  verified: number;
}

export interface FishWithRegions extends Fish {
  regions: string[]
}