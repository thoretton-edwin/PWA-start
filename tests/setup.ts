import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
