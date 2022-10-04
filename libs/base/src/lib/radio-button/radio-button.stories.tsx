import { Story, Meta } from '@storybook/react';
import Documentation from '../storybook-utils/documentation';
import { RadioButton, RadioButtonData, RadioButtonGroup } from './radio-button';

export default {
  component: RadioButton,
  title: 'Components/Forms/Radio Button',
} as Meta;

const title = 'Radio Button';
const whenToUse =
  'Radio buttons allow users to select exactly one choice from a group.';
const radioButtonName = 'lorem-radio-button';
const loremWords = ['Lorem', 'Ipsum', 'Dolor', 'Sit'];

export const Standard: Story = () => {
  return (
    <>
      {loremWords.map((word, wordIndex) => (
        <RadioButton
          id={`radio-button${wordIndex}`}
          name={radioButtonName}
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
        <RadioButton
          id={`radio-button${wordIndex}`}
          name={radioButtonName}
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
    <RadioButtonGroup
      id="radio-button-group1"
      name={radioButtonName}
      data={loremWords.map((word, wordIndex) => {
        return {
          label: word,
          value: word.toLowerCase(),
          checked: wordIndex === 0,
        } as RadioButtonData;
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
    <RadioButtonGroup
      id="radio-button-group1"
      name={radioButtonName}
      data={loremWords.map((word, wordIndex) => {
        return {
          label: word,
          value: word.toLowerCase(),
          checked: wordIndex === 0,
        } as RadioButtonData;
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
