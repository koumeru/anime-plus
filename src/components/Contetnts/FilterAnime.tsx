import { useSortURL, usePage, useFilterSeason } from '../../page/Top'
import { useState } from 'react'

function FilterAnime() {
	const [sort, setSort] = useSortURL()
	const [page, setPage] = usePage()
	const [filter_season, setFilterSeason] = useFilterSeason()
	const [year, setYear] = useState('')

	return (
		<div className="flex justify-around p-2 font-bold text-white bg-gray-600">
			<button
				className="cursor-pointer hover:border-b-1 hover:text-sky-200"
				onClick={() => {
					setSort('sort_watchers_count=desc')
					setFilterSeason('')
					setPage(1)
                    setYear('')
				}}
			>
				人気順
			</button>

			<button
				className="cursor-pointer hover:border-b-1"
				onClick={() => {
					setSort('sort_season=asc')
					setFilterSeason('')
					setPage(1)
                    setYear('')
				}}
			>
				放送時期順
			</button>

			<div className="flex flex-col justify-center">
				<label htmlFor="year">年代から探す</label>
				<input
                    id="year"
					type="number"
                    value={year}
                    pattern='[0-9]*'
					placeholder="例: 2020"
                    min="1900"
                    max={new Date().getFullYear() + 1}
					maxLength={4}
					className="bg-white border border-gray-300 rounded text-gray-800 font-bold"
					onChange={(e) => {
						setYear(e.target.value)
						if (
							e.target.value.length === 4 &&
							Number(e.target.value) <= new Date().getFullYear() + 1
						) {
							setFilterSeason(`&filter_season=${e.target.value}-all`)
							setPage(1)
						} else {
							setFilterSeason('')
							setPage(1)
						}
					}}
				/>
			</div>
		</div>
	)
}

export default FilterAnime
