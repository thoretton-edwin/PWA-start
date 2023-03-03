import { expect, test as base } from '@playwright/test';
import {
  locatorFixtures as fixtures,
  LocatorFixtures as TestingLibraryFixtures,
} from '@playwright-testing-library/test/fixture';

const test = base.extend<TestingLibraryFixtures>(fixtures);

test('has title', async ({ screen }) => {
  await screen.goto('http://localhost:3000/');

  await expect(screen).toHaveTitle(/Chromatic Tuner/i);
});

test('has heading title too', async ({ screen }) => {
  await screen.goto('http://localhost:3000/');

  const titleLocator = screen.getByTestId('app-title');
  await expect(titleLocator).toHaveText(/Chromatic Tuner/i);
});
