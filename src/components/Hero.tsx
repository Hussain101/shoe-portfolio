export const Hero = () => {
	return (
		<section className="h-screen relative bg-purple-900 ">
			<div className="absolute top-[40%] left-20 z-20">
				<h1 className="text-5xl text-white font-mynerver font-bold">
				Air Style Jordans				</h1>
				<p className="w-[500px] pt-2 text-white text-justify text-sm">
				Introducing the Air Inspired Jordans the perfect sneakers for those who love style without the hefty price tag! These kicks bring the same bold look and comfort as the originals, so you can step out with confidence. They're so sleek and comfy that people might just ask, "Are those Jordans?" And you can proudly say, "Not quite, but theyve got the same energy!" So go ahead—rock these sneakers with pride, knowing you're making a smart, stylish choice that turns heads without breaking the bank!
				</p>

				<button
					onClick={() =>
						alert(
							"I wont take you there scroll down for yourself. Sheesh!!"
						)
					}
					className="bg-red-800 p-2 rounded-lg text-white mt-5 hover:bg-red-500 hover:scale-110 hover:text-white transition duration-500"
				>
					Enlighten Me
				</button>
			</div>
		</section>
	);
};
