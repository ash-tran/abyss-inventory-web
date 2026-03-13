// define the structure of a fish item

interface Fish {
  name: string;
  rarity: string;
  price: number;
  weight: (number | string)[]
  image: string;
  verified: number;
}

interface fishWithRegions extends Fish {
  regions: string[]
}

declare module '../game-data/forgotten-deep' {
  const forgottenDeep: Fish[];
  export default forgottenDeep;
}

declare module '../game-data/ancient-sands' {
  const ancientSands: Fish[];
  export default ancientSands;
}

declare module '../game-data/ocean' {
  const ocean: Fish[];
  export default ocean;
}

declare module '../game-data/spirit-roots' {
  const spiritRoots: Fish[];
  export default spiritRoots;
}

declare module '../game-data/sunken-wilds' {
  const sunkenWilds: Fish[];
  export default sunkenWilds;
}

declare module '../game-data/angler-cave' {
  const anglerCave: Fish[];
  export default anglerCave;
}