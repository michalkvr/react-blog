import Swal from 'sweetalert2';

const showAlert = (message: string, type: 'success' | 'error') => {
  Swal.fire({
    position: 'bottom',
    icon: type,
    title: message,
    showConfirmButton: false,
    timer: 2500,
    backdrop: false,
  });
};

export default showAlert;
