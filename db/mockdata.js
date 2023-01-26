const fakeProducts = [
  {
    category: "Helmets",
    name: "dolor",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    price: 82,
    quantity: 5,
    size: "Medium",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "suscipit nulla elit ac",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    price: 74,
    quantity: 1,
    size: "Medium",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "eu est",
    description:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    price: 10,
    quantity: 5,
    size: "Small",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "ipsum dolor sit",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    price: 6,
    quantity: 3,
    size: "Large",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "neque sapien placerat",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    price: 40,
    quantity: 8,
    size: "Large",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "justo eu massa donec",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: 83,
    quantity: 2,
    size: "Small",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "vulputate nonummy",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    price: 60,
    quantity: 3,
    size: "Extra Large",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "vivamus tortor duis mattis",
    description:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    price: 37,
    quantity: 3,
    size: "Extra Large",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "curae",
    description:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    price: 71,
    quantity: 9,
    size: "Medium",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "vel",
    description:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    price: 58,
    quantity: 10,
    size: "Extra Large",
    color: "Purple",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "platea dictumst morbi",
    description:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    price: 53,
    quantity: 4,
    size: "Medium",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "erat",
    description:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    price: 47,
    quantity: 10,
    size: "Large",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "non mattis pulvinar",
    description:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    price: 50,
    quantity: 5,
    size: "Medium",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "tellus nisi eu orci",
    description:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    price: 61,
    quantity: 5,
    size: "Extra Large",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "augue vel",
    description:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    price: 98,
    quantity: 7,
    size: "Medium",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "ante vestibulum",
    description:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    price: 28,
    quantity: 7,
    size: "Large",
    color: "Mauv",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "libero",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    price: 33,
    quantity: 1,
    size: "Small",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "non",
    description:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    price: 88,
    quantity: 10,
    size: "Medium",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "ipsum primis in faucibus",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    price: 39,
    quantity: 4,
    size: "Extra Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "curae duis",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    price: 35,
    quantity: 9,
    size: "Large",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "vel pede",
    description:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    price: 87,
    quantity: 8,
    size: "Large",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "erat eros viverra eget",
    description:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    price: 20,
    quantity: 6,
    size: "Small",
    color: "Mauv",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "orci luctus",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    price: 69,
    quantity: 2,
    size: "Small",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "pellentesque",
    description:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    price: 6,
    quantity: 6,
    size: "Small",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "lorem integer tincidunt",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    price: 73,
    quantity: 2,
    size: "Medium",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "at velit eu est",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    price: 52,
    quantity: 1,
    size: "Large",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "vestibulum sagittis sapien",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    price: 31,
    quantity: 10,
    size: "Medium",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "ante",
    description:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    price: 69,
    quantity: 7,
    size: "Extra Large",
    color: "Purple",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "nisi eu orci",
    description:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    price: 6,
    quantity: 7,
    size: "Large",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "nisl",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    price: 14,
    quantity: 1,
    size: "Large",
    color: "Mauv",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "ante",
    description:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    price: 51,
    quantity: 2,
    size: "Extra Large",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "venenatis lacinia aenean",
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    price: 75,
    quantity: 8,
    size: "Extra Large",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "malesuada in imperdiet et",
    description:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    price: 31,
    quantity: 3,
    size: "Large",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "morbi ut",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    price: 91,
    quantity: 3,
    size: "Small",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "euismod scelerisque",
    description:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    price: 67,
    quantity: 7,
    size: "Small",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "sed tincidunt eu",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    price: 34,
    quantity: 8,
    size: "Extra Large",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "lorem ipsum",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    price: 59,
    quantity: 1,
    size: "Large",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "erat quisque erat eros",
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    price: 82,
    quantity: 6,
    size: "Extra Large",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "vel nulla eget eros",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    price: 62,
    quantity: 2,
    size: "Large",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "vulputate luctus cum",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    price: 66,
    quantity: 4,
    size: "Small",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "dictumst aliquam augue",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    price: 83,
    quantity: 4,
    size: "Medium",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "nascetur",
    description:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    price: 87,
    quantity: 6,
    size: "Large",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "at",
    description:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    price: 70,
    quantity: 10,
    size: "Extra Large",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "vivamus",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    price: 76,
    quantity: 9,
    size: "Extra Large",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "duis mattis",
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    price: 33,
    quantity: 6,
    size: "Medium",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "tempus",
    description:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    price: 80,
    quantity: 10,
    size: "Medium",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "purus eu",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    price: 57,
    quantity: 9,
    size: "Medium",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "consectetuer adipiscing elit",
    description:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    price: 65,
    quantity: 1,
    size: "Small",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "pulvinar lobortis est",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    price: 7,
    quantity: 4,
    size: "Extra Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "suscipit ligula in",
    description:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    price: 69,
    quantity: 5,
    size: "Small",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "purus phasellus",
    description:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    price: 14,
    quantity: 8,
    size: "Medium",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "nulla suspendisse potenti",
    description:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    price: 20,
    quantity: 9,
    size: "Medium",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "maecenas tristique est",
    description:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    price: 45,
    quantity: 3,
    size: "Small",
    color: "Purple",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "volutpat sapien arcu",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    price: 23,
    quantity: 3,
    size: "Small",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "cursus vestibulum proin",
    description: "Aliquam erat volutpat. In congue. Etiam justo.",
    price: 24,
    quantity: 2,
    size: "Extra Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "ut",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    price: 27,
    quantity: 3,
    size: "Medium",
    color: "Mauv",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "dapibus augue vel accumsan",
    description:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    price: 2,
    quantity: 9,
    size: "Large",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "sed sagittis nam congue",
    description:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    price: 99,
    quantity: 4,
    size: "Small",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "erat curabitur gravida",
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    price: 58,
    quantity: 4,
    size: "Medium",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "morbi odio odio",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    price: 41,
    quantity: 6,
    size: "Small",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "in faucibus",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    price: 7,
    quantity: 10,
    size: "Large",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "praesent lectus",
    description:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    price: 91,
    quantity: 9,
    size: "Extra Large",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "vestibulum",
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    price: 90,
    quantity: 6,
    size: "Extra Large",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "id luctus nec",
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    price: 31,
    quantity: 9,
    size: "Medium",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "posuere cubilia curae",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    price: 26,
    quantity: 1,
    size: "Small",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "ut at",
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    price: 26,
    quantity: 6,
    size: "Large",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "turpis a pede posuere",
    description:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    price: 54,
    quantity: 7,
    size: "Extra Large",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "non lectus aliquam sit",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    price: 94,
    quantity: 1,
    size: "Large",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "tincidunt ante",
    description:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    price: 15,
    quantity: 5,
    size: "Large",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "turpis",
    description:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    price: 99,
    quantity: 1,
    size: "Small",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "aliquam sit",
    description:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    price: 81,
    quantity: 2,
    size: "Medium",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "libero non mattis pulvinar",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    price: 17,
    quantity: 6,
    size: "Large",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "dui vel",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    price: 78,
    quantity: 10,
    size: "Small",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "eget semper",
    description:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    price: 79,
    quantity: 5,
    size: "Extra Large",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "eget congue eget",
    description:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    price: 61,
    quantity: 9,
    size: "Large",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "quis lectus suspendisse",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    price: 35,
    quantity: 9,
    size: "Extra Large",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "aliquam sit amet",
    description:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    price: 100,
    quantity: 9,
    size: "Large",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "integer ac neque",
    description:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    price: 8,
    quantity: 6,
    size: "Large",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "eros suspendisse accumsan",
    description:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    price: 38,
    quantity: 4,
    size: "Extra Large",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "nulla facilisi cras",
    description:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    price: 69,
    quantity: 10,
    size: "Large",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "porta volutpat",
    description:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    price: 71,
    quantity: 6,
    size: "Small",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "mi integer",
    description:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    price: 42,
    quantity: 7,
    size: "Extra Large",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "platea",
    description:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    price: 21,
    quantity: 8,
    size: "Small",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "eget massa",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    price: 45,
    quantity: 7,
    size: "Extra Large",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "semper rutrum",
    description:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    price: 31,
    quantity: 10,
    size: "Extra Large",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "sociis natoque penatibus",
    description:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    price: 44,
    quantity: 4,
    size: "Small",
    color: "Purple",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "consectetuer",
    description:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    price: 2,
    quantity: 9,
    size: "Medium",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "sed accumsan felis",
    description:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    price: 57,
    quantity: 9,
    size: "Extra Large",
    color: "Purple",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "cras in",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    price: 85,
    quantity: 1,
    size: "Large",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "semper rutrum nulla nunc",
    description:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    price: 61,
    quantity: 7,
    size: "Small",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "neque vestibulum eget",
    description:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    price: 80,
    quantity: 9,
    size: "Small",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "justo lacinia eget tincidunt",
    description:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    price: 95,
    quantity: 3,
    size: "Extra Large",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "eu interdum",
    description:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    price: 49,
    quantity: 2,
    size: "Small",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "duis faucibus accumsan",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    price: 5,
    quantity: 1,
    size: "Medium",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "felis",
    description:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    price: 74,
    quantity: 1,
    size: "Extra Large",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "ante",
    description:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    price: 11,
    quantity: 9,
    size: "Small",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "potenti cras in",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    price: 75,
    quantity: 6,
    size: "Large",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "et tempus",
    description:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    price: 2,
    quantity: 1,
    size: "Extra Large",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "interdum",
    description:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: 97,
    quantity: 3,
    size: "Extra Large",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "interdum in ante",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    price: 78,
    quantity: 1,
    size: "Medium",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "sit",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    price: 11,
    quantity: 1,
    size: "Large",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "fermentum justo nec",
    description:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    price: 17,
    quantity: 2,
    size: "Large",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "eget vulputate ut ultrices",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    price: 65,
    quantity: 1,
    size: "Large",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "tortor id nulla ultrices",
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    price: 89,
    quantity: 7,
    size: "Extra Large",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "vestibulum",
    description:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    price: 37,
    quantity: 6,
    size: "Extra Large",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "sagittis nam",
    description:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    price: 77,
    quantity: 1,
    size: "Large",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "nulla elit ac",
    description:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    price: 51,
    quantity: 7,
    size: "Small",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "non",
    description:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    price: 35,
    quantity: 2,
    size: "Extra Large",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "sit amet nunc",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    price: 73,
    quantity: 2,
    size: "Extra Large",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "habitasse platea dictumst maecenas",
    description:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    price: 99,
    quantity: 1,
    size: "Large",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "vulputate vitae",
    description:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    price: 88,
    quantity: 7,
    size: "Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "nonummy maecenas",
    description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    price: 3,
    quantity: 6,
    size: "Medium",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "rutrum nulla tellus",
    description:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    price: 33,
    quantity: 5,
    size: "Medium",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "curae duis faucibus",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    price: 11,
    quantity: 4,
    size: "Large",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "nulla",
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    price: 16,
    quantity: 10,
    size: "Extra Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "vulputate elementum nullam varius",
    description:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    price: 47,
    quantity: 7,
    size: "Extra Large",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "nulla sed",
    description:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    price: 65,
    quantity: 7,
    size: "Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "sed magna at nunc",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    price: 42,
    quantity: 8,
    size: "Extra Large",
    color: "Purple",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "ut rhoncus aliquet",
    description:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    price: 17,
    quantity: 10,
    size: "Medium",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "justo",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    price: 52,
    quantity: 1,
    size: "Small",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "aliquam non",
    description:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    price: 80,
    quantity: 9,
    size: "Small",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "consequat nulla nisl",
    description:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    price: 67,
    quantity: 6,
    size: "Medium",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "tristique fusce",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    price: 72,
    quantity: 10,
    size: "Extra Large",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "dolor sit",
    description:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    price: 35,
    quantity: 1,
    size: "Small",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "consectetuer eget rutrum at",
    description:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    price: 92,
    quantity: 5,
    size: "Small",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "maecenas rhoncus aliquam",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    price: 58,
    quantity: 7,
    size: "Extra Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "et magnis dis parturient",
    description:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    price: 13,
    quantity: 1,
    size: "Large",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "justo in",
    description:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    price: 87,
    quantity: 7,
    size: "Extra Large",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "in faucibus orci",
    description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    price: 7,
    quantity: 9,
    size: "Extra Large",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "ullamcorper augue a",
    description:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    price: 96,
    quantity: 8,
    size: "Medium",
    color: "Mauv",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "a suscipit nulla elit",
    description:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    price: 22,
    quantity: 7,
    size: "Large",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "blandit",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    price: 33,
    quantity: 2,
    size: "Small",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "mauris",
    description:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    price: 93,
    quantity: 9,
    size: "Small",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "amet turpis",
    description:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    price: 56,
    quantity: 4,
    size: "Large",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "odio condimentum id",
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    price: 66,
    quantity: 6,
    size: "Medium",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "libero quis",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    price: 94,
    quantity: 4,
    size: "Extra Large",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "non quam nec",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    price: 6,
    quantity: 6,
    size: "Large",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "accumsan tellus nisi eu",
    description:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    price: 48,
    quantity: 1,
    size: "Large",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "proin leo",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    price: 30,
    quantity: 5,
    size: "Medium",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "donec vitae nisi",
    description:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    price: 84,
    quantity: 4,
    size: "Small",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "nulla dapibus",
    description:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    price: 28,
    quantity: 5,
    size: "Extra Large",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "ac leo pellentesque",
    description:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    price: 97,
    quantity: 5,
    size: "Small",
    color: "Mauv",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "congue",
    description:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    price: 51,
    quantity: 1,
    size: "Large",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "posuere felis",
    description:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    price: 50,
    quantity: 6,
    size: "Large",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "posuere",
    description:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    price: 9,
    quantity: 1,
    size: "Small",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "pellentesque volutpat dui maecenas",
    description:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    price: 72,
    quantity: 10,
    size: "Extra Large",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "suscipit a",
    description:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    price: 18,
    quantity: 10,
    size: "Medium",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "sapien cursus vestibulum",
    description:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    price: 78,
    quantity: 4,
    size: "Extra Large",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "fermentum justo nec",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    price: 12,
    quantity: 2,
    size: "Small",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "a feugiat et",
    description:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    price: 22,
    quantity: 1,
    size: "Small",
    color: "Mauv",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "eget semper rutrum nulla",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    price: 46,
    quantity: 10,
    size: "Small",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "eu magna vulputate",
    description:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    price: 40,
    quantity: 1,
    size: "Medium",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "lectus",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    price: 37,
    quantity: 10,
    size: "Medium",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "phasellus id",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    price: 60,
    quantity: 9,
    size: "Small",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "viverra eget",
    description:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    price: 23,
    quantity: 10,
    size: "Large",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "eget",
    description:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    price: 3,
    quantity: 6,
    size: "Medium",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "gravida sem",
    description:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    price: 91,
    quantity: 5,
    size: "Large",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "quis augue luctus tincidunt",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    price: 16,
    quantity: 9,
    size: "Small",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "non mi integer",
    description:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    price: 2,
    quantity: 5,
    size: "Medium",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "ipsum",
    description:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    price: 64,
    quantity: 6,
    size: "Medium",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "eleifend pede libero",
    description:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    price: 22,
    quantity: 4,
    size: "Extra Large",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "leo pellentesque ultrices",
    description:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    price: 33,
    quantity: 2,
    size: "Extra Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "id nisl",
    description:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    price: 89,
    quantity: 3,
    size: "Medium",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "et tempus",
    description:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    price: 69,
    quantity: 6,
    size: "Extra Large",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "integer",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    price: 19,
    quantity: 3,
    size: "Small",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "iaculis diam",
    description:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    price: 96,
    quantity: 9,
    size: "Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "et",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    price: 47,
    quantity: 4,
    size: "Medium",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "nam nulla",
    description:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    price: 92,
    quantity: 6,
    size: "Medium",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "in hac habitasse",
    description:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    price: 72,
    quantity: 7,
    size: "Small",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "quam nec",
    description:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    price: 90,
    quantity: 9,
    size: "Extra Large",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "quisque ut erat curabitur",
    description:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    price: 74,
    quantity: 8,
    size: "Small",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "imperdiet et commodo vulputate",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    price: 37,
    quantity: 2,
    size: "Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "commodo placerat praesent blandit",
    description:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    price: 100,
    quantity: 8,
    size: "Large",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "dapibus nulla suscipit ligula",
    description:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    price: 88,
    quantity: 8,
    size: "Medium",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "diam",
    description:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    price: 94,
    quantity: 10,
    size: "Extra Large",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "justo aliquam quis",
    description:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    price: 68,
    quantity: 1,
    size: "Medium",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "massa",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    price: 91,
    quantity: 4,
    size: "Medium",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "magnis",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    price: 47,
    quantity: 2,
    size: "Medium",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "ante nulla justo aliquam",
    description:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    price: 44,
    quantity: 4,
    size: "Large",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "id massa id",
    description:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    price: 65,
    quantity: 3,
    size: "Small",
    color: "Purple",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "sapien cursus vestibulum",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    price: 83,
    quantity: 2,
    size: "Medium",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "justo nec",
    description:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    price: 40,
    quantity: 4,
    size: "Medium",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "dui",
    description:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    price: 34,
    quantity: 7,
    size: "Small",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "at ipsum",
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    price: 63,
    quantity: 1,
    size: "Medium",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "curabitur",
    description:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    price: 99,
    quantity: 3,
    size: "Large",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "convallis duis",
    description:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    price: 33,
    quantity: 10,
    size: "Large",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "aliquam",
    description:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    price: 64,
    quantity: 8,
    size: "Large",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "sed ante vivamus tortor",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    price: 98,
    quantity: 4,
    size: "Medium",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "nullam sit",
    description:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    price: 54,
    quantity: 9,
    size: "Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "ipsum integer",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    price: 28,
    quantity: 7,
    size: "Small",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "sapien cum sociis",
    description: "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    price: 90,
    quantity: 2,
    size: "Medium",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "at feugiat non pretium",
    description:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    price: 14,
    quantity: 4,
    size: "Medium",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "vestibulum quam",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    price: 48,
    quantity: 7,
    size: "Large",
    color: "Purple",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "vestibulum velit id",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    price: 99,
    quantity: 10,
    size: "Large",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "maecenas pulvinar lobortis",
    description:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    price: 20,
    quantity: 7,
    size: "Medium",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "lobortis",
    description:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    price: 48,
    quantity: 9,
    size: "Medium",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "consequat dui",
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    price: 75,
    quantity: 4,
    size: "Small",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "primis in faucibus",
    description:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    price: 92,
    quantity: 10,
    size: "Small",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "lobortis",
    description:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    price: 46,
    quantity: 8,
    size: "Large",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "ac nibh",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    price: 67,
    quantity: 4,
    size: "Large",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "etiam pretium iaculis",
    description:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    price: 35,
    quantity: 6,
    size: "Extra Large",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "ligula suspendisse ornare consequat",
    description:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    price: 21,
    quantity: 8,
    size: "Large",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "lacus purus",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    price: 16,
    quantity: 6,
    size: "Large",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "id sapien",
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    price: 42,
    quantity: 6,
    size: "Large",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "dapibus dolor",
    description:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    price: 43,
    quantity: 1,
    size: "Small",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "sed vel enim",
    description:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    price: 43,
    quantity: 5,
    size: "Extra Large",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "parturient",
    description:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    price: 97,
    quantity: 9,
    size: "Medium",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "ligula in lacus curabitur",
    description:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    price: 18,
    quantity: 7,
    size: "Large",
    color: "Purple",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "aenean auctor gravida",
    description:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    price: 38,
    quantity: 4,
    size: "Extra Large",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "venenatis",
    description:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    price: 89,
    quantity: 9,
    size: "Medium",
    color: "Mauv",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "quam suspendisse",
    description:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    price: 2,
    quantity: 4,
    size: "Large",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "magna vestibulum aliquet",
    description:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    price: 43,
    quantity: 8,
    size: "Small",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "elit sodales",
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    price: 44,
    quantity: 7,
    size: "Large",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "sed nisl nunc",
    description:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    price: 6,
    quantity: 3,
    size: "Medium",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "nibh",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    price: 22,
    quantity: 10,
    size: "Large",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "gravida sem praesent id",
    description:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    price: 100,
    quantity: 8,
    size: "Large",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "vel lectus in",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    price: 28,
    quantity: 8,
    size: "Extra Large",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "mauris ullamcorper purus sit",
    description:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    price: 56,
    quantity: 8,
    size: "Extra Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "scelerisque",
    description:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    price: 3,
    quantity: 7,
    size: "Small",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "nulla neque libero convallis",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    price: 43,
    quantity: 7,
    size: "Medium",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "maecenas tristique",
    description:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    price: 65,
    quantity: 4,
    size: "Small",
    color: "Purple",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "pede venenatis non sodales",
    description:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    price: 62,
    quantity: 8,
    size: "Extra Large",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "imperdiet nullam",
    description:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    price: 37,
    quantity: 5,
    size: "Small",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "ante nulla",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    price: 46,
    quantity: 5,
    size: "Medium",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "ac est",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    price: 48,
    quantity: 10,
    size: "Large",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "massa id",
    description:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    price: 28,
    quantity: 3,
    size: "Medium",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "nibh in",
    description:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    price: 34,
    quantity: 4,
    size: "Extra Large",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "amet",
    description:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    price: 55,
    quantity: 10,
    size: "Small",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "auctor gravida sem praesent",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    price: 37,
    quantity: 3,
    size: "Medium",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "ac diam cras",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    price: 4,
    quantity: 8,
    size: "Large",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "elementum in",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    price: 75,
    quantity: 6,
    size: "Large",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "a ipsum integer",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    price: 77,
    quantity: 7,
    size: "Medium",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "aenean sit amet",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    price: 71,
    quantity: 5,
    size: "Small",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "curabitur in libero ut",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    price: 59,
    quantity: 10,
    size: "Small",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "at nibh",
    description:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    price: 20,
    quantity: 10,
    size: "Large",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "convallis",
    description:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    price: 47,
    quantity: 5,
    size: "Extra Large",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "faucibus orci luctus",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    price: 38,
    quantity: 2,
    size: "Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "mi pede malesuada in",
    description:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    price: 95,
    quantity: 7,
    size: "Extra Large",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "primis in faucibus",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    price: 8,
    quantity: 5,
    size: "Large",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "nulla",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    price: 67,
    quantity: 6,
    size: "Large",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "consequat",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    price: 82,
    quantity: 2,
    size: "Large",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "cras non velit",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    price: 83,
    quantity: 1,
    size: "Small",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "eu",
    description:
      "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    price: 45,
    quantity: 5,
    size: "Medium",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "sit",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    price: 47,
    quantity: 4,
    size: "Medium",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "consequat in",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    price: 43,
    quantity: 10,
    size: "Medium",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "amet",
    description:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    price: 24,
    quantity: 5,
    size: "Medium",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "pellentesque volutpat dui maecenas",
    description:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    price: 3,
    quantity: 10,
    size: "Medium",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "nisl",
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    price: 42,
    quantity: 9,
    size: "Extra Large",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "id ligula",
    description:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    price: 17,
    quantity: 2,
    size: "Large",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "ligula sit amet",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    price: 78,
    quantity: 6,
    size: "Small",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
];

module.exports = { fakeProducts };
