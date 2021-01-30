export const ActionStatus = {
  NONE: 'none',
  FETCHING: 'fetching',
  REFRESHING: 'refreshing',
  DONE: 'done',
};

export const SearchCriteriaConditionTypes = {
  Equal: 'eq',
  In: 'in',
  GreaterThan: 'gt',
  LessThan: 'lt',
  Between: 'between',
  Finset: 'finset',
  Like: 'like',
};

export const SortDirections = {
  Ascending: 'ASC',
  Descending: 'DESC',
};

export const PageSize = {
  Default: 20,
};

export const Gender = {
  Male: 1,
  Female: 2,
};

export const DateTimeFormat = {
  FullDateTime: 'DD/MM/YYYY hh:mm:ss',
  DateTimeAmPm: 'DD/MM/YYYY hh A',
  DateTime24h: 'DD/MM/YYYY HH:mm',
  Time: 'hh:mm:ss',
  FullDate: 'DD/MM/YYYY',
  TimeHourMinPM: 'HH:mm A',
  FullDateDash: 'DD-MM-YYYY',
  APIFormat: 'YYYY-MM-DD HH:mm:ss',
};

export const PriceFormat = {
  Default: '0,0',
};

export const LimitNumber = {
  MaxAddress: 3,
};

export const csvTypeFiles = [
  'application/csv',
  'application/x-csv',
  'text/csv',
  'text/comma-separated-values',
  'text/x-comma-separated-values',
  'text/tab-separated-values',
  'application/vnd.ms-excel',
];
export const dayComponentColors = {
  paymentCalls: 'red',
  appointmentCalls: 'green',
};

export const snackBarConfig = {
  duration: 5000,
  type: {
    success: 'success',
    error: 'error',
    warning: 'warning',
    info: 'info',
  },
};

export const ModalConfig = {
  userModal: 'user',
  adminModal: 'admin',
};

export const APIAccount = {
  staging: {
    username: 'api',
    password: 'fAnIajQJhFtQjdUIFf1pTdDwr64',
  },
};

export const apiEndpoint = {
  userEndpoint: 'user/v1alpha1',
  teamEndpoint: 'team/v1alpha1',
};

export const apiUrl = {
  getRole: `${apiEndpoint.userEndpoint}/roles`,
  user: {
    create: `${apiEndpoint.userEndpoint}/users`,
    getTeamByUser: `${apiEndpoint.teamEndpoint}/teams/-/members`,
    list: `${apiEndpoint.userEndpoint}/users`,
  },
};
