export const success = (title) => {
  Swal.fire({
    icon: "success",
    title: title,
    showConfirmButton: false,
    timer: 1500,
    confirmButtonColor: "rgb(239 68 68)",
    showClass: {
      popup: "animate__animated animate__fadeInDown animated__slow",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp animated__slow",
    },
    backdrop: `
    rgba(38, 70, 83, 0.8)
  `,
  });
};

export const error = (title,text) => {
  Swal.fire({
    icon: "error",
    title: title,
    text: text,
    confirmButtonColor: "rgb(38, 70, 83)",
    showClass: {
      popup: "animate__animated animate__fadeInDown animated__slow",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp animated__slow",
    },
    backdrop: `
    rgba(38, 70, 83, 0.8)
  `,
  });
};





export const confirmation = () => {
  return Swal.fire({
    title: "Estas seguro?",
    text: "No podrás revertir esta acción!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Si, Confirmado!",
    showClass: {
      popup: "animate__animated animate__fadeInDown animated__slow",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp animated__slow",
    },
    backdrop: `
    rgba(38, 70, 83, 0.8)
  `,
  });
};
