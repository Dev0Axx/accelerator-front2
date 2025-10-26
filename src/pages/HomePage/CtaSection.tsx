import React from 'react'
import { Paper, Typography, Button, Stack, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const CtaSection: React.FC = () => {
	const navigate = useNavigate()

	return (
		<Paper
			sx={{
				p: 4,
				bgcolor: 'primary.main',
				color: 'white',
				textAlign: 'center',
				borderRadius: 2,
			}}
		>
			<Typography variant='h5' gutterBottom sx={{ fontWeight: 'bold' }}>
				Начните работу прямо сейчас!
			</Typography>
			<Typography variant='body1' sx={{ mb: 3, opacity: 0.9 }}>
				Добавьте первый улов или ознакомьтесь с существующей статистикой
			</Typography>
			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				spacing={2}
				justifyContent='center'
			>
				<Button
					variant='contained'
					size='large'
					onClick={() => navigate('/catch')}
					sx={{
						bgcolor: 'white',
						color: 'primary.main',
						'&:hover': { bgcolor: 'grey.100' },
					}}
				>
					Добавить улов
				</Button>
				<Button
					variant='outlined'
					size='large'
					onClick={() => navigate('/my-catches')}
					sx={{
						borderColor: 'white',
						color: 'white',
						'&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
					}}
				>
					Мои уловы
				</Button>
			</Stack>
		</Paper>
	)
}

export default CtaSection
