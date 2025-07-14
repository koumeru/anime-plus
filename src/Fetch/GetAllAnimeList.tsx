// import axios from 'axios';
// import useSWR from 'swr';

// interface Props {
//   page: number;
//   per_page: number;
// }

// interface AnimeListResponse {
//   works: any[];
// }

// const fetcher = async (url: string): Promise<any[]> => {
//     const response = await axios.get<AnimeListResponse>(url);
//     return response.data.works;
// };

// export function useAnimeListSWR({ page, per_page }: Props) {
//     const { data, error, isLoading } = useSWR(
//         `https://api.annict.com/v1/works?access_token=${
//             import.meta.env.VITE_ANNICT_API_KEY
//         }&sort_watchers_count=desc&page=${page}&per_page=${per_page}`,
//         fetcher
//     );
    
//     console.log('APIからのレスポンス:', data);
    
//     return {
//         animeList: data || [],
//         isLoading,
//         error
//     };
// }

// // 従来の関数も残しておく（必要に応じて）
// export async function GetAllAnimeList({ page, per_page }: Props): Promise<any[]> {
//     try {
//         const res = await axios.get<AnimeListResponse>(
//             `https://api.annict.com/v1/works?access_token=${
//                 import.meta.env.VITE_ANNICT_API_KEY
//             }&sort_watchers_count=desc&page=${page}&per_page=${per_page}`
//         );
//         console.log('APIからのレスポンス:', res.data);
//         return res.data.works;
//     } catch (error) {
//         console.error('Error fetching anime list:', error);
//         return [];
//     }
// }
