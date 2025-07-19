function Header() {
	return (
		<header className="bg-gray-800 text-gray-100 p-2 border border-b-gray-1000 border-b-2">
			<div className="container mx-auto items-center text-center sm:flex justify-between">
				<h1 className="text-3xl font-bold underline decoration-3 mb-2 ">
					<a href="./" className="hover:text-blue-200 duration-300">
						Anime+
					</a>
				</h1>
				<h2 className="text-xl text-center">
					<span>⭐</span>アニメの評価を共有し、次に見る作品を見つけよう<span>⭐</span>
				</h2>
				<div className="flex flex-col justify-end text-center items-center">
					<img
						src="/ball.jpg"
						alt="YourIcon"
						className="w-15 h-15 rounded-full cursor-pointer mx-auto"
					/>
					<p className="">UserName</p>
				</div>
			</div>
		</header>
	)
}

export default Header
