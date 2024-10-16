import { API_URL } from "../config"
import { Cover, Result } from "../types"

export async function getGames (page=1): Promise<Result> {
  const res = await fetch(`${API_URL}/api/video-games?populate[platforms][fields][0]=name&populate[cover][fields][0]=url&pagination[pageSize]=1&pagination[page]=${page}`)
  if (!res.ok) {
    throw new Error(`Something went wrong`)
  }

  return await res.json()
}

export function getCoverImage (cover: Cover) {
  return `${API_URL}${cover.url}`
}