const products = [
  {
    id: 1,
    title: "Disfraz de Dracula",
    price: 6500,
    pictureUrl:
      "https://casadeldisfraz.com/8937-home_default/capa-negra-para-disfraces-de-vampiro-halloween.jpg",
    description:
      "¡Conviértete en el rey de la noche con este impresionante disfraz de Drácula! Incluye una capa negra y elegante para que puedas deslumbrar en cualquier fiesta de Halloween. ¡Aterroriza a tus amigos y sorprende a todos con tu look escalofriante!",
    category: "clothes",
    stock: 7,
  },
  {
    id: 2,
    title: "Disfraz de Parca",
    price: 5500,
    pictureUrl:
      "https://www.lacasadelosdisfraces.es/contenidos/articulos/163/81734-001-2-2.jpg",
    description:
      "Si quieres destacar en Halloween, este disfraz de Parca es la opción perfecta para ti. Este disfraz incluye una túnica negra larga y una capucha para que puedas dar un toque misterioso a tu look. ¡Prepárate para ser el centro de atención en cualquier fiesta!",
    category: "clothes",
    stock: 5,
  },
  {
    id: 3,
    title: "Disfraz de Payaso",
    price: 6000,
    pictureUrl:
      "https://www.tuexperto.com/wp-content/uploads/2016/10/Captura-de-pantalla-2016-10-19-a-las-10.01.49.png",
    description:
      "Si buscas un disfraz de Halloween original y divertido, este disfraz de payaso es perfecto para ti. Incluye una camisa de colores brillantes, unos pantalones a juego y un sombrero de payaso para completar tu look. ¡Sé el alma de la fiesta y diviértete con tus amigos con este disfraz alegre!",
    category: "clothes",
    stock: 6,
  },
  {
    id: 4,
    title: "Disfraz de Ángel",
    price: 5500,
    pictureUrl:
      "https://casadeldisfraz.com/8626-thickbox_default/disfraz-angel-adulto.jpg",
    description:
      "Este disfraz de ángel es la elección perfecta para quienes buscan una apariencia elegante y celestial en Halloween. El disfraz incluye una túnica blanca, alas y una corona de flores para la cabeza. ¡Sorprende a todos con tu aspecto divino!",
    category: "clothes",
    stock: 5,
  },
  {
    id: 5,
    title: "Disfraz de Geisha",
    price: 6000,
    pictureUrl:
      "https://casadeldisfraz.com/7068-thickbox_default/disfraz-de-geisha-adulto.jpg",
    description:
      "Si buscas un disfraz elegante y sofisticado, el disfraz de geisha es la elección perfecta para ti. Incluye una kimono tradicional japonés, un abanico y una peluca de cabello negro largo. ¡Atrae todas las miradas y conviértete en el centro de atención de cualquier fiesta!",
    category: "clothes",
    stock: 8,
  },
  {
    id: 6,
    title: "Disfraz de Hippie",
    price: 4700,
    pictureUrl:
      "https://casadeldisfraz.com/6276-thickbox_default/disfraz-hippie-mujer.jpg",
    description:
      "Si buscas una apariencia cómoda y relajada, el disfraz de hippie es la opción ideal para ti. Incluye una camisa floreada, pantalones de campana y gafas de sol redondas. ¡Deja que tu estilo libre y relajado brille en Halloween con este disfraz divertido y fácil de usar!",
    category: "clothes",
    stock: 5,
  },
  {
    id: 7,
    title: "Calabaza iluminada",
    price: 1300,
    pictureUrl:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71bqnCTtbjL.jpg",
    description:
      "Ilumina tu casa en Halloween con esta calabaza decorativa iluminada. Ideal para colocar en la entrada o en el interior de tu hogar.",
    category: "deco",
    stock: 13,
  },
  {
    id: 8,
    title: "Araña gigante",
    price: 800,
    pictureUrl:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/480/758/products/diseno-sin-titulo-161-976d67eb1c69b2cc3316457949306160-640-0.jpg",
    description:
      "Asusta a tus invitados con esta araña gigante. Perfecta para decorar cualquier rincón de tu hogar en Halloween.",
    category: "deco",
    stock: 31,
  },
  {
    id: 9,
    title: "Esqueleto colgante",
    price: 2400,
    pictureUrl:
      "https://www.disfracessimon.com/26320-thickbox_default/esqueleto-decoracion-halloween.jpg",
    description:
      "Crea un ambiente terrorífico en tu hogar con este esqueleto colgante. Perfecto para decorar cualquier espacio.",
    category: "deco",
    stock: 17,
  },
];

function getProducts() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(products);
    }, 500);
  });
}

function getProduct(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(products.find((product) => product.id === parseInt(id)));
    }, 500);
  });
}

export { getProducts, getProduct };

export default products;
