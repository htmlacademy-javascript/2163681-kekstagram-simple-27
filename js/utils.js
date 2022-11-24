const isEscPressed = (evt) => evt.key === 'Escape';
const isOpenErrorModal = () => document.getElementsByClassName('error').length;

export { isEscPressed, isOpenErrorModal };
