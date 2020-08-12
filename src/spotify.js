export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://spotify-clone-a26f3.web.app/";
const clientId = "4090009b953843fb86eefb84c9b54bd2";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]
export const getTokenFromUrl = () => {
    return window.location.hash
     .substring(1)
     .split("&")
     .reduce((intial , item)=>{
         var parts = item.split('=');
         intial[parts[0]] = decodeURIComponent(parts[1]);
         return intial;
     },{});
}
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
