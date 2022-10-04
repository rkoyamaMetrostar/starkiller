import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, FormGroup, Label, TextInput, TextArea } from '../..';
import { CharacterCount, CharacterCountContainer } from './character-count';

describe('CharacterCount', () => {
  const renderCharacterCountInputSample = () =>
    render(
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

  it('should render successfully', () => {
    const { baseElement } = renderCharacterCountInputSample();
    expect(baseElement).toBeTruthy();
  });

  it('should update character count when typing into input', () => {
    const { baseElement } = renderCharacterCountInputSample();
    const characterCountElement = baseElement.querySelector(
      '.usa-character-count__message'
    ) as HTMLSpanElement;
    const input = baseElement.querySelector('input') as HTMLInputElement;

    expect(characterCountElement.textContent).toBe('25 characters allowed');
    userEvent.type(input, 'Hello World'); // 11 characters
    expect(characterCountElement.textContent).toBe(
      `${25 - 11} characters left`
    );
    userEvent.clear(input);
    expect(characterCountElement.textContent).toBe('25 characters allowed');
  });

  const renderCharacterCountTextAreaSample = () =>
    render(
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

  it('should render successfully', () => {
    const { baseElement } = renderCharacterCountTextAreaSample();
    expect(baseElement).toBeTruthy();
  });

  it('should update character count when typing into text area', () => {
    const { baseElement } = renderCharacterCountTextAreaSample();
    const characterCountElement = baseElement.querySelector(
      '.usa-character-count__message'
    ) as HTMLSpanElement;
    const textArea = baseElement.querySelector(
      'textarea'
    ) as HTMLTextAreaElement;

    expect(characterCountElement.textContent).toBe('50 characters allowed');
    userEvent.type(textArea, 'Hello World'); // 11 characters
    expect(characterCountElement.textContent).toBe(
      `${50 - 11} characters left`
    );
    userEvent.clear(textArea);
    expect(characterCountElement.textContent).toBe('50 characters allowed');
  });
});
