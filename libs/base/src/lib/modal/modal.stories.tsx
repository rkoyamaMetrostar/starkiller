import { Story, Meta } from '@storybook/react';
import Documentation from '../storybook-utils/documentation';
import { Modal, ModalSize } from './modal';

export default {
  component: Modal,
  title: 'Components/Modal',
} as Meta;

const title = 'Modal';
const whenToUse =
  'A modal disables page content and focuses the user’s attention on a single task or message.';

export const ModalTypes: Story = () => {
  const heading = 'Are you sure you want to continue?';
  const body = 'You have unsaved changes that will be lost.';
  const footer = (
    <ul className="usa-button-group">
      <li className="usa-button-group__item">
        <button type="button" className="usa-button" data-close-modal>
          Continue without saving
        </button>
      </li>
      <li className="usa-button-group__item">
        <button
          type="button"
          className="usa-button usa-button--unstyled padding-105 text-center"
          data-close-modal
        >
          Go back
        </button>
      </li>
    </ul>
  );

  return (
    <>
      <a
        href="#modal1"
        className="usa-button"
        aria-controls="modal1"
        data-open-modal
      >
        Small Modal
      </a>
      <Modal id="modal1" heading={heading} footer={footer}>
        {body}
      </Modal>
      <a
        href="#modal2"
        className="usa-button"
        aria-controls="modal2"
        data-open-modal
      >
        Large Modal
      </a>
      <Modal
        id="modal2"
        size={ModalSize.Large}
        heading={heading}
        footer={footer}
      >
        {body}
      </Modal>
      <a
        href="#modal3"
        className="usa-button"
        aria-controls="modal3"
        data-open-modal
      >
        No Footer
      </a>
      <Modal id="modal3" heading={heading}>
        {body}
      </Modal>
    </>
  );
};

ModalTypes.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];
