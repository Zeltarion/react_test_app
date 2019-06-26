export const API_PREFIX = '/api/v1/';
export const PASSWORD_RECOVERY_PAGE = '/password-recovery';
export const LOGIN_PAGE = '/login';
export const START_PAGE = '/';

export const VALIDATION = {
  /*eslint max-len: 0, no-useless-escape: 0*/
  EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PASSWORD: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
  TOKEN: /^\w{8}\-\w{4}\-\w{4}\-\w{4}\-\w{12}$/,
  FILE_STORAGE_ITEM_NAME: /([\/:*?"<>|'%$#@!()+=;`])|(^[\s]+$)/,
};