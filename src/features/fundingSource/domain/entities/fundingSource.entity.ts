import { type InvestmentInitiativeEntity } from '../../../investmentInitiative';
import { type ImprovementProjectEntity } from '../../../improvementProject';

export enum FundingSourceType {
  Internal = 'Internal',
  External = 'External',
}

export class FundingSourceEntity {
  constructor(
    public id: string,
    public name: string,
    public type: FundingSourceType,
    public enabled: boolean,
    public createdAt: Date,
    public investmentInitiative?: InvestmentInitiativeEntity | null,
    public improvementProject?: ImprovementProjectEntity | null,
  ) {}
}

export class FundingSourceSummaryEntity implements Pick<FundingSourceEntity, 'id' | 'name' | 'type' | 'enabled'> {
  constructor(
    public id: string,
    public name: string,
    public type: FundingSourceType,
    public enabled: boolean,
  ) {}
}
