export interface IUserState {
  address: string;
  lensHandle: string;
  avatarUrl: string;
  profileId: string;
  setAddress: (userAddress: string) => void;
  setLensHandle: (lensHandle: string) => void;
  setAvatarUrl: (avatarUrl: string) => void;
  setProfileId: (profileId: string) => void;
}

export interface IActiveRoomsState {
  rooms: string[];
  setAddRooms: (roomName: string) => void;
}
export type IState = IUserState;
