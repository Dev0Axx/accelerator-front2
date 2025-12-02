import React from 'react'
import { Box, Typography, Button, Container, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const CtaSection: React.FC = () => {
	const navigate = useNavigate()

	return (
		<Paper
			elevation={3}
			sx={{
				bgcolor: 'primary.main',
				color: 'white',
				py: { xs: 6, md: 8 },
				borderRadius: 2,
				textAlign: 'center',
			}}
		>
			<Container maxWidth='md'>
				<Typography
					variant='h3'
					component='h2'
					sx={{
						fontWeight: 700,
						mb: 2,
						fontSize: { xs: '2rem', md: '2.5rem' },
					}}
				>
					Готовы начать?
				</Typography>

				<Typography
					variant='h6'
					component='p'
					sx={{
						opacity: 0.9,
						mb: 4,
						maxWidth: '600px',
						margin: '0 auto',
						fontSize: { xs: '1rem', md: '1.1rem' },
						lineHeight: 1.6,
					}}
				>
					Присоединяйтесь к платформе сегодня и упростите управление рыболовной
					деятельностью вашей компании
				</Typography>

				<Box
					mt={4}
					sx={{
						display: 'flex',
						gap: 2,
						justifyContent: 'center',
						flexWrap: 'wrap',
					}}
				>
					<Button
						variant='contained'
						size='large'
						onClick={() => navigate('/register')}
						sx={{
							bgcolor: 'white',
							color: 'primary.main',
							px: 4,
							py: 1.5,
							fontSize: '1.1rem',
							fontWeight: 600,
							borderRadius: 2,
							'&:hover': {
								bgcolor: 'grey.100',
								transform: 'translateY(-2px)',
							},
							transition: 'all 0.2s ease-in-out',
						}}
					>
						Зарегистрировать компанию
					</Button>
					<Button
						variant='outlined'
						size='large'
						onClick={() => navigate('/contact')}
						sx={{
							borderColor: 'white',
							color: 'white',
							px: 4,
							py: 1.5,
							fontSize: '1.1rem',
							fontWeight: 600,
							borderRadius: 2,
							'&:hover': {
								bgcolor: 'rgba(255,255,255,0.1)',
								transform: 'translateY(-2px)',
							},
							transition: 'all 0.2s ease-in-out',
						}}
					>
						Связаться с нами
					</Button>
				</Box>
			</Container>
		</Paper>
	)
}

export default CtaSection
