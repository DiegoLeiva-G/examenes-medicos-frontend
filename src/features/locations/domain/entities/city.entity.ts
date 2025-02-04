import { type SubStateEntity, type SubStateToSelectEntity } from './subState.entity.ts';

export class CityEntity {
  constructor(
    public id: string,
    public name: string,
    public subStateId: string,
    public createdAt: Date,
    public subState?: SubStateEntity | null,
  ) {}
}

export class CityToSelectEntity implements Pick<CityEntity, 'id' | 'name'> {
  constructor(
    public id: string,
    public name: string,
    public subState?: SubStateToSelectEntity[] | null,
  ) {}
}
