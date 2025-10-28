const data = {
  user: {
    username: 'admin',
    password: '0658480b2a13250839747060d9c90d4d72b6a8f7797b607f1bb6ff1f4fa2b34e', // jeuh345, sha256
    created_at: '2025-10-27T00:00:00Z',
  },
  furnitures: [
    {
      title: 'Armoire Scandinave en Frêne',
      description:
        'Armoire minimaliste inspirée du design scandinave, réalisée en frêne massif avec poignées en aluminium brossé.',
      image: 'https://cdn.pixabay.com/photo/2016/04/18/13/53/room-1336497_1280.jpg',
      quantity: 2,
      category: {
        name: 'Armoire',
      },
      materials: [
        { name: 'Frêne', type: 'Bois', provider: 'BBois' },
        { name: 'Aluminium', type: 'Fer', provider: 'MetaLo' },
      ],
    },
    {
      title: 'Armoire Industrielle',
      description:
        'Armoire en chêne massif avec structure métallique en inox. Un style industriel et robuste.',
      image: 'https://cdn.pixabay.com/photo/2024/07/31/12/20/books-8934573_1280.jpg',
      quantity: 3,
      category: {
        name: 'Armoire',
      },
      materials: [
        { name: 'Chêne', type: 'Bois', provider: 'BBois' },
        { name: 'inox', type: 'Fer', provider: 'MetaLo' },
      ],
    },
    {
      title: 'Étagère Murale Noyer & Aluminium',
      description:
        'Étagère murale moderne combinant noyer foncé et supports en aluminium pour un rendu élégant et léger.',
      image: 'https://cdn.pixabay.com/photo/2020/10/19/11/40/bedroom-5667527_1280.jpg',
      quantity: 5,
      category: {
        name: 'Étagère',
      },
      materials: [
        { name: 'Noyer', type: 'Bois', provider: 'BBois' },
        { name: 'Aluminium', type: 'Fer', provider: 'MetaLo' },
      ],
    },
    {
      title: 'Étagère Modulable en Plastique Recyclé',
      description:
        'Étagère légère et modulable fabriquée en plastique recyclé, idéale pour les ateliers ou bureaux.',
      image: 'https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg',
      quantity: 4,
      category: {
        name: 'Étagère',
      },
      materials: [
        {
          name: 'Plastique',
          type: 'Plastique',
          provider: 'pPlastique',
        },
      ],
    },
    {
      title: 'Armoire en Chêne Clair et Acier',
      description:
        'Grande armoire de rangement au design contemporain, associant chêne clair et inox pour un contraste élégant.',
      image: 'https://cdn.pixabay.com/photo/2023/12/15/21/47/cat-8451431_1280.jpg',
      quantity: 2,
      category: {
        name: 'Armoire',
      },
      materials: [
        { name: 'Chêne', type: 'Bois', provider: 'BBois' },
        { name: 'inox', type: 'Fer', provider: 'MetaLo' },
      ],
    },
    {
      title: 'Étagère Murale Minimaliste en Frêne',
      description: 'Étagère murale simple et élégante, entièrement conçue en frêne naturel.',
      image: 'https://cdn.pixabay.com/photo/2014/08/08/21/03/bookshelf-413705_1280.jpg',
      quantity: 6,
      category: {
        name: 'Étagère',
      },
      materials: [{ name: 'Frêne', type: 'Bois', provider: 'BBois' }],
    },
    {
      title: 'Armoire Vintage en Noyer',
      description:
        'Armoire de style vintage réalisée en noyer massif, finitions naturelles pour un rendu chaleureux.',
      image: 'https://cdn.pixabay.com/photo/2022/06/22/06/53/cabinet-7277181_1280.jpg',
      quantity: 1,
      category: {
        name: 'Armoire',
      },
      materials: [{ name: 'Noyer', type: 'Bois', provider: 'BBois' }],
    },
    {
      title: 'Étagère Métallique Industrielle',
      description:
        'Étagère robuste entièrement réalisée en inox, idéale pour le rangement dans un environnement industriel.',
      image: 'https://cdn.pixabay.com/photo/2020/05/25/17/54/library-5219747_1280.jpg',
      quantity: 3,
      category: {
        name: 'Étagère',
      },
      materials: [{ name: 'inox', type: 'Fer', provider: 'MetaLo' }],
    },
    {
      title: 'Armoire Hybride Bois & Plastique',
      description:
        'Armoire expérimentale combinant frêne et panneaux en plastique recyclé pour une touche moderne et écologique.',
      image: 'https://cdn.pixabay.com/photo/2018/05/12/02/05/wooden-bench-3392273_1280.jpg',
      quantity: 2,
      category: {
        name: 'Armoire',
      },
      materials: [
        { name: 'Frêne', type: 'Bois', provider: 'BBois' },
        {
          name: 'Plastique',
          type: 'Plastique',
          provider: 'pPlastique',
        },
      ],
    },
    {
      title: 'Étagère Design en Aluminium Brossé',
      description:
        'Étagère contemporaine tout en aluminium brossé, légère et résistante, parfaite pour les espaces modernes.',
      image: 'https://cdn.pixabay.com/photo/2016/07/14/17/16/living-room-1517166_1280.jpg',
      quantity: 4,
      category: {
        name: 'Étagère',
      },
      materials: [{ name: 'Aluminium', type: 'Fer', provider: 'MetaLo' }],
    },
  ],
};

export default data;
