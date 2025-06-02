import {create} from "zustand"

const toggleInstructionsVisible = create((set)=>({
    visibleInstructions: false,
    toggleVisible: () => 
        set((state)=> ({
            visibleInstructions: !state.visibleInstructions
        }))
    }))

export default toggleInstructionsVisible;