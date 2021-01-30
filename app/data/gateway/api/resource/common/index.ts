import Type from '../../type';
import { getApiController } from '../index';
import { IResource } from '../../../../../shared/interfaces/common/resource';

const StoreConfig = (storeView?: string): IResource => ({
  Type: Type.Admin,
  Path: `${getApiController(storeView)}/store/storeConfigs`,
});

const CurrencyConfig = (storeView?: string): IResource => ({
  Type: Type.Admin,
  Path: `${getApiController(storeView)}/directory/currency`,
});

const Country = (storeView?: string): IResource => ({
  Type: Type.Admin,
  Path: `${getApiController(storeView)}/directory/countries`,
});

const CountryDetail = (countryId: string, storeView?: string): IResource => ({
  Type: Type.Admin,
  Path: `${getApiController(storeView)}/directory/countries/${countryId}`,
});

export default {
  StoreConfig,
  CurrencyConfig,
  Country,
  CountryDetail,
};
