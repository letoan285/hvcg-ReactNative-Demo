export const ProductTypeFilter = [
  {
    id: 0,
    value: '/products/types/motor',
    label: 'Car Insurance',
    title: 'Car Insurance',
  },
  {
    id: 1,
    value: '/products/types/health',
    label: 'Health Insurance',
    title: 'Health Insurance',
  },
  {
    id: 2,
    value: '/products/types/life',
    label: 'Life Insurance',
    title: 'Life Insurance',
  },
];

export const LeadTypeFilter = [
  { id: 0, value: 'new', label: 'New', title: 'new' },
  { id: 1, value: 'retainer', label: 'Retainer', title: 'retainer' },
  { id: 2, value: 'renewal', label: 'Renewal', title: 'renewal' },
];

export const UserFilter = [
  { key: '1', id: 0, value: 'Siriwan', title: 'Siriwan', label: 'Siriwan' },
  { key: '2', id: 1, value: 'Pithi', title: 'Pithi', label: 'Pithi' },
  { key: '3', id: 2, value: 'Pimpicha', title: 'Pimpicha', label: 'Pimpicha' },
];

export const RoleFilter = [
  { id: 1, title: 'Admin', value: 'Admin' },
  { id: 2, title: 'Contact Center Manager', value: 'Manager' },
  { id: 3, title: 'Contact Center Supervisor', value: 'Supervisor' },
  { id: 4, title: 'Contact Center Sale Agent', value: 'Sale Agent' },
  { id: 5, title: 'Contact Center Inbound Agent', value: 'Inbound Agent' },
];

export const RoleFilter2 = [
  {
    name: 'roles/admin',
    createTime: '2020-08-01T00:00:00Z',
    updateTime: '2020-08-01T00:00:00Z',
    deleteTime: null,
    createBy: 'users/builtin',
    displayName: 'Admin',
  },
  {
    name: 'roles/manager',
    createTime: '2020-08-01T00:00:00Z',
    updateTime: '2020-08-01T00:00:00Z',
    deleteTime: null,
    createBy: 'users/builtin',
    displayName: 'Manager',
  },
  {
    name: 'roles/supervisor',
    createTime: '2020-08-01T00:00:00Z',
    updateTime: '2020-08-01T00:00:00Z',
    deleteTime: null,
    createBy: 'users/builtin',
    displayName: 'Supervisor',
  },
  {
    name: 'roles/sales',
    createTime: '2020-08-01T00:00:00Z',
    updateTime: '2020-08-01T00:00:00Z',
    deleteTime: null,
    createBy: 'users/builtin',
    displayName: 'Sales agent',
  },
  {
    name: 'roles/inbound',
    createTime: '2020-08-01T00:00:00Z',
    updateTime: '2020-08-01T00:00:00Z',
    deleteTime: null,
    createBy: 'users/builtin',
    displayName: 'Inbound agent',
  },
];

export const TeamFilter = [
  { id: 0, value: 'Team A', label: 'Team A', title: 'Team A', productId: 0 },
  { id: 1, value: 'Team B', label: 'Team B', title: 'Team B', productId: 1 },
  { id: 2, value: 'Team C', label: 'Team C', title: 'Team C', productId: 2 },
];
