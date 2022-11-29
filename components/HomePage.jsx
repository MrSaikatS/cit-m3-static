import Link from "next/link";

const HomePage = () => {
	return (
		<>
			<div className='grid place-items-center w-screen h-screen'>
				<div className=''>
					<div className='font-bold text-5xl'>
						CIT Module 3 Static Demo
					</div>

					<div className='h-1 bg-black my-4'></div>

					<div className='grid grid-flow-col place-items-center gap-4 text-xl'>
						<Link
							className='w-full text-center bg-fuchsia-500 rounded-xl px-8 py-4'
							href='/pageui'>
							Page UI
						</Link>

						<Link
							className='w-full text-center bg-fuchsia-500 rounded-xl px-8 py-4'
							href='/appui'>
							Application UI
						</Link>

						<Link
							className='w-full text-center bg-fuchsia-500 rounded-xl px-8 py-4'
							href='/ecomui'>
							Ecommerce UI
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
