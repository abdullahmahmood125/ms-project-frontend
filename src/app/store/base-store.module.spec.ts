import { BaseStoreModule } from './base-store.module';

describe('BaseStoreModule', () => {
  let baseStoreModule: BaseStoreModule;

  beforeEach(() => {
    baseStoreModule = new BaseStoreModule();
  });

  it('should create an instance', () => {
    expect(baseStoreModule).toBeTruthy();
  });
});
