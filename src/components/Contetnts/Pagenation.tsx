import { usePage } from "../../page/Top"
import { useAnimeList } from "../../page/Top"

function Pagenation() {
    const [page, setPage] = usePage()
    const [animeList] = useAnimeList()

    const isNextDisabled = !animeList || animeList.length < 20

    // フロントエンド
	return (
		<div style={{ textAlign: 'center', margin: '20px 0' }}>
			<button
				onClick={() => setPage(page - 1)}
				disabled={page <= 1}
				style={{
					padding: '8px 16px',
					marginRight: '10px',
					backgroundColor: page <= 1 ? '#ccc' : '#007bff',
					color: 'white',
					border: 'none',
					borderRadius: '4px',
					cursor: page <= 1 ? 'not-allowed' : 'pointer',
				}}
			>
				前へ
			</button>

			<span style={{ margin: '0 15px', fontSize: '14px' }}>
				ページ {page} ({animeList?.length || 0}件表示)
			</span>
			<button
				onClick={() => setPage(page + 1)}
				disabled={isNextDisabled}
				style={{
					padding: '8px 16px',
					marginLeft: '10px',
					backgroundColor: isNextDisabled ? '#ccc' : '#007bff',
					color: 'white',
					border: 'none',
					borderRadius: '4px',
					cursor: isNextDisabled ? 'not-allowed' : 'pointer',
				}}
			>
				次へ
			</button>
		</div>
	)
}

export default Pagenation
