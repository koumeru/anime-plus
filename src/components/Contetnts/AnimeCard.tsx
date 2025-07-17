import { useAnimeList } from '../../page/Top'

function AnimeCard() {
	const [animeList] = useAnimeList()
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
			{animeList.map((anime) => (
				<div key={anime.id} className="bg-gray-800 rounded-lg p-4">
					{/* <img
						src={anime.images.recommended_url}
						alt={anime.title}
						className="w-full h-48 object-cover rounded-lg"
					></img> */}
					<h3 className="text-lg font-semibold text-gray-100 mr-4">{anime.title}</h3>
					<div className="flex items-center mt-2">
						<p className="text-gray-300 mr-2">{anime.season_name_text}放送</p>
						<p className="text-gray-300 ">（全{anime.episodes_count}話）</p>
					</div>
					<h4>
						<a
							href={anime.official_site_url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-400 hover:underline mt-2 block"
						>
							{anime.official_site_url ? '公式サイト' : '公式サイトなし'}
						</a>
					</h4>
					<div className="flex-col text-right">
						<p className="text-gray-300">
							<i className="bi bi-tv mr-1"></i>
							{anime.watchers_count}
						</p>
						<p className="text-gray-300">
							<i className="bi bi-chat-dots mr-1"></i>
							{anime.reviews_count}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default AnimeCard
