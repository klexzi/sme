import { MatComponentsModule } from './md-components.module';

describe('MdComponentsModule', () => {
  let mdComponentsModule: MatComponentsModule;

  beforeEach(() => {
    mdComponentsModule = new MatComponentsModule();
  });

  it('should create an instance', () => {
    expect(mdComponentsModule).toBeTruthy();
  });
});
