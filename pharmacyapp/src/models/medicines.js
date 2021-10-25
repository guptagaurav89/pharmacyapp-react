import { action } from "easy-peasy";

export const medicines = {
    medicinesList:[],
    addMedicine : action((state,payload) => {
        state.medicinesList.push(payload);
    })
}