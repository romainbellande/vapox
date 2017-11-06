export class NgrxItemActions<T> {
  constructor(protected state: T, protected payload: any) {}
}
