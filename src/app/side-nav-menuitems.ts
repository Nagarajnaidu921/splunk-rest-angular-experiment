export interface SideNavItem {
    path?: string;
    text: string;
    icon: string;
    submenuItems?: any[];
}

export const sidenavMenuItems: SideNavItem[] = [
    {
        path: '/',
        text: 'Home',
        icon: 'home',
    },
    {
        path: '/dash',
        text: 'Dashboard',
        icon: 'dashboard',
    },
    {
        path: '/users',
        text: 'Users',
        icon: 'account_circle',
    },
    {
        text: 'Categories',
        icon: 'category',
        submenuItems: [
            {
                path: '/categories',
                text: 'List',
                icon: 'list',
            },
            {
                path: '/categories/new',
                text: 'Create',
                icon: 'list',
            },
        ]
    },
   
   
];
