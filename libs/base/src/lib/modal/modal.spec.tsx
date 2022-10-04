import { fireEvent, render, RenderOptions } from '@testing-library/react';
import { ReactNode } from 'react';
import Modal, { ModalSize } from './modal';

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Wrapper, ...options });
const Wrapper = ({ children }: { children?: ReactNode }) => (
  <div>{children}</div>
);

describe('Modal', () => {
  const footer = (
    <button type="button" className="usa-button" data-close-modal>
      Close
    </button>
  );

  it('should render a default modal with no footer successfully', () => {
    const { baseElement } = customRender(
      <Modal id="modal1" heading="Modal 1">
        Body
      </Modal>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render a small modal successfully', () => {
    const { baseElement } = customRender(
      <Modal
        id="modal1"
        size={ModalSize.Small}
        heading="Modal 1"
        footer={footer}
      >
        Body
      </Modal>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render a large modal successfully', () => {
    const { baseElement } = customRender(
      <Modal
        id="modal1"
        size={ModalSize.Large}
        heading="Modal 1"
        footer={footer}
      >
        Body
      </Modal>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render a default modal with no footer successfully', () => {
    const { baseElement } = customRender(
      <Modal id="modal1" heading="Modal 1">
        Body
      </Modal>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should open a modal successfully', () => {
    const { baseElement } = customRender(
      <div>
        <a
          href="#modal1"
          id="btn1"
          className="usa-button"
          aria-controls="modal1"
          data-open-modal
        >
          Open
        </a>
        <Modal id="modal1" heading="Modal 1" footer={footer}>
          Body
        </Modal>
      </div>
    );
    const button = baseElement.querySelector('#btn1') as Element;
    fireEvent.click(button);

    expect(document.querySelectorAll('.usa-modal').length).toEqual(1);
  });
});
