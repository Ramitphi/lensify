import { StateCreator } from "zustand";

import { IUserState, IState } from "./storeTypes";

const createUserSlice: StateCreator<IState, [], [], IUserState> = (set) => ({
  address: "",
  lensHandle: "",
  avatarUrl: "",
  profileId: "",
  setAddress: (userAddress) => {
    set(() => ({ address: userAddress }));
  },
  setLensHandle: (lensHandle) => {
    set(() => ({ lensHandle }));
  },
  setAvatarUrl: (avatarHandle) => {
    set(() => ({ avatarUrl: avatarHandle }));
  },
  setProfileId: (profileId) => {
    set(() => ({ profileId }));
  },
});
export default createUserSlice;
