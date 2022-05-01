import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const useAlert = () => {
    const MySwal = withReactContent(Swal)
    return {
        MySwal
    }
}

export default useAlert;