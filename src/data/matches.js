const matches = [
	{
		id: 1,
		home: {
			id: 1,
			name: 'Barcelona',
			img: '	https://www.flashscore.com/res/image/data/jZ8dSYS0-vHFHR3ym.png',
		},
		guest: {
			id: 2,
			name: 'Real Madrid',
			img: 'https://www.flashscore.com/res/image/data/CGPhnpne-vHFHR3ym.png',
		},
		goals: [
			{ id: 1, team: 1 },
			{ id: 1, team: 1 },
			{ id: 1, team: 1 },
			{ id: 2, team: 2 },
		],
		status: 'finished',
		league: {
			id: 2,
			name: 'La Liga',
			country: 'spain',
		},
		score: [
			{ id: 1, name: 'A.Fati', time: '`17', team: 1 },
			{ id: 1, name: 'Dembelle', time: '`44', team: 1 },
			{ id: 1, name: 'R.Lewandowski', time: '`67', team: 1 },
			{ id: 1, name: 'Benzema', time: '`57', team: 2 },
		],
		lineups: {
			home: [
				'ter Stegen M.',
				'Araujo R.',
				'Kounde J.',
				'Alonso M.',
				'Balde A.',
				'Kessie F.',
				'Busquets S.',
				'Roberto S.',
				'Raphinha',
				'Lewandowski R.',
				'Gavi',
			],
			guest: [],
		},
	},
	{
		id: 2,
		home: {
			id: 3,
			name: 'Man U',
			img: 'https://www.flashscore.com/res/image/data/GhGV3qjT-0bxZ5mFQ.png',
		},
		guest: {
			id: 4,
			name: 'Man City',
			img: 'https://www.flashscore.com/res/image/data/0vgscFU0-YqrvkU1k.png',
		},
		goals: [
			{
				id: 1,
				team: 4,
			},
			{
				id: 1,
				team: 4,
			},
			{
				id: 1,
				team: 4,
			},
			{
				id: 1,
				team: 4,
			},
			{
				id: 1,
				team: 3,
			},
		],
		status: 'live',
		league: {
			id: 1,
			name: 'English Premier League',
			country: 'england',
		},
		score: [
			{ id: 1, name: 'R.Mahrez', time: '`37', team: 4 },
			{ id: 1, name: 'R.Mahrez', time: '`40', team: 4 },
			{ id: 1, name: 'R.Mahrez', time: '`67', team: 4 },
			{ id: 1, name: 'R.Mahrez', time: '`87', team: 4 },
			{ id: 1, name: 'Rashford', time: '`57', team: 3 },
		],
	},
	{
		id: 3,
		home: {
			id: 5,
			name: 'Bayern',
			img: 'https://www.flashscore.com/res/image/data/lWGBVoA6-bRws91x8.png',
		},
		guest: {
			id: 6,
			name: 'Borussia D.',
			img: 'https://www.flashscore.com/res/image/data/xSfDCO76-hp56KnUJ.png',
		},
		goals: [],
		status: '21:45',
		league: {
			id: 3,
			name: 'Bundesliga',
			country: 'germany',
		},

		score: [],
	},
	{
		id: 4,
		home: {
			id: 7,
			name: 'Sevilla',
			img: 'https://www.flashscore.com/res/image/data/EcTGi086-I7ELQNjg.png',
		},
		guest: {
			id: 8,
			name: 'Atletico',
			img: 'https://www.flashscore.com/res/image/data/Kv2QSkhT-OtsiH2mJ.png',
		},
		goals: [
			{
				id: 1,
				team: 8,
			},
			{
				id: 1,
				team: 8,
			},
			{
				id: 1,
				team: 7,
			},
			{
				id: 1,
				team: 7,
			},
			{
				id: 1,
				team: 8,
			},
		],
		status: 'live',
		league: {
			id: 2,
			name: 'La Liga',
			country: 'spain',
		},

		score: [],
	},
	{
		id: 5,
		home: {
			id: 9,
			name: 'PSG',
			img: '	https://www.flashscore.com/res/image/data/fJgGn26k-S4YBKIRB.png',
		},
		guest: {
			id: 10,
			name: 'Lion',
			img: 'https://www.flashscore.com/res/image/data/bkuX6RS0-xWJGcPM6.png',
		},
		goals: [
			{
				id: 1,
				team: 9,
			},
			{
				id: 1,
				team: 9,
			},
			{
				id: 1,
				team: 9,
			},
			{
				id: 1,
				team: 10,
			},
			{
				id: 1,
				team: 10,
			},
		],
		status: 'live',
		league: {
			id: 5,
			name: 'Ligue 1',
			country: 'france',
		},

		score: [],
	},
	{
		id: 6,
		home: {
			id: 11,
			name: 'PSV',
			img: '	https://www.flashscore.com/res/image/data/fefX7RQq-pKTPDvng.png',
		},
		guest: {
			id: 12,
			name: 'Ajax',
			img: '	https://www.flashscore.com/res/image/data/ltb3XckC-EDjaYdAg.png',
		},
		goals: [
			{
				id: 1,
				team: 11,
			},
			{
				id: 1,
				team: 12,
			},
		],
		status: 'live',
		league: {
			id: 6,
			name: 'Eredivise',
			country: 'netherlands',
		},

		score: [],
	},
	{
		id: 7,
		home: {
			id: 13,
			name: 'Santos',
			img: 'https://www.flashscore.com/res/image/data/hzibzPjC-UeX45DKp.png',
		},
		guest: {
			id: 14,
			name: 'Atletico M',
			img: 'https://www.flashscore.com/res/image/data/h8ZzOL5k-zTtxhzPu.png',
		},
		goals: [],
		status: '23:00',
		league: {
			id: 7,
			name: 'Brasileiro Serie A',
			country: 'brasil',
		},

		score: [],
	},
	{
		id: 8,
		home: {
			id: 15,
			name: 'Dnipro',
			img: 'https://www.flashscore.com/res/image/data/OWqdYSVH-jDhC79I0.png',
		},
		guest: {
			id: 16,
			name: 'Zorya',
			img: '	https://www.flashscore.com/res/image/data/OIakXq6k-AwgDMlJB.png',
		},
		goals: [
			{
				id: 1,
				team: 15,
			},
			{
				id: 1,
				team: 15,
			},
		],
		status: 'live',
		league: {
			id: 9,
			name: 'Ukraine Premier League',
			country: 'ukraine',
		},

		score: [],
	},
	{
		id: 9,
		home: {
			id: 17,
			name: 'Porto',
			img: '	https://www.flashscore.com/res/image/data/A5i3omUH-tr7Rzr1T.png	',
		},
		guest: {
			id: 18,
			name: 'Braga',
			img: '	https://www.flashscore.com/res/image/data/j3CGCQTH-Wjtfb9Jr.png',
		},
		goals: [],
		status: '22:00',
		league: {
			id: 8,
			name: 'Primera Liga',
			country: 'portugal',
		},

		score: [],
	},
	{
		id: 10,
		home: {
			id: 19,
			name: 'Juventus',
			img: 'https://www.flashscore.com/res/image/data/xxLGMOlC-nJE53Vjf.png',
		},
		guest: {
			id: 20,
			name: 'Napoli',
			img: '	https://www.flashscore.com/res/image/data/tSuMfRjT-GMIKdqxD.png',
		},
		goals: [],
		status: '21:45',
		league: {
			id: 4,
			name: 'Serie A',
			country: 'italy',
		},

		score: [],
	},
];

export default matches;
