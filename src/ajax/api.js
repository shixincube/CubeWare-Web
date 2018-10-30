import { get, post } from './http'

export const validate = p => post('/app/validate', p);
export const find = p => post('/user/page/findByAppId', p);
export const login = p => post('/user/login', p);
export const created = p => post('/user/created', p);
