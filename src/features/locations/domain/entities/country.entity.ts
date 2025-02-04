import { type StateEntity, type StateToSelectEntity } from './state.entity.ts';
import { type PersonEntity } from '../../../person';

export class CountryEntity {
  constructor(
    public id: string,
    public name: string,
    public code: string,
    public nationality: string,
    public demonym: string | null,
    public state?: StateEntity[] | null,
    public person?: PersonEntity[] | null,
  ) {}
}

export class CountryToSelectEntity implements Pick<CountryEntity, 'id' | 'name'> {
  constructor(
    public id: string,
    public name: string,
    public state?: StateToSelectEntity[] | null,
  ) {}
}
