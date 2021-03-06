const apiKey = process.env.REACT_APP_API_KEY
const corsUrl = 'https://cors-anywhere.herokuapp.com/'

export const genericUrl = `${corsUrl}http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc & apikey=${apiKey}`;
export const specificUrl = input => {
  return `${corsUrl}http://api.musixmatch.com/ws/1.1/track.search?q_artist=${input}&page_size=3&page=1&s_track_rating=desc & apikey=${apiKey}`;
};

export const specificCountryUrl = code => `${corsUrl}http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=${code}&f_has_lyrics=1%20&%20apikey=${apiKey}`;
export const youTubeUrl = (song, artist) => `https://www.youtube.com/embed?listType=search&list=${song}+${artist}`; //doesn't work use YT Data API instead
export const youTubeSearchUrl = (song, artist) => `https://www.youtube.com/results?search_query=${song}+${artist}`;



