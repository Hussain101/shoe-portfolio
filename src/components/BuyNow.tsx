export const BuyNow = () => {
	return (
		<section className="third-section h-screen bg-black relative ">
			<div className="z-20 absolute top-[30%] left-24 flex flex-col justify-center border border-purple-800 text-purple-800 p-5 rounded-lg">
				<h1 className="font-bold font-rubix text-5xl">
					Enter The Details
				</h1>
				<div className="flex items-center gap-2 pt-2">
					<input
						type="text"
						className="bg-transparent border border-purple-800 rounded-md text-purple-800 p-2 placeholder:text-purple-700 flex-1"
						placeholder="First Name..."
					/>
					<input
						type="text"
						className="bg-transparent border border-purple-800 rounded-md text-purple-800 p-2 placeholder:text-purple-700 flex-1"
						placeholder="Your Email..."
					/>
				</div>
				{/* <select className="mt-2 p-2 bg-transparent border border-purple-700 rounded-lg flex-1">
					<option value="">List of bad jokes</option>
					<option value="">Almost as good as the real thing</option>
					<option value="">
						Sneakers that won't break the bank (or your heart)
					</option>
					<option value="">A budget-friendly way to flex</option>
					<option value="">The ultimate knockoff kicks</option>
				</select> */}
				<button
					onClick={() =>
						alert(
							"Congratulations"
						)
					}
					className="border border-purple-800 p-2 mt-2 rounded-lg text-purple-700 hover:bg-green-500 hover:text-white transition duration-500"
				>
					Buy now 
					
				</button>
			</div>
		</section>
	);
};
