import _process, { createProcess } from '../process';

describe('process', () => {
  describe('createProcess', () => {
    const proc = createProcess();
    it('Exports default object', () => {
      expect(typeof _process).toBe('object');
    });
    it('.getuid() and .getgid()', () => {
      expect(typeof proc.getuid?.() ?? 0).toBe('number');
      expect(typeof proc.getgid?.() ?? 0).toBe('number');
    });
    it('.cwd()', () => {
      expect(typeof proc.cwd()).toBe('string');
    });
    it('.nextTick()', done => {
      expect(typeof proc.nextTick).toBe('function');
      proc.nextTick(done);
    });
    it('.env', () => {
      expect(typeof proc.env).toBe('object');
    });
  });
});
