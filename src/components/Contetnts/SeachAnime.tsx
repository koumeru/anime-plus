import { useKeyword } from '../../App'

export function SeachAnime() {
	const [keyword, setKeyword] = useKeyword()

	return (
		<div className=" text-gray-100 p-2 border border-b-gray-1000 border-b-2">
			<input
				className="display: block w-8/10 text-center bg-white mx-auto outline-2 my-2 p-1 rounded-3xl placeholder-gray-800 text-gray-800 font-bold"
				type="text"
				placeholder="アニメ作品を探す"
				onChange={(e) => setKeyword(e.target.value)}
			/>
		</div>
	)
}

export default SeachAnime
