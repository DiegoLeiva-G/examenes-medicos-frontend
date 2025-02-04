import { type CityEntity, type CityToSelectEntity } from './city.entity.ts';
import { type StateEntity, type StateToSelectEntity } from './state.entity.ts';

export class SubStateEntity {
  constructor(
    public id: string,
    public name: string,
    public stateId: string,
    public state?: StateEntity | null,
    public city?: CityEntity[] | null,
  ) {}
}

export class SubStateToSelectEntity implements Pick<SubStateEntity, 'id' | 'name'> {
  constructor(
    public id: string,
    public name: string,
    public city?: CityToSelectEntity[] | null,
    public state?: StateToSelectEntity | null,
  ) {}
}
