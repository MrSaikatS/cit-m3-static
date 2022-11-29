import PageCard from "./cards/PageCard";
import AppCard from "./cards/AppCard";
import EcomCard from "./cards/EcomCard";

const HomePage = () => {
	return (
		<>
			<div className='grid place-items-center w-screen h-screen'>
				<div className=''>
					<div className='font-bold text-5xl text-center'>
						CIT Module 3 Static UI Demos
					</div>

					<div className='h-1 bg-black my-4'></div>
				</div>

				{/* Cards */}
				<div className='grid gap-6'>
					{/* 1 */}
					<PageCard />

					{/* 2 */}
					<AppCard />

					{/* 3 */}
					<EcomCard />
				</div>
			</div>
		</>
	);
};

export default HomePage;
