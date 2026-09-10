import { create } from 'zustand';

export const useLocationStore = create((set) => ({
  usersLocations: [
    {
      id: "1",
      name: "Արման (Ադմին)",
      lat: 40.1792,
      lng: 44.4991,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
    },
    // Այստեղ կավելանան այն օգտատերերը, ովքեր միացրել են "Share location" (opt-in)
  ],
  setUsersLocations: (locations) => set({ usersLocations: locations }),
  updateUserLocation: (user) =>
    set((state) => ({
      usersLocations: [
        ...state.usersLocations.filter((u) => u.id !== user.id),
        user,
      ],
    })),
}));