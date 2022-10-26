import create from "zustand";

// Types
import { IState } from "./storeTypes";

// Slices
import createUserSlice from "./createUserSlice";

const useClientStore = create<IState>()((...a) => ({
  ...createUserSlice(...a),
}));

export default useClientStore;
