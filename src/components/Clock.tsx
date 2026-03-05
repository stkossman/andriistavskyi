import { useState, useEffect } from 'react'

export function Clock() {
	const [time, setTime] = useState<string>('')

	useEffect(() => {
		const updateTime = () => {
			const now = new Date()
			const formatter = new Intl.DateTimeFormat('en-GB', {
				timeZone: 'Europe/Kyiv',
				hour: '2-digit',
				minute: '2-digit',
			})
			setTime(`Ukraine ${formatter.format(now)}`)
		}

		updateTime()
		const interval = setInterval(updateTime, 10000)
		return () => clearInterval(interval)
	}, [])

	if (!time)
		return (
			<div className='h-5 text-sm font-mono text-text-muted uppercase tracking-wider' />
		)

	return (
		<div className='px-4 py-2 border-2 rounded-full border-text-primary'>
			<div className='text-sm text-text-primary uppercase tracking-wider'>
				{time}
			</div>
		</div>
	)
}
