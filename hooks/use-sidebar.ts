"use client";

import { useUiStore } from "@/store/ui-store";

export function useSidebar() {
    const isOpen = useUiStore((state) => state.sidebarOpen);
    const open = useUiStore((state) => state.openSidebar);
    const close = useUiStore((state) => state.closeSidebar);
    const toggle = useUiStore((state) => state.toggleSidebar);

    return {
        isOpen,
        open,
        close,
        toggle,
    };
}