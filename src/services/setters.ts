import {setToStorage} from "./localStorage";
import {STORAGE_NPC, STORAGE_NPC_LIST} from "../constants/storageKeys";
import {getListOfNPCs} from "./retreivers";
import {NPC} from "../constants/types";


export const addNPCToList = (id: string, name: string) => {
    const listOfNPCs = getListOfNPCs();
    listOfNPCs[id] = name;
    setToStorage(STORAGE_NPC_LIST, listOfNPCs);
}

export const saveNPC = (npc: NPC) => {
  setToStorage(STORAGE_NPC + npc.id, npc);
}