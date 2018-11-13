import { MdcModule } from './mdc.module';

describe('MdcModule', () => {
  let mdcModule: MdcModule;

  beforeEach(() => {
    mdcModule = new MdcModule();
  });

  it('should create an instance', () => {
    expect(mdcModule).toBeTruthy();
  });
});
