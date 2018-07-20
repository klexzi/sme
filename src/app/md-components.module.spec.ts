import { MdComponentsModule } from './md-components.module';

describe('MdComponentsModule', () => {
  let mdComponentsModule: MdComponentsModule;

  beforeEach(() => {
    mdComponentsModule = new MdComponentsModule();
  });

  it('should create an instance', () => {
    expect(mdComponentsModule).toBeTruthy();
  });
});
