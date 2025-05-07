

export class AudioEntity {
  constructor(
    public id: string,
    public name: string,
    public path: string | null,
    public type?: string | null,
    public size?: number | null,
    public createdAt?: Date | null,
    public updatedAt?: Date | null,
  ) {}
}

export class AudioGetAllResponseEntity implements Omit<AudioEntity,  'deleted' | 'updatedAt'> {
  constructor(
    public id: string,
    public name: string,
    public path: string | null,
    public type?: string | null,
    public size?: number | null,
    public createdAt?: Date | null,
  ) {}
}

export class AudioGetByIdResponseEntity implements Pick<AudioEntity, 'id'> {
  constructor(
    public id: string,
    public name: string,
    public path: string | null,
    public type?: string | null,
    public size?: number | null,
    public createdAt?: Date | null,
  ) {}
}

export class AudioCreateResponseEntity
  implements Omit<AudioEntity,  'deleted' | 'createdAt' | 'updatedAt'>
{
  constructor(
    public id: string,
    public name: string,
    public path: string | null,
    public type?: string | null,
    public size?: number | null,
  ) {}
}

export class AudioUpdateResponseEntity
  implements
    Pick<
      AudioEntity,
      'id' | 'name' | 'path' | 'type' | 'size'
    >
{
  constructor(
    public id: string,
    public name: string,
    public path: string | null,
    public type?: string | null,
    public size?: number | null,
  ) {}
}

export class AudioDeleteResponseEntity implements Pick<AudioEntity, 'id'> {
  constructor(public id: string) {}
}

export class AudioFormEntity implements Pick<AudioEntity, 'name'> {
  constructor(
    public name: string,
    public path: string | null,
    public type?: string | null,
    public size?: number | null,
    public id?: string | null,
  ) {}
}
