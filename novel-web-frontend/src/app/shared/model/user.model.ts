export interface BaseUser {
  id: string;
  email: string;
  firstname?: string;
  lastname?: string;
  dob?: Date;
  phoneNumber?: string;
  imageUrl?: string;
  createdDate?: Date;
  dbId?: number;
}

export interface ConnectedUser extends BaseUser {
  roles: string[];
  userAddresses?: UserAddress[];
}

export interface UserAddress {
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}
export interface ShowUser{
  email: string;
  firstname?: string;
  lastname?: string;
  dob?: Date;
  phoneNumber?: string;
  createdDate?: Date;
  roles: string[];
  userAddresses?: UserAddress[];

}
