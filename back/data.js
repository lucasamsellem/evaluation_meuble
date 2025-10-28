const data = {
	users: [
		{
			username: "admin",
			password: "$2b$10$abcdefghijklmnopqrstuv",
			created_at: "2025-10-27T00:00:00Z",
		},
	],
	materials: [
		{
			name: "Frêne",
			type: "Bois",
			provider: "BBois",
		},
		{
			name: "Chêne",
			type: "Bois",
			provider: "BBois",
		},
		{
			name: "Noyer",
			type: "Bois",
			provider: "BBois",
		},
		{
			name: "Acier inox",
			type: "Fer",
			provider: "MetaLo",
		},
		{
			name: "Aluminium",
			type: "Fer",
			provider: "MetaLo",
		},
		{
			name: "Plastique",
			type: "Plastique",
			provider: "pPlastique",
		},
	],
	categories: [
		{
			name: "Armoire",
		},
		{
			name: "Étagère",
		},
	],
	furnitures: [
		{
			title: "Armoire Scandinave en Frêne",
			description:
				"Armoire minimaliste inspirée du design scandinave, réalisée en frêne massif avec poignées en aluminium brossé.",
			image: "https://cdn.pixabay.com/photo/2016/04/18/13/53/room-1336497_1280.jpg",
			category_id: 1,
			quantity: 2,
		},
		{
			title: "Armoire Industrielle",
			description:
				"Armoire en chêne massif avec structure métallique en acier inox. Un style industriel et robuste.",
			image: "https://cdn.pixabay.com/photo/2024/07/31/12/20/books-8934573_1280.jpg",
			category_id: 1,
			quantity: 3,
		},
		{
			title: "Étagère Murale Noyer & Aluminium",
			description:
				"Étagère murale moderne combinant noyer foncé et supports en aluminium pour un rendu élégant et léger.",
			image: "https://cdn.pixabay.com/photo/2020/10/19/11/40/bedroom-5667527_1280.jpg",
			category_id: 2,
			quantity: 5,
		},
		{
			title: "Étagère Modulable en Plastique Recyclé",
			description:
				"Étagère légère et modulable fabriquée en plastique recyclé, idéale pour les ateliers ou bureaux.",
			image: "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg",
			category_id: 2,
			quantity: 4,
		},
		{
			title: "Armoire en Chêne Clair et Acier",
			description:
				"Grande armoire de rangement au design contemporain, associant chêne clair et acier inox pour un contraste élégant.",
			image: "https://cdn.pixabay.com/photo/2023/12/15/21/47/cat-8451431_1280.jpg",
			category_id: 1,
			quantity: 2,
		},
		{
			title: "Étagère Murale Minimaliste en Frêne",
			description:
				"Étagère murale simple et élégante, entièrement conçue en frêne naturel.",
			image: "https://cdn.pixabay.com/photo/2014/08/08/21/03/bookshelf-413705_1280.jpg",
			category_id: 2,
			quantity: 6,
		},
		{
			title: "Armoire Vintage en Noyer",
			description:
				"Armoire de style vintage réalisée en noyer massif, finitions naturelles pour un rendu chaleureux.",
			image: "https://cdn.pixabay.com/photo/2022/06/22/06/53/cabinet-7277181_1280.jpg",
			category_id: 1,
			quantity: 1,
		},
		{
			title: "Étagère Métallique Industrielle",
			description:
				"Étagère robuste entièrement réalisée en acier inox, idéale pour le rangement dans un environnement industriel.",
			image: "https://cdn.pixabay.com/photo/2020/05/25/17/54/library-5219747_1280.jpg",
			category_id: 2,
			quantity: 3,
		},
		{
			title: "Armoire Hybride Bois & Plastique",
			description:
				"Armoire expérimentale combinant frêne et panneaux en plastique recyclé pour une touche moderne et écologique.",
			image: "https://cdn.pixabay.com/photo/2018/05/12/02/05/wooden-bench-3392273_1280.jpg",
			category_id: 1,
			quantity: 2,
		},
		{
			title: "Étagère Design en Aluminium Brossé",
			description:
				"Étagère contemporaine tout en aluminium brossé, légère et résistante, parfaite pour les espaces modernes.",
			image: "https://cdn.pixabay.com/photo/2016/07/14/17/16/living-room-1517166_1280.jpg",
			category_id: 2,
			quantity: 4,
		},
	],
	furniture_material: [
		{ furniture_id: 1, material_id: 1 },
		{ furniture_id: 1, material_id: 5 },

		{ furniture_id: 2, material_id: 2 },
		{ furniture_id: 2, material_id: 4 },

		{ furniture_id: 3, material_id: 3 },
		{ furniture_id: 3, material_id: 5 },

		{ furniture_id: 4, material_id: 6 },

		{ furniture_id: 5, material_id: 2 },
		{ furniture_id: 5, material_id: 4 },

		{ furniture_id: 6, material_id: 1 },

		{ furniture_id: 7, material_id: 3 },

		{ furniture_id: 8, material_id: 4 },

		{ furniture_id: 9, material_id: 1 },
		{ furniture_id: 9, material_id: 6 },

		{ furniture_id: 10, material_id: 5 },
	],
};

export default data;
