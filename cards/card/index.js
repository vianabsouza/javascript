const info = {
  name: "Grogu",
  description: "Mando's best friend",
  image: "./assets/grogu.jpg",
  wikipedia:
    "https://www.disneyplus.com/pt-br/series/the-mandalorian/3jLIGMDYINqD",
  disney:
    "https://www.disneyplus.com/pt-br/series/the-mandalorian/3jLIGMDYINqD",
  instagram: "https://www.instagram.com/themandalorian/",
  bio: "Hello! I'm Grogu, also known as Baby Yoda. I'm an adorable little creature of the same species as the legendary Master Yoda. Discovered by the bounty hunter Mandalorian, I embarked on adventures across the galaxy, displaying my powerful connection to the Force. Despite my small size, I'm curious and protective of my friends. I love exploring the universe, trying new foods, and playing with my toys. With a pure heart and unwavering determination, I'm ready to face any challenge alongside my friends. May the Force be with us!",
};

document.getElementById("image").src = info.image;
document.getElementById("name").innerHTML = info.name;
document.getElementById("description").innerHTML = info.description;
document.getElementById("wikipedia").href = info.wikipedia;
document.getElementById("disney").href = info.disney;
document.getElementById("instagram").href = info.instagram;
document.getElementById("bio").innerHTML = info.bio;
