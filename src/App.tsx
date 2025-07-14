import React, { createContext, useContext, useEffect, useState } from 'react'
import Header from './components/Header/Header'
import AnimeCard from './components/Contetnts/AnimeCard'
import SeachAnime from './components/Contetnts/SeachAnime'
import useSWR from 'swr'
import axios from 'axios'

// keywordのコンテキスト設定
const KeywordContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>([
	'',
	() => {},
])
export const useKeyword = () => {
	const context = useContext(KeywordContext)
	return context
}

// アニメリストのコンテキスト設定
const AnimeListContext = createContext<[any[]]>([[]])
export const useAnimeList = () => {
	const context = useContext(AnimeListContext)
	return context
}

// APIからアニメデータを取得する関数（useSWRを使って高速化）
async function fetcher(key: string) {
	const response = await axios.get<any>(key)
	return response.data.works
}

function App() {
	const [keyword, setKeyword] = useState('')
	const [page, setPage] = useState(1)
	const per_page = 20

	// useSWRでアニメデータを取得
	const {
		data: animeList,
		error,
		isLoading,
	} = useSWR(
		`https://api.annict.com/v1/works?access_token=${
			import.meta.env.VITE_ANNICT_API_KEY
		}&sort_watchers_count=desc&page=${page}&per_page=${per_page}&filter_title=${keyword}`,
		fetcher
	)
	console.log('アニメリスト:', animeList)

	// フロントエンド
	return (
		<>
			<Header />
			<KeywordContext.Provider value={[keyword, setKeyword]}>
				<AnimeListContext.Provider value={[isLoading? [] : animeList]}>
					<SeachAnime />
					<AnimeCard />
				</AnimeListContext.Provider>
			</KeywordContext.Provider>
			{/* ページネーション */}
			<button onClick={() => setPage(page - 1)} disabled={page <= 1}>
				前へ
			</button>
			<button onClick={() => setPage(page + 1)}>次へ</button>
		</>
	)
}

export default App
