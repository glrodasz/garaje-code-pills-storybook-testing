import { within, userEvent } from '@storybook/testing-library';

import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const LoggedOut = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await LoggedIn.play({ canvasElement });

    const logoutButton = await canvas.getByRole('button', {
      name: /Log out/i,
    });

    await userEvent.click(logoutButton);
  }
};

// More on interaction testing: https://storybook.js.org/docs/7.0/react/writing-tests/interaction-testing
export const LoggedIn = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};
