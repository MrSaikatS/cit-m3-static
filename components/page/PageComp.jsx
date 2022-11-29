import Banner from "./Banner";
import CTASection from "./CTASection";
import Header from "./Header";
import HeroSection from "./HeroSection";

const PageComp = () => {
	return (
		<>
			<div className='container mx-auto my-2'>
				<div className='text-5xl font-bold font mb-2'>Banner</div>
				<Banner />
			</div>

			<div className='container mx-auto my-2'>
				<div className='text-5xl font-bold font mb-2'>Header</div>
				<Header />
			</div>

			<div className='container mx-auto my-2'>
				<div className='text-5xl font-bold font mb-2'>Hero Section</div>
				<HeroSection />
			</div>

			<div className='container mx-auto my-2'>
				<div className='text-5xl font-bold font mb-2'>CTA Section</div>
				<CTASection />
			</div>

			<div className='container mx-auto my-2'>
				<div className='text-5xl font-bold font mb-2'></div>
				<div className=''></div>
			</div>
		</>
	);
};

export default PageComp;
