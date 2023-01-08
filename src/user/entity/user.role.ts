import { registerEnumType } from '@nestjs/graphql';
export enum UserRole {
  USER = 'user',
  SELLER = 'seller',
}

registerEnumType(UserRole, {
  name: 'UserRole',
  valuesMap: {
    USER: {
      description: 'user',
    },
    SELLER: {
      description: 'seller',
    },
  },
});
