export function toggle(dato) {
  // setLight(!light);
  const atras = document.querySelector('.me_container_back');
  if (dato === true) {
    atras.style.color = '#000';
    document.body.style.backgroundColor = '#212121';
  } else {
    atras.style.color = '#000';
    document.body.style.backgroundColor = '#eeeeee';
  }
}
