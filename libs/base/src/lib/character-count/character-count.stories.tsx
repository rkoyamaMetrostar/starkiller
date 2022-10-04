import { Story, Meta } from '@storybook/react';
import { Form, FormGroup, Label, TextInput, TextArea } from '../..';
import Documentation from '../storybook-utils/documentation';
import { CharacterCount, CharacterCountContainer } from './character-count';

export default {
  component: CharacterCount,
  title: 'Components/Forms/Character Count',
} as Meta;

const title = 'Character Count';
const whenToUse =
  'Character count helps users know how much text they can enter when there is a limit on the number of characters.';

const defaultDecorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const InputExample: Story = () => {
  return (
    <Form>
      <CharacterCountContainer>
        <FormGroup>
          <Label htmlFor="with-hint-input">Text input</Label>
          <span id="with-hint-input-hint" className="usa-hint">
            This is an input with a character counter.
          </span>
          <TextInput
            id="with-hint-input"
            className="usa-character-count__field"
            maxLength={25}
            name="with-hint-input"
            aria-describedby="with-hint-input-info with-hint-input-hint"
          />
        </FormGroup>
        <CharacterCount id="with-hint-input-info">
          You can enter up to 25 characters
        </CharacterCount>
      </CharacterCountContainer>
    </Form>
  );
};

InputExample.decorators = defaultDecorators;

export const TextAreaExample: Story = () => {
  return (
    <Form>
      <CharacterCountContainer>
        <FormGroup>
          <Label htmlFor="with-hint-textarea">Textarea</Label>
          <span id="with-hint-textarea-hint" className="usa-hint">
            This is a textarea with a character counter.
          </span>
          <TextArea
            id="with-hint-textarea"
            maxLength={50}
            rows={5}
            className="usa-character-count__field"
            name="with-hint-textarea"
            aria-describedby="with-hint-textarea-info with-hint-textarea-hint"
          />
        </FormGroup>
        <CharacterCount id="with-hint-textarea-info">
          You can enter up to 50 characters
        </CharacterCount>
      </CharacterCountContainer>
    </Form>
  );
};

TextAreaExample.decorators = defaultDecorators;
