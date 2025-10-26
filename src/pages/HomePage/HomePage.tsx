import React from 'react'
import { Box } from '@mui/material'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import FeaturesSection from './FeaturesSection'
import InfoSection from './InfoSection'
import CtaSection from './CtaSection'

const HomePage: React.FC = () => {
	return (
		<Box>
			<HeroSection />
			<Box mt={4}>
				<StatsSection />
			</Box>
			<Box mt={8}>
				<FeaturesSection />
			</Box>
			<Box mt={8}>
				<InfoSection />
			</Box>
			<Box mt={8}>
				<CtaSection />
			</Box>
		</Box>
	)
}

export default HomePage
