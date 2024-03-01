import { Dayjs } from 'dayjs';
import { IRole } from './roles';
import { IWilaya } from '../types/types';

export interface IUser {
  id?: string;
  phoneNumber?: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  jobTitle?: string;
  createUser?: string;
  createDate?: Dayjs | null;
  updateUser?: Dayjs | null;
  updateDate?: Dayjs | null;
  lastLogon?: Dayjs | null;
  isActive?: boolean;
  advancedUser?: boolean;
  direction?: string;
  directionId?: number;
  roles?: IRole[];
  wilayas?: IWilaya[];
}
export interface IMutationUser {
  id?: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
  directionId: 0;
  createUser: string;
  roleIds: string[];
  updateUser?: string;
}

export interface IUserAD {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
}
