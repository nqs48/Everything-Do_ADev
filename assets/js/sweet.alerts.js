export const success = (title) => {
  Swal.fire({
    icon: "success",
    title: "Hecho",
    text: title,
    showConfirmButton: false,
    timer: 1700,
    color: "#fff",
    width: "20rem",
    showClass: {
      popup: "animate__animated animate__fadeInDown animated__fast",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp animated__fast",
    },
    background: "rgba(0, 8, 20)",
    backdrop: `
      rgba(38, 70, 83, 0.35)
    `,
  });
};

export const error = (title, text) => {
  Swal.fire({
    icon: "error",
    title: title,
    text: text,
    color: "#fff",
    
    width: "20rem",
    showClass: {
      popup: "animate__animated animate__fadeInDown animated__fast",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp animated__fast",
    },
    background: "rgba(0, 8, 20)",
    backdrop: `
      rgba(38, 70, 83, 0.35)
    `,
  });
};

export const confirmation = () => {
  return Swal.fire({
    title: "Estas seguro?",
    text: "No podrás revertir esta acción!",
    icon: "warning",
    iconColor: "#00cecb",
    showCancelButton: true,
    // confirmButtonColor: "#009fb7",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Si, Confirmado!",
    color: "#fff",
    width: "20rem",
    showClass: {
      popup: "animate__animated animate__fadeInDown animated__fast",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp animated__fast",
    },
    background: "rgba(0, 8, 20)",
    backdrop: `
      rgba(38, 70, 83, 0.35)
    `,
  });
};
