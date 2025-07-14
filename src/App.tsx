import React, { createContext, useContext, useEffect, useState } from 'react'
import Header from './components/Header/Header'
import AnimeCard from './components/Contetnts/AnimeCard'
import SeachAnime from './components/Contetnts/SeachAnime'
import Pagenation from './components/Contetnts/Pagenation'
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

// ページのコンテキスト設定
const PageContext = createContext<[number, React.Dispatch<React.SetStateAction<number>>]>([
    1, 
    () => {}
])
export const usePage = () => {
	const context = useContext(PageContext)
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
	const [url, seturl] = useState('https://api.annict.com/v1/works?access_token=')

	// useSWRでアニメデータを取得
	const { data: animeList, isLoading } = useSWR(
		`${url}${
			import.meta.env.VITE_ANNICT_API_KEY
		}&sort_watchers_count=desc&page=${page}&per_page=${per_page}&filter_title=${keyword}`,
		fetcher
	)
	console.log('アニメリスト:', animeList)

	useEffect(() => {
		setPage(1) // キーワードが変わったらページをリセット
	}, [keyword])

	// フロントエンド
	return (
		<>
			<Header />
			<KeywordContext.Provider value={[keyword, setKeyword]}>
                <PageContext.Provider value={[page, setPage]}>
				<AnimeListContext.Provider value={[isLoading ? [] : animeList]}>
					<SeachAnime />
					<AnimeCard />
					<Pagenation />
				</AnimeListContext.Provider>
                </PageContext.Provider>
			</KeywordContext.Provider>
		</>
	)
}

export default App
