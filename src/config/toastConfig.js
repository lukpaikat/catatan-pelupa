const promiseSuccess = {
  type: 'success',
  isLoading: false,
  autoClose: 5000,
  closeButton: true,
  draggable: true,
  draggablePercent: 30,
  closeOnClick: true,
};

const promiseFailed = {
  type: 'error',
  isLoading: false,
  autoClose: 5000,
  closeButton: true,
  draggable: true,
  draggablePercent: 30,
};

export { promiseSuccess, promiseFailed };
