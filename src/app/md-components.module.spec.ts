import { MatComponentsModule } from './md-components.module';

describe('MatComponentsModule', () => {
  let mdComponentsModule: MatComponentsModule;

  beforeEach(() => {
    mdComponentsModule = new MatComponentsModule();
  });

  it('should create an instance', () => {
    expect(mdComponentsModule).toBeTruthy();
  });
});
