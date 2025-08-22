'use client';

import {create} from "zustand";

interface UIState {
    sidebarOpen: boolean;
}


const useUIStore = create<UIState>((set) => ({
    sidebarOpen: true,
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}))