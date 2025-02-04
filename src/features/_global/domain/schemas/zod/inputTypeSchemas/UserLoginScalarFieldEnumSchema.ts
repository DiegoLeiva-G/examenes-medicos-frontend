import { z } from 'zod';

export const UserLoginScalarFieldEnumSchema = z.enum(['id', 'userId', 'loginAt']);

export default UserLoginScalarFieldEnumSchema;
