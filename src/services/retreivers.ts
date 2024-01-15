import {NPC, NPCList} from "../constants/types";
import {getFromStorage} from "./localStorage";
import {STORAGE_NPC, STORAGE_NPC_LIST} from "../constants/storageKeys";

export const getListOfNPCs = (): NPCList => {
    try {
        return getFromStorage<NPCList>(STORAGE_NPC_LIST);
    } catch (e) {
        return {};
    }
}

export const getNPC = (id: string): NPC => {
    try {
        return getFromStorage<NPC>(STORAGE_NPC + id);
    } catch (e) {
        console.error("Retrieved non existing NPC")
        return {age: 0, eyes: "", features: "", hair: "", id: "", name: "", notes: ""};
    }
}