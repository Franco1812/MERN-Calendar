import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {

 const [isOpen, setIsOpen] = useState( true )

  const onCloseModal = () => {
    console.log("cerrando modal");
    setIsOpen( false );

  }


  return (
    <Modal
      isOpen={ isOpen }
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={ 200 }
    >
        <h1>Hola pelotudos</h1>
        <hr />
        <p>Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código. Se trata de un lenguaje de programación multiparadigma, ya que soporta parcialmente la orientación a objetos, programación imperativa y, en menor medida, programación funcional</p>
    </Modal>
  )
}

export default CalendarModal
