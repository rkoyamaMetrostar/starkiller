import { Story, Meta } from '@storybook/react';
import Documentation from '../storybook-utils/documentation';
import { Checkbox, CheckboxData, CheckboxGroup } from './checkbox';

export default {
  component: Checkbox,
  title: 'Components/Forms/Checkbox',
} as Meta;

const title = 'Checkbox';
const whenToUse =
  'Checkboxes allow users to select one or more options from a list.';
const checkboxName = 'lorem-checkbox';
const loremWords = ['Lorem', 'Ipsum', 'Dolor', 'Sit'];

export const Standard: Story = () => {
  return (
    <>
      {loremWords.map((word, wordIndex) => (
        <Checkbox
          id={`checkbox${wordIndex}`}
          name={checkboxName}
          label={word}
          value={word.toLowerCase()}
          checked={wordIndex === 0}
          key={wordIndex}
        />
      ))}
    </>
  );
};

Standard.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const Tiled: Story = () => {
  return (
    <>
      {loremWords.map((word, wordIndex) => (
        <Checkbox
          id={`checkbox${wordIndex}`}
          name={checkboxName}
          label={word}
          value={word.toLowerCase()}
          checked={wordIndex === 0}
          isTile={true}
          key={wordIndex}
        />
      ))}
    </>
  );
};

Tiled.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const StandardGroup: Story = () => {
  return (
    <CheckboxGroup
      id="checkbox-group1"
      name={checkboxName}
      data={loremWords.map((word, wordIndex) => {
        return {
          label: word,
          value: word.toLowerCase(),
          checked: wordIndex === 0,
        } as CheckboxData;
      })}
    />
  );
};

StandardGroup.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const TiledGroup: Story = () => {
  return (
    <CheckboxGroup
      id="checkbox-group1"
      name={checkboxName}
      data={loremWords.map((word, wordIndex) => {
        return {
          label: word,
          value: word.toLowerCase(),
          checked: wordIndex === 0,
        } as CheckboxData;
      })}
      areTiles={true}
    />
  );
};

TiledGroup.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];
