const products = [
  {
    id: 1,
    title: "Disfraz de Dracula",
    price: 6500,
    pictureUrl:
      "https://casadeldisfraz.com/8937-home_default/capa-negra-para-disfraces-de-vampiro-halloween.jpg",
    description:
      "¡Conviértete en el rey de la noche con este impresionante disfraz de Drácula! Incluye una capa negra y elegante para que puedas deslumbrar en cualquier fiesta de Halloween. ¡Aterroriza a tus amigos y sorprende a todos con tu look escalofriante!",
  },
  {
    id: 2,
    title: "Disfraz de Parca",
    price: 5500,
    pictureUrl:
      "https://www.lacasadelosdisfraces.es/contenidos/articulos/163/81734-001-2-2.jpg",
    description:
      "Si quieres destacar en Halloween, este disfraz de Parca es la opción perfecta para ti. Este disfraz incluye una túnica negra larga y una capucha para que puedas dar un toque misterioso a tu look. ¡Prepárate para ser el centro de atención en cualquier fiesta!",
  },
  {
    id: 3,
    title: "Disfraz de Payaso",
    price: 6000,
    pictureUrl:
      "https://www.tuexperto.com/wp-content/uploads/2016/10/Captura-de-pantalla-2016-10-19-a-las-10.01.49.png",
    description:
      "Si buscas un disfraz de Halloween original y divertido, este disfraz de payaso es perfecto para ti. Incluye una camisa de colores brillantes, unos pantalones a juego y un sombrero de payaso para completar tu look. ¡Sé el alma de la fiesta y diviértete con tus amigos con este disfraz alegre!",
  },
];

function getProducts() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(products);
    }, 2000);
  });
}

function getProduct(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(products.find((product) => product.id === id));
    }, 2000);
  });
}

export { getProducts, getProduct };
