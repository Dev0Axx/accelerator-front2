import React from 'react'
import { Paper, Typography, Button, Stack, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PhishingIcon from '@mui/icons-material/Phishing'

const HeroSection: React.FC = () => {
	const navigate = useNavigate()

	return (
		<Paper
			sx={{
				backgroundColor: 'primary.main',
				color: 'white',
				py: 8,
				borderRadius: 2,
				textAlign: 'center',
			}}
		>
			<Container maxWidth='md'>
				<Stack
					direction='row'
					alignItems='center'
					justifyContent='center'
					gap={2}
					mb={1}
				>
					<PhishingIcon sx={{ fontSize: '90px' }} />
					<Typography variant='h2' component='h1' sx={{ fontWeight: 'bold' }}>
						Система учёта улова
					</Typography>
				</Stack>
				<Typography variant='h5' component='p' sx={{ mb: 4, opacity: 0.9 }}>
					Современная платформа для контроля и управления рыболовными квотами
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
							px: 4,
							py: 1.5,
						}}
					>
						Добавить улов
					</Button>
					<Button
						variant='outlined'
						size='large'
						onClick={() => navigate('/overview')}
						sx={{
							borderColor: 'white',
							color: 'white',
							'&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
							px: 4,
							py: 1.5,
						}}
					>
						Смотреть статистику
					</Button>
				</Stack>
			</Container>
		</Paper>
	)
}

export default HeroSection
