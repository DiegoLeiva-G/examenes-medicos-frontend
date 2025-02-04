interface IEnumObject {
  id: string;
  name: string;
}

export const enumToObjectArray = (enumObject: Record<string | number, string | number>): IEnumObject[] =>
  Object.entries(enumObject)
    .filter(([, value]) => typeof value === 'string')
    .map(([key, value]) => ({ id: key, name: String(value) }));
