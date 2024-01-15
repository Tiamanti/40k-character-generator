import {Archetype} from "../constants/types";
import {NAME_ARCHAIC, NAME_ESOTERIC, NAME_HIGH_GOTHIC, NAME_INFORMAL, NAME_LOW_GOTHIC} from "../constants/names";

const getRandomFromArray = <T>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
};

export const getName = (archetype: Archetype): string => {
    switch (archetype) {
        case "Low Gothic":
            return getRandomFromArray(NAME_LOW_GOTHIC);
        case "High Gothic":
            return getRandomFromArray(NAME_HIGH_GOTHIC);
        case "Archaic":
            return getRandomFromArray(NAME_ARCHAIC);
        case "Informal":
            return getRandomFromArray(NAME_INFORMAL);
        case "Esoteric":
            return getRandomFromArray(NAME_ESOTERIC);
    }
}