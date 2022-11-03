

export const success= (title) => {
  Swal.fire({
    icon: "success",
    title: title,
    showConfirmButton: false,
    timer: 1500,
  });
}

export const error = (text) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: text,
  });
};



