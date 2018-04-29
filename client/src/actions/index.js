export const FETCH_CURRENT_GAME = "fetch_current_game";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_CURRENT_GAME,
    payload: request
  };
}
