import Swal from 'sweetalert2';

const showAlert = (message: string, type: 'success' | 'error') => {
  Swal.fire({
    position: 'bottom-end',
    icon: type,
    title: message,
    showConfirmButton: false,
    timer: 3000,
    backdrop: false,
  });
};

export default { showAlert };
