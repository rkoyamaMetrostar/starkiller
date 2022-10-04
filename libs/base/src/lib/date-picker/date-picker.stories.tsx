import { Story, Meta } from '@storybook/react';
import Documentation from '../storybook-utils/documentation';
import { DatePicker } from './date-picker';

export default {
  component: DatePicker,
  title: 'Components/Forms/Date picker',
} as Meta;

const title = 'Date picker';
const whenToUse = 'A date picker helps users select a single date.';
const today = new Date();
const eightDaysAgo = new Date(today);
eightDaysAgo.setDate(eightDaysAgo.getDate() - 8);
const sixtyDaysAgo = new Date(today);
sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);
const twoWeeksFromNow = new Date(today);
twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 14);

const defaultDecorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];

export const Standard: Story = () => {
  return (
    <div className="usa-form-group">
      <label
        className="usa-label"
        id="appointment-date-label"
        htmlFor="date-picker1"
      >
        Appointment date
      </label>
      <div className="usa-hint" id="appointment-date-hint">
        mm/dd/yyyy
      </div>
      <DatePicker
        id="date-picker1"
        name="date-picker-name"
        aria-describedby="appointment-date-label appointment-date-hint"
      />
    </div>
  );
};

Standard.decorators = defaultDecorators;

export const DefaultValue: Story = () => {
  return (
    <div className="usa-form-group">
      <label
        className="usa-label"
        id="appointment-date-label"
        htmlFor="date-picker1"
      >
        Appointment date
      </label>
      <div className="usa-hint" id="appointment-date-hint">
        mm/dd/yyyy
      </div>
      <DatePicker
        id="date-picker1"
        name="date-picker-name"
        aria-describedby="appointment-date-label appointment-date-hint"
        defaultValue={today.toString()}
      />
    </div>
  );
};

DefaultValue.decorators = defaultDecorators;

export const MinMax: Story = () => {
  return (
    <div className="usa-form-group">
      <label
        className="usa-label"
        id="appointment-date-label"
        htmlFor="date-picker1"
      >
        Appointment date
      </label>
      <div className="usa-hint" id="appointment-date-hint">
        mm/dd/yyyy
      </div>
      <DatePicker
        id="date-picker1"
        name="date-picker-name"
        aria-describedby="appointment-date-label appointment-date-hint"
        minDate={sixtyDaysAgo}
        maxDate={twoWeeksFromNow}
      />
    </div>
  );
};

MinMax.decorators = defaultDecorators;

export const DateRange: Story = () => {
  return (
    <div className="usa-form-group">
      <label
        className="usa-label"
        id="appointment-date-label"
        htmlFor="date-picker1"
      >
        Appointment date
      </label>
      <div className="usa-hint" id="appointment-date-hint">
        mm/dd/yyyy
      </div>
      <DatePicker
        id="date-picker1"
        name="date-picker-name"
        aria-describedby="appointment-date-label appointment-date-hint"
        defaultValue={today.toString()}
        dateRange={eightDaysAgo}
      />
    </div>
  );
};

DateRange.decorators = defaultDecorators;

export const Disabled: Story = () => {
  return (
    <div className="usa-form-group">
      <label
        className="usa-label"
        id="appointment-date-label"
        htmlFor="date-picker1"
      >
        Appointment date
      </label>
      <div className="usa-hint" id="appointment-date-hint">
        mm/dd/yyyy
      </div>
      <DatePicker
        id="date-picker1"
        name="date-picker-name"
        aria-describedby="appointment-date-label appointment-date-hint"
        disabled={true}
      />
    </div>
  );
};

Disabled.decorators = defaultDecorators;
