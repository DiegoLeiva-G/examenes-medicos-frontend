import { type SubStateEntity, type SubStateToSelectEntity } from './subState.entity.ts';
import { type CountryEntity, type CountryToSelectEntity } from './country.entity.ts';

export class StateEntity {
  constructor(
    public id: string,
    public name: string,
    public code: string,
    public countryId: string,
    public correlative?: number | null,
    public country?: CountryEntity | null,
    public subState?: SubStateEntity[] | null,
  ) {}
}

export class StateToSelectEntity implements Pick<StateEntity, 'id' | 'name'> {
  constructor(
    public id: string,
    public name: string,
    public country?: CountryToSelectEntity | null,
    public subState?: SubStateToSelectEntity[] | null,
  ) {}
}
