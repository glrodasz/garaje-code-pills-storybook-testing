import * as React from "react";
import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import defaultStory, * as stories from "./Button.stories";

const composedStories = composeStories(stories);

describe(`[ ${defaultStory.title} ]`, () => {
  Object.entries(composedStories).forEach(([story, Component]) => {
    it(`should render ${story}`, () => {
      const { asFragment } = render(<Component {...defaultStory.args} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
