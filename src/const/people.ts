type PersonLink = {
	label: string
	url: string
}

type NotableWork = readonly [PersonLink] | readonly [PersonLink, PersonLink]

export type Person = {
	name: string
	role: string
	context: string
	note: string
	profile: PersonLink
	notableWork?: NotableWork
}

export const PEOPLE: readonly Person[] = [
	{
		name: 'Anton Anpilohov',
		role: 'Former AI Content Manager / Open to work',
		context:
			'We studied together and worked on university assignments and projects as a team.',
		note: 'Anton consistently showed strong teamwork and was very easy to collaborate with. We worked well together on university projects, with strong communication and natural team chemistry.',
		profile: {
			label: 'LinkedIn',
			url: 'https://www.linkedin.com/in/tosentai/',
		},
	},
	{
		name: 'Danylo Marynych',
		role: 'Software engineering student',
		context:
			'We studied together and later completed the SoftServe practice and internship work together on the Cinema Booking Platform.',
		note: 'Danylo is a reliable teammate with whom I have worked both at university and on the Cinema Booking Platform. We communicate easily, work well under shared ownership, and have strong team chemistry.',
		profile: {
			label: 'LinkedIn',
			url: 'https://www.linkedin.com/in/danylo-marynych-2b60063a0/',
		},
		notableWork: [
			{
				label: 'Cinema Platform Backend',
				url: 'https://github.com/ModusTeam/cinema-platform-back',
			},
		],
	},
	{
		name: 'Halyna Melnyk',
		role: 'Senior Softserve Academy Mentor',
		context:
			'My main mentor during the SoftServe internship on Victory Center.',
		note: 'Halyna was my main mentor during the SoftServe internship. She combines strong development experience with the ability to make difficult things feel approachable, and she made the internship much more engaging and easier to navigate. I am genuinely grateful for her guidance and hope our paths cross at SoftServe again.',
		profile: {
			label: 'LinkedIn',
			url: 'https://www.linkedin.com/in/halyna-melnyk-45222718/',
		},
	},
] as const
