
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const swal = withReactContent(Swal)

const showSwal = (title, icon, buttons) => {
  Swal.fire({
    title,
    icon,
    buttons
  })
};
export default showSwal
