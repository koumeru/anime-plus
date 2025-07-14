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

	const [allAnimeList, setAllAnimeList] = useState<any[]>([])
	const [isLoadingAll, setIsLoadingAll] = useState(false)
	const per_page = 20

	// useSWRでアニメデータを取得
	const {
		data: animeList,
		error,
		isLoading,
	} = useSWR(
		`https://api.annict.com/v1/works?access_token=${
			import.meta.env.VITE_ANNICT_API_KEY
		}&sort_watchers_count=desc&page=${page}&per_page=${per_page}`,
		fetcher
	)
	console.log('アニメリスト:', animeList, 'ローディング:', isLoading, 'エラー:', error)

	const loadAllAnimeData = async () => {
		setIsLoadingAll(true)
		try {
			let allData: any[] = []
			let currentPage = 1
			let hasMore = true

			while (hasMore) {
				const response = await axios.get(
					`https://api.annict.com/v1/works?access_token=${
						import.meta.env.VITE_ANNICT_API_KEY
					}&sort_watchers_count=desc&page=${currentPage}&per_page=${50}`
				)

				const works = response.data.works
				if (works && works.length > 0) {
					allData = [...allData, ...works]
					currentPage++
					console.log(
						`ページ${currentPage - 1}のデータを取得しました。累計: ${allData.length}件`
					)
				} else {
					hasMore = false
				}

				// APIの負荷を考慮して少し待機
				// await new Promise((resolve) => setTimeout(resolve, 100))
			}

			setAllAnimeList(allData)
			console.log(`全データの取得が完了しました。総件数: ${allData.length}件`)
		} catch (error) {
			console.error('全データ取得中にエラーが発生しました:', error)
		} finally {
			setIsLoadingAll(false)
		}
	}

    useEffect(() => {
        // 初回レンダリング時に全アニメデータを取得
        isLoadingAll ||
        loadAllAnimeData()  
    }, [])

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
