export class MeasureUnitEntity {
  constructor(
    public id: string,
    public name: string,
    public enabled: boolean,
    public archived?: boolean | null,
    public createdAt?: Date | null,
  ) {}
}

export class MeasureUnitSummaryEntity implements Pick<MeasureUnitEntity, 'id' | 'name' | 'enabled'> {
  constructor(
    public id: string,
    public name: string,
    public enabled: boolean,
  ) {}
}

export class MeasureUnitFormEntity implements Pick<MeasureUnitEntity, 'name' | 'enabled'> {
  constructor(
    public name: string,
    public enabled: boolean,
    public id?: string | null,
  ) {}
}
