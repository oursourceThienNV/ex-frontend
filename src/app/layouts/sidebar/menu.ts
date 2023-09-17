import { MenuItem } from './menu.model';
export const MENU_ADMIN: MenuItem[] = [
  {
    id: 10,
    label: 'Quản lý data',
    icon: 'bxs-shopping-bag',
    subItems: [
      {
        id: 11,
        label: 'Quản lý data',
        link: '/pages/category/product',
        parentId: 10
      }
    ]
  }
];
export const MENU_BID: MenuItem[] = [
  {
    id: 1,
    label: 'Cấu hình ',
    icon: 'bx-home-circle',
    subItems: [
     {
        id: 6,
        label: 'Quản lý người dùng',
        link: '/pages/category/users',
        parentId: 1
      },
      {
        id: 7,
        label: 'Kiểm tra file',
        link: '/pages/category/check-file',
        parentId: 1
      }
    ]
  },
  {
    id: 10,
    label: 'Quản lý hồ sơ',
    icon: 'bxs-shopping-bag',
    subItems: [
      {
        id: 11,
        label: 'Quản lý dự án',
        link: '/pages/category/product',
        parentId: 10
      },
      {
        id: 11,
        label: 'Quản lý hsđk',
        link: '/pages/category/product-register',
        parentId: 10
      },
      {
        id: 11,
        label: 'Quản lý KQLCNĐT',
        link: '/pages/category/product-result',
        parentId: 10
      },
      {
        id: 11,
        label: 'Kết quả LCNĐT Công khai',
        link: '/pages/category/product-result-public',
        parentId: 10
      },

    ]
  }
];
export const MENU_INVESTOR: MenuItem[] = [
  {
    id: 1,
    label: 'Cấu hình ',
    icon: 'bx-home-circle',
    subItems: [
     {
        id: 6,
        label: 'Quản lý người dùng',
        link: '/pages/category/users',
        parentId: 1
      },
      {
        id: 7,
        label: 'Kiểm tra file',
        link: '/pages/category/check-file',
        parentId: 1
      }
    ]
  },
  {
    id: 10,
    label: 'Quản lý hồ sơ',
    icon: 'bxs-shopping-bag',
    subItems: [
      {
        id: 11,
        label: 'Quản lý dự án',
        link: '/pages/category/product',
        parentId: 10
      },
      {
        id: 11,
        label: 'Quản lý hsđk',
        link: '/pages/category/product-register',
        parentId: 10
      },
      {
        id: 11,
        label: 'Kết quả LCNĐT Công khai',
        link: '/pages/category/product-result-public',
        parentId: 10
      },

    ]
  }
];


