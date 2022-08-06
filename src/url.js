import {apikey} from './constants/constants'

export const originals =`discover/tv?api_key=${apikey}&with_networks=213`
export const action =`discover/movie?api_key=${apikey}&with_genres=28`
export const trending =`trending/all/week?api_key=${apikey}&language=en-US`
export const comedy =`discover/movie?api_key=${apikey}&with_genres=35`
export const horror =`discover/movie?api_key=${apikey}&with_genres=27`
export const romantic =`discover/movie?api_key=${apikey}&with_genres=10749`