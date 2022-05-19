import { ref, computed }  from 'Vue'

export const collapsed = ref(false);
export const toggleSideBar = () => {
    collapsed.value = !collapsed.value;
}

export const sidebar_Width = 20;
export const sidebarWidthCollapsed = 10;
export const sidebarWidth = computed(() => `${collapsed.value ? sidebarWidthCollapsed : sidebar_Width}rem`)