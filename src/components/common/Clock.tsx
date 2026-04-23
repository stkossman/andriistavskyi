import { useEffect, useState } from 'react'

export function Clock() {
	const [time, setTime] = useState<{ hours: string; minutes: string } | null>(
		null,
	)
	const [showColon, setShowColon] = useState(true)

	useEffect(() => {
		const updateTime = () => {
			const now = new Date()
			const formatter = new Intl.DateTimeFormat('en-GB', {
				timeZone: 'Europe/Kyiv',
				hour: '2-digit',
				minute: '2-digit',
			})

			const [hours, minutes] = formatter.format(now).split(':')

			setTime({ hours, minutes })
			setShowColon(prev => !prev)
		}

		updateTime()
		const interval = setInterval(updateTime, 1000)
		return () => clearInterval(interval)
	}, [])

	if (!time)
		return (
			<div className='h-5 text-sm font-mono text-text-muted uppercase tracking-wider' />
		)

	return (
		<div className='px-4 py-2'>
			<div className='text-sm text-text-primary uppercase tracking-wider flex items-center'>
				<span className='mr-2'>Ukraine</span>
				<span>{time.hours}</span>

				<span
					className={`mx-[1px] transition-opacity duration-150 ease-smooth ${
						showColon ? 'opacity-100' : 'opacity-0'
					}`}
				>
					:
				</span>

				<span>{time.minutes}</span>
			</div>
		</div>
	)
}
