import Types from '../types';

const saveLang = (payload: any) => ({
  type: Types.SAVELANG,
  payload,
});
export { saveLang };