import { create } from "zustand";

interface UserState {
  name: string;
  setName: (name: string) => void;
  nameSubmitted: boolean;
  setNameSubmitted: (nameSubmitted: boolean) => void;
  agreed: boolean;
  setAgreed: (agreed: boolean) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  name: "",
  setName: (name) => set({ name }),
  nameSubmitted: false,
  setNameSubmitted: (nameSubmitted: boolean) =>
    set({ nameSubmitted: Boolean(nameSubmitted) }),
  agreed: false,
  setAgreed: (agreed: boolean) => set({ agreed: Boolean(agreed) }),
}));
