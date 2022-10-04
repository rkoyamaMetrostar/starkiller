import { Story, Meta } from '@storybook/react';
import { ChangeEvent, FormEvent, useState } from 'react';
import Documentation from '../storybook-utils/documentation';
import { Form } from './form';
import {
  FormGroup,
  ErrorMessages,
  Button,
  TextInput,
  Label,
  ButtonGroup,
} from '../..';

export default {
  component: Form,
  title: 'Components/Forms/Form',
} as Meta;

const title = 'Form';
const whenToUse = 'A form allows users to enter information into a page.';

const defaultDecorators = [
  (Story: Story) => (
    <div className="margin-left-05">
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </div>
  ),
];

export const BasicForm: Story = () => {
  const [name, setName] = useState('');
  const [formSubmittedLabel, setFormSubmittedLabel] = useState('');
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (name === '') {
      setFormSubmittedLabel(`Form submitted with no value`);
    } else {
      setFormSubmittedLabel(`Form submitted with: ${name}`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="input1">Name</Label>
        <TextInput
          id="input1"
          name="input1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <ButtonGroup>
        <Button id="submit" type="submit">
          Submit
        </Button>
      </ButtonGroup>
      <Label>{formSubmittedLabel}</Label>
    </Form>
  );
};

BasicForm.decorators = defaultDecorators;

export const FormWithValidation: Story = () => {
  const [name, setName] = useState('');
  const [errors, setErrors] = useState([] as string[]);
  const [formSubmittedLabel, setFormSubmittedLabel] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event: ChangeEvent): void => {
    const field = event.target as HTMLInputElement;
    const value = field.value;
    const errors: string[] = [];
    if (value === '') {
      errors.push('This field is required.');
      setIsValid(false);
    } else {
      errors.length = 0;
      setIsValid(true);
    }

    setName(value);
    setErrors(errors);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setFormSubmittedLabel(`Form submitted with: ${name}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup errors={errors}>
        <Label htmlFor="input1">Name</Label>
        <TextInput
          id="input1"
          name="input1"
          value={name}
          onChange={handleChange}
        />
        <ErrorMessages errors={errors} />
      </FormGroup>
      <ButtonGroup>
        <Button id="submit" type="submit" disabled={!isValid}>
          Submit
        </Button>
      </ButtonGroup>
      <Label>{formSubmittedLabel}</Label>
    </Form>
  );
};

FormWithValidation.decorators = defaultDecorators;
