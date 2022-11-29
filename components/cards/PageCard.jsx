import Link from "next/link";

const PageCard = () => {
	return (
		<>
			<div className='shadow p-4 rounded-xl'>
				<div className='text-4xl font-bold underline decoration-4 underline-offset-4 decoration-sky-500 text-center pb-6'>
					Page UI Components
				</div>

				<div className='grid grid-flow-col place-items-center gap-4 text-xl'>
					<Link
						className='w-full text-center bg-fuchsia-500 rounded-xl py-3'
						href='/pageui/banner'>
						<span className='px-6'>Banner</span>
					</Link>

					<Link
						className='w-full text-center bg-fuchsia-500 rounded-xl py-3'
						href='/pageui/header'>
						<span className='px-6'>Header</span>
					</Link>

					<Link
						className='w-full text-center bg-fuchsia-500 rounded-xl py-3'
						href='/pageui/hero'>
						<span className='px-6'>Hero Section</span>
					</Link>
					<Link
						className='w-full text-center bg-fuchsia-500 rounded-xl py-3'
						href='/pageui/cta'>
						<span className='px-6'>CTA Section</span>
					</Link>
					<Link
						className='w-full text-center bg-fuchsia-500 rounded-xl py-3'
						href='/pageui/feature'>
						<span className='px-6'>Feature Section</span>
					</Link>
				</div>
			</div>
		</>
	);
};

export default PageCard;
