import regions from '../game-data/regions'
import type { FishWithRegions } from '../types/game-data';

    // store unique fish by name
    const fishMap = new Map<string, FishWithRegions>();

    for (const region of regions) 
    {
        for (const fish of region.data) 
        {
        if (fishMap.has(fish.name)) 
        {
            const existingFish = fishMap.get(fish.name)!;
            existingFish.regions.push(region.name);
        } 
        else 
        {
            fishMap.set(fish.name, { ...fish, regions: [region.name] });
        }
        }
    }

    // sort by price descending
    // need to implement further sorting for the table
    const allFish = Array.from(fishMap.values()).sort((a, b) => b.price - a.price);

    export default allFish;