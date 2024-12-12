export function styleFormDivWrapper() {
  const formDiv = document.querySelector('.form-div-wrapper');
  formDiv.classList.add(
    'py-10',
    'md:py-20',
    'w-full',
    'flex',
    'flex-col',
    'gap-5',
    'justify-center',
    'items-center',
    'mx-4'
  );
}

export function styleForm() {
  const form = document.querySelector('.form');
  form.classList.add(
    'flex',
    'flex-col',
    'gap-[25px]',
    'max-w-[600px]',
    'w-full',
    'h-full'
  );
}

export function styleLabelInputWrapper() {
  const targetDiv = document.querySelectorAll('.label-input-wrapper');

  targetDiv.forEach((div) => {
    div.classList.add('flex', 'flex-col', 'gap-2', 'mx-4', 'relative');
  });
}

export function styleLabel() {
  const targetLabel = document.querySelectorAll('.label');

  targetLabel.forEach((input) => {
    input.classList.add('text-xs', 'md:text-base');
  });
}

export function styleInput() {
  const targetInput = document.querySelectorAll('.input');

  targetInput.forEach((input) => {
    input.classList.add(
      'rounded',
      'h-[50px]',
      'px-4',
      'text-black',
      'font-semibold',
      'bg-white',
      'border',
      'border-darkFaded'
    );
  });
}

export function styleTextAreaWrapper() {
  const targetDiv = document.querySelector('.textarea-wrapper');

  targetDiv.classList.add('flex', 'flex-col', 'gap-2', 'mx-4', 'relative');
}

export function styleTextArea() {
  const targetTextArea = document.querySelector('.textarea');
  targetTextArea.classList.add(
    'rounded',
    'h-[150px]',
    'px-4',
    'text-black',
    'font-semibold',
    'bg-white',
    'border',
    'border-darkFaded',
    'placeholder:pt-2'
  );
}

export function formStyle() {
  styleFormDivWrapper();
  styleForm();
  styleLabelInputWrapper();
  styleLabel();
  styleInput();
}
