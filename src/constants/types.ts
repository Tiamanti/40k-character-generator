export type Archetype = 'Low Gothic' | 'High Gothic' | 'Archaic' | 'Informal' | 'Esoteric';

export interface NPCList {
    [key: string]: string;
}

export interface NPC {
    id: string;
    name: string;
    age: number;
    eyes: string;
    hair: string;
    features: string;
    notes: string;
}