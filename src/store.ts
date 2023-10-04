import { Genre } from "./assets/hooks/useGenres";
import { Platform } from "./assets/hooks/usePlatforms";
import { create } from 'zustand'

export interface GameQuery {
    genreId?:number,
    platformId?:number | null,
    selectedSort?:string ,
    searchText?: string 
  
  }
  interface GameQueryStore{
    gameQuery:GameQuery,
    setGenreId : (genreId:number) => void,
    setPlatformId: (platformId:number|null) => void,
    setSearch: (searchText:string) => void,
    setSort: (sortOrder:string) => void
  }


const useGameStore = create<GameQueryStore>((set) => ({
gameQuery: {},
setGenreId: (genreId) => set(store => ({gameQuery:{...store.gameQuery,genreId}})),
setPlatformId:(platformId) => set(store => ({gameQuery:{...store.gameQuery,platformId}})),
setSearch:((searchText) => set(() => ({gameQuery:{searchText}}))),
setSort:(setOrder => set((store) => ({gameQuery:{...store.gameQuery,setOrder}})))


}))

export default useGameStore