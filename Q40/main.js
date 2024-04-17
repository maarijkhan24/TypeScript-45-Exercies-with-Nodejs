// Define the make_album functions
function make_album(artist_name, albhum_title, tracks) {
    var album = {
        artist: artist_name,
        title: albhum_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions and creating 3 variable with different values
var albhum1 = make_album("Maarij", "Albhum title 1");
var album2 = make_album("Usman", "Albhum title 2");
var album3 = make_album("Ali", "Albhum title 3", 12);
// Print the variables
console.log(albhum1);
console.log(album2);
console.log(album3);
