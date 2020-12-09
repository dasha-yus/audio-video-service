const Video = require("./models/video");
const Audio = require("./models/audio");
const User = require("./models/user");

let videos = [
	// Biography
    {
		topic: "Biography",
		title: "Legend № 17",
		image: "/images/video/17.jpg",
   		video: "https://www.youtube.com/embed/BRWyTgdWKZY",
		description: "September 2, 1972. Montreal. The USSR hockey team defeated the Canadian NHL professionals with " +
					 "a crushing score 7: 3 in the opening match of the epoch-making USSR-Canada Super Series. It was not " +
					 "just a game, it was a battle for their country, which turned the world view of hockey upside down. " +
					 "Now the whole world knew him just by the number 17. Valery Kharlamov, who scored 2 goals in that " +
					 "match, instantly took off to the top of fame. His dream came true - perseverance, sports talent and " +
					 "the harsh lessons of the great coach Anatoly Tarasov made number 17 a legend of world hockey.",
    	numberOfViews: 0
    },
    {
		topic: "Biography",
		title: "Hacksaw Ridge",
		image: "/images/video/ridje.jpg",
   		video: "https://www.youtube.com/embed/s2-1hz1juBI",
		description: "The true story of Pfc. Desmond T. Doss (Andrew Garfield), who won the Congressional Medal " +
					 "of Honor despite refusing to bear arms during WWII on religious grounds. Doss was drafted and " +
					 "ostracized by fellow soldiers for his pacifist stance but went on to earn respect and adoration " +
					 "for his bravery, selflessness and compassion after he risked his life -- without firing a shot -- " +
					 "to save 75 men in the Battle of Okinawa.",
    	numberOfViews: 169
	},
	{
		topic: "Biography",
		title: "The King",
		image: "/images/video/king.jpg",
   		video: "https://www.youtube.com/embed/yMJnsTx-TBg",
		description: "Shakespeare’s plays have been a source of entertainment for centuries on the page, the stage and the " +
					 "screen. Director David Michôd’s The King, which reimagines Shakespeare’s Henriad plays, is the latest " +
					 "entry in the vast body of adaptations of the Bard’s works. The King follows the life of a young Prince " +
					 "Hal, from his days of drinking and gambling to his eventual rise to the throne of the King of England, " +
					 "from which he must navigate politics, betrayal, war and the chaos his father left in his wake.",
    	numberOfViews: 0
	},
	{
		topic: "Biography",
		title: "Togo",
		image: "/images/video/togo.jpg",
   		video: "https://www.youtube.com/embed/HMfyueM-ZBQ",
		description: "Togo is a 2019 American drama adventure film directed by Ericson Core and produced by Walt Disney Pictures. " +
					  "The film centers on Leonhard Seppala and his titular sled dog in the 1925 serum run to Nome to transport " +
					  "diphtheria antitoxin serum through harsh conditions during an epidemic of diphtheria. The film stars Willem Dafoe, " +
					  "Julianne Nicholson, Christopher Heyerdahl, Michael Gaston, Michael McElhatton, Jamie McShane, Michael Greyeyes, " +
					  "Thorbjørn Harr, Shaun Benson and Nikolai Nikolaeff. It was released on Disney+ on December 20, 2019.",
    	numberOfViews: 0
	},
	{
		topic: "Biography",
		title: "The Last Dance",
		image: "/images/video/jordan.jpg",
   		video: "https://www.youtube.com/embed/Peh9Yqf1GXc",
		description: "The 10-part documentary series provided an in-depth look at the Chicago Bulls' dynasty through the lens of the " +
					 "final championship season in 1997-98. The Bulls allowed an NBA Entertainment crew to follow the team around for " +
					 "that entire season, and some of that never-before-seen footage is featured in the documentary. In addition, ESPN " +
					 "spoke to more than 100 people close to the team and personalities who experienced the run, exploring all angles of " +
					 "the Jordan phenomenon.",
    	numberOfViews: 0
	},
	{
		topic: "Biography",
		title: "Snowden",
		image: "/images/video/snowden.jpg",
   		video: "https://www.youtube.com/embed/QlSAiI3xMh4",
		description: "Disillusioned with the intelligence community, top contractor Edward Snowden (Joseph Gordon-Levitt) leaves his " +
					 "job at the National Security Agency. He now knows that a virtual mountain of data is being assembled to track all " +
					 "forms of digital communication -- not just from foreign governments and terrorist groups, but from ordinary " +
					 "Americans. When Snowden decides to leak this classified information, he becomes a traitor to some, a hero to " +
					 "others and a fugitive from the law.",
    	numberOfViews: 0
	},
	{
		topic: "Biography",
		title: "The Pursuit of Happyness",
		image: "/images/video/happyness.jpg",
   		video: "https://www.youtube.com/embed/89Kq8SDyvfg",
		description: "Based on a true story about a man named Christopher Gardner. Gardner has invested heavily in a device known as " +
					 "a Bone density scanner. He feels like he has it made selling these devices. However, they do not sell well as " +
					 "they are marginally better than x-ray at a much higher price. As Gardner works to make ends meet, his wife leaves " +
					 "him and he loses his apartment. Forced to live out in the streets with his son, Gardner continues to sell bone " +
					 "density scanners while concurrently taking on an unpaid internship as a stockbroker, with slim chances for " +
					 "advancement to a paid position. Before he can receive pay, he needs to outshine the competition through 6 months " +
					 "of training, and to sell his devices to stay afloat.",
    	numberOfViews: 0
	},
	// Top-grossing
	{
		topic: "Top-grossing",
		title: "Avengers: Endgame",
		image: "/images/video/avengers.jpg",
   		video: "https://www.youtube.com/embed/hA6hldpSTF8",
		description: "The surviving members of the Avengers team and their allies must develop a new plan that will help withstand " +
					 "the ravages of the powerful titan Thanos. After the most ambitious and tragic battle in history, they cannot " +
					 "make a mistake.",
    	numberOfViews: 108
    },
    {
		topic: "Top-grossing",
		title: "Avatar",
		image: "/images/video/avatar.jpg",
   		video: "https://www.youtube.com/embed/6ziBFh3V1aM",
		description: "Avatar is an American science fiction film written and directed by James Cameron, starring Sam Worthington, " +
					 "Zoë Saldaña, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver. It was made by Lightstorm Entertainment " +
					 "and released by 20th Century Fox on December 18, 2009. The film is set in the year 2154 on Pandora, a fictional " +
					 "Earth-like moon in a distant planetary system. Humans are engaged in mining Pandora's reserves of a precious " +
					 "mineral known as unobtanium, while the Na'vi — the sapient and sentient race of humanoids indigenous to the moon " +
					 "— resist the colonists' expansion, which threatens the continued existence of the Na'vi and the Pandoran ecosystem.",
    	numberOfViews: 0
	},
	{
		topic: "Top-grossing",
		title: "Titanic",
		image: "/images/video/titanic.jpg",
   		video: "https://www.youtube.com/embed/ZQ6klONCq4s",
		description: "The Titanic has 87 awards and 48 more nominations. The most significant of these are 11 Academy Awards: Best Film, " +
					 "Best Director, Best Cinematography, Best Set, Best Costumes, Best Sound, Best Editing, Best Sound Editing, Best " +
					 "Visual Effects, Best Song, Best Drama Soundtrack. Young lovers Jack and Rose find each other on the first and last " +
					 "voyage of the unsinkable Titanic. They could not have known that the luxurious liner would collide with an iceberg " +
					 "in the cold waters of the North Atlantic, and their passionate love would turn into a fight with death ...",
    	numberOfViews: 80
	},
	{
		topic: "Top-grossing",
		title: "Star Wars: Episode VII",
		image: "/images/video/stars.jpg",
   		video: "https://www.youtube.com/embed/sGbxmsDFVnE",
		description: "The film takes place approximately 30 years after the events of Return of the Jedi. Luke Skywalker, the last Jedi, " +
					 "is missing. The First Order, the successor to the Galactic Empire, scours the galaxy for Luke. Looking for him and " +
					 "the Resistance - the troops of the Rebel Alliance, led by Luke's sister, General Leia Organa. Poe Dameron, the best " +
					 "pilot of the Resistance, is sent to a village on the planet Jakku to retrieve a map of Luke Skywalker's location. But " +
					 "the stormtroopers, led by Captain Phasma and Kylo Ren, an adept of the dark side of the Force, take Poe prisoner and " +
					 "destroy the village. Poe's droid, BB-8, escapes with a map and stumbles upon a flea market, whose residents are " +
					 "looking for and selling technical junk. There he meets a young seeker Rei and befriends her.",
    	numberOfViews: 0
	},
	{
		topic: "Top-grossing",
		title: "The Lion King",
		image: "/images/video/lion.jpg",
   		video: "https://www.youtube.com/embed/7TavVZMewpY",
		description: "The Lion King tells the story of Simba (Swahili for lion), a young lion who is to succeed his father, Mufasa, as " +
					 "King of the Pride Lands; however, after Simba's paternal uncle Scar murders Mufasa, Simba is manipulated into thinking " +
					 "he was responsible and flees into exile.",
    	numberOfViews: 0
	},
	{
		topic: "Top-grossing",
		title: "Furious Seven",
		image: "/images/video/furious.jpg",
   		video: "https://www.youtube.com/embed/Skpu5HaVkOc",
		description: "Furious 7 is a 2015 American action film directed by James Wan. The seventh feature film in the The Fast and the " +
					 "Furious franchise, Furious 7 was given limited release March 26, 2015 at the interactive film and music festival, " +
					 "South by Southwest and internationally April 3, 2015. The film received generally positive reviews from critics and " +
					 "audiences alike. It was in the top ten in U.S. based on box office. Also internationally it was a major blockbuster " +
					 "success, grossing $1.516 billion worldwide against its $190 million budget.",
    	numberOfViews: 0
	},
	{
		topic: "Top-grossing",
		title: "Jurassic World",
		image: "/images/video/world.jpg",
   		video: "https://www.youtube.com/embed/RFinNxS5KN4",
		description: "Steven Spielberg's legendary franchise returns. The dream of millions of people has come true. The world famous " +
					 "dinosaur island attracts crowds of tourists from all over the world. Is this the world's greatest attraction or " +
					 "mortal danger?",
    	numberOfViews: 0
	},
	// Drama
	{
		topic: "Drama",
		title: "Intouchables",
		image: "/images/video/1+1.jpg",
   		video: "https://www.youtube.com/embed/34WIbmXkewU",
		description: "In Paris, the aristocratic and intellectual Philippe is a quadriplegic millionaire who is interviewing candidates " +
					 "for the position of his carer, with his red-haired secretary Magalie. Out of the blue, Driss cuts the line of " +
					 "candidates and brings a document from the Social Security and asks Phillipe to sign it to prove that he is seeking " +
					 "a job position so he can receive his unemployment benefit. Philippe challenges Driss, offering him a trial period of " +
					 "one month to gain experience helping him. Then Driss can decide whether he would like to stay with him or not. Driss " +
					 "accepts the challenge and moves to the mansion, changing the boring life of Phillipe and his employees.",
    	numberOfViews: 0
    },
    {
		topic: "Drama",
		title: "The Lucky One",
		image: "/images/video/lucky.jpg",
   		video: "https://www.youtube.com/embed/9w8lE83oYeM",
		description: "Nicholas Sparks is one of the most screened writers of our time. His novels look great on screen, and therefore " +
					 "often inspire Hollywood directors. Kinoslava did not pass by the novel Lucky. Lucky (original title The LuckyOne) " +
					 "is the fourteenth novel by Nicholas Sparks. This time, the author tells the amazing story of a Marine who was able to " +
					 "go through the war thanks to a photo accidentally found. Now that the hero has returned to a peaceful life, he wants " +
					 "by all means to find the girl depicted on her.",
    	numberOfViews: 12
	},
	{
		topic: "Drama",
		title: "Seven Pounds",
		image: "/images/video/7.jpg",
   		video: "https://www.youtube.com/embed/zdMpeO5G4OQ",
		description: "Haunted by a secret, Ben Thomas looks for redemption by radically transforming the lives of seven people he doesn't " +
					 "know. Once his plan is set, nothing will be able to stop him. At least that's what he thinks. But Ben hadn't planned " +
					 "on falling in love with one of these people and she's the one who will end up transforming him.",
    	numberOfViews: 65
	},
	{	
		topic: "Drama",
		title: "The Imitation Game",
		image: "/images/video/game.jpg",
   		video: "https://www.youtube.com/embed/nuPZUUED5uk",
		description: "Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against " +
					 "time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and Cypher School at " +
					 "Bletchley Park, during the darkest days of World War II.",
    	numberOfViews: 0
	},
	{	
		topic: "Drama",
		title: "Everest",
		image: "/images/video/everest.jpg",
   		video: "https://www.youtube.com/embed/5ZQVpPiOji0",
		description: "On the morning of May 10, 1996, climbers from two commercial expeditions start their final ascent toward the summit " +
					 "of Mount Everest, the highest point on Earth. With little warning, a violent storm strikes the mountain, engulfing " +
					 "the adventurers in one of the fiercest blizzards ever encountered by man. Challenged by the harshest conditions " +
					 "imaginable, the teams must endure blistering winds and freezing temperatures in an epic battle to survive against " +
					 "nearly impossible odds.",
    	numberOfViews: 48
	},
	{	
		topic: "Drama",
		title: "Southpaw",
		image: "/images/video/southpaw.jpg",
   		video: "https://www.youtube.com/embed/Mh2ebPxhoLs",
		description: "Southpaw is a 2015 American sports drama film directed by Antoine Fuqua, written by Kurt Sutter and starring Jake " +
					 "Gyllenhaal, Forest Whitaker and Rachel McAdams. The film follows a boxer who sets out to get his life back on track " +
					 "after losing his wife in an accident and his young daughter to protective services.",
    	numberOfViews: 0
	},
	{
		topic: "Drama",
		title: "Gifted",
		image: "/images/video/gifted.jpg",
   		video: "https://www.youtube.com/embed/tI01wBXGHUs",
		description: "Gifted is a 2017 American drama film directed by Marc Webb and written by Tom Flynn. It stars Chris Evans, Mckenna " +
					 "Grace, Lindsay Duncan, Jenny Slate and Octavia Spencer. The plot follows an intellectually gifted seven-year-old who " +
					 "becomes the subject of a custody battle between her uncle and grandmother.",
    	numberOfViews: 170
	}
]

// AUDIO
const avrilLavigneDescription = "Singer Avril Lavigne has finally released her new album Head above Water. It includes 12 tracks, including the " +
								"previously published Head above Water and a collaboration with Nicki Minaj. This disc was already the sixth for " +
								"Lavigne in a row and the first after a five-year creative break."
const oneRepublicDescription = "Human is the fifth studio album by alternative American band OneRepublic, released to the public on May 8, 2020 " +
								"via Mosley Music Group and Interscope Records. The band's frontman Ryan Tedder announced the album in September 2019, " +
								"announcing the release date - the end of November of the same year. However, later Tedder reported that the album has " +
								"been postponed until the second quarter of 2020, due to the inability to physically finish the album on the stated date. " +
								"The lead single Rescue Me was released on May 17, 2019 and peaked at # 5 on the US Billboard Bubbling Under Hot 100."
const alanWalkerDescription = "Different World is the debut studio album by Norwegian record producer Alan Walker. It was released on 14 December " +
							  "2018 through MER Musikk and Sony Music Entertainment and includes his successful 2015 single Faded. The album also " +
							  "succeeds a trilogy of releases leading up to the album, entitled World of Walker, which consisted of the singles " +
							  "All Falls Down, Darkside and Diamond Heart."
const justinBieberDescription = "Changes is the fifth studio album by Canadian singer Justin Bieber. It was released on February 14, 2020, by Def Jam " +
								"Recordings and RBMG serving as the follow-up to Purpose. Changes was preceded by two singles: Yummy was released as the " +
								"lead single on January 3, 2020, which debuted and peaked at number two on the Billboard Hot 100. Intentions featuring " +
								"Quavo of the hip-hop trio Migos, was released as the second single on February 7, 2020. On January 28, 2020, Get Me " +
								"featuring American singer Kehlani was released as a promotional single."
const maroon5Description = "Three-time GRAMMYr Award-winning multiplatinum band Maroon 5 announce their highly anticipated 6th studio album, " +
							"Red Pill Blues, is set to debut on November 3, 2017 (222/ Interscope). Executive produced by J. Kash, and featuring " +
							"special guest appearances by SZA, Julia Michaels, A$AP Rocky and LunchMoney Lewis.The band will perform What Lovers Do " +
							"on NBC's Tonight Show, Today Show, Ellen DeGeneres, and The Voice during the album's release week."

let audios = [
    {
		albom: "Head Above Water",
		song: "Head Above Water",
		singer: "Avril Lavigne",
		image: "/images/audio/avril.jpg",
   		mp3: "https://xn--80anjg9azc.me/download/OTU1NTQyODczNTkxZGRjNTI2YzRhZWFmZGUyNDJiYzl8bG9hZA.mp3",
		description: avrilLavigneDescription,
    	numberOfViews: 140
	},
	{
		albom: "Head Above Water",
		song: "Warrior",
		singer: "Avril Lavigne",
		image: "/images/audio/avril.jpg",
   		mp3: "https://muzonov.net/uploads/files/2019-02/1550329258_avril-lavigne-warrior-2019-muzonov_net.mp3",
		description: avrilLavigneDescription,
    	numberOfViews: 10
	},
	{
		albom: "Head Above Water",
		song: "Goddess",
		singer: "Avril Lavigne",
		image: "/images/audio/avril.jpg",
   		mp3: "https://muzonov.net/uploads/files/2019-02/1550230237_avril-lavigne-goddess-2019-muzonov_net.mp3",
		description: avrilLavigneDescription,
    	numberOfViews: 0
	},
	{
		albom: "Head Above Water",
		song: "Souvenir",
		singer: "Avril Lavigne",
		image: "/images/audio/avril.jpg",
   		mp3: "https://muzonov.net/uploads/files/2019-02/1550327451_avril-lavigne-souvenir-2019-muzonov_net.mp3",
		description: avrilLavigneDescription,
    	numberOfViews: 0
	},
	{
		albom: "Human",
		song: "Didn't I",
		singer: "OneRepublic",
		image: "/images/audio/one.jpg",
		mp3: "https://muzonov.net/files/music/2020/03/onerepublic-didn-t-i.mp3",
		description: oneRepublicDescription,
    	numberOfViews: 0
	},
	{
		albom: "Human",
		song: "Rescue Me",
		singer: "OneRepublic",
		image: "/images/audio/one.jpg",
		mp3: "https://muzonov.net/uploads/files/2019-05/1558444724_onerepublic-rescue-me.mp3",
		description: oneRepublicDescription,
    	numberOfViews: 0
	},
	{
		albom: "Human",
		song: "Wanted",
		singer: "OneRepublic",
		image: "/images/audio/one.jpg",
		mp3: "https://muzonov.net/uploads/files/2019-09/1567750944_onerepublic-wanted.mp3",
		description: oneRepublicDescription,
    	numberOfViews: 0
	},
	{
		albom: "Human",
		song: "Better Days",
		singer: "OneRepublic",
		image: "/images/audio/one.jpg",
		mp3: "https://muzonov.net/files/music/2020/05/onerepublic-feat-negramaro-better-days-giorni-migliori.mp3",
		description: oneRepublicDescription,
    	numberOfViews: 90
	},
	{
		albom: "Different World",
		song: "Faded",
		singer: "Alan Walker",
		image: "/images/audio/walker.jpg",
		mp3: "https://muzonov.net/uploads/files/2018-01/1515320555_alan-walker-faded-www_muzonov_net.mp3",
		description: alanWalkerDescription,
    	numberOfViews: 290
	},
	{
		albom: "Different World",
		song: "Alone",
		singer: "Alan Walker",
		image: "/images/audio/walker.jpg",
		mp3: "https://xn--80anjg9azc.me/download/YzY5YTExY2M4ZmY3OWU5YWFhODJhZjdhNDZiOGRjY2N8bG9hZA.mp3",
		description: alanWalkerDescription,
    	numberOfViews: 0
	},
	{
		albom: "Different World",
		song: "Darkside",
		singer: "Alan Walker",
		image: "/images/audio/walker.jpg",
		mp3: "https://muzonov.net/uploads/files/2020-02/1581452130_alan-walker-darkside-feat_-aura-tomine-harket.mp3",
		description: alanWalkerDescription,
    	numberOfViews: 0
	},
	{
		albom: "Different World",
		song: "Sing Me To Sleep",
		singer: "Alan Walker",
		image: "/images/audio/walker.jpg",
		mp3: "https://muzonov.net/uploads/files/2019-04/1554366666_alan-walker-sing-me-to-sleep-2018-muzonov_net.mp3",
		description: alanWalkerDescription,
    	numberOfViews: 0
	},
	{
		albom: "Changes",
		song: "Changes",
		singer: "Justin Bieber",
		image: "/images/audio/changes.jpg",
		mp3: "https://muzonov.net/uploads/files/2020-01/1580220118_justin-bieber-changes.mp3",
		description: justinBieberDescription,
    	numberOfViews: 0
	},
	{
		albom: "Changes",
		song: "Yummy",
		singer: "Justin Bieber",
		image: "/images/audio/changes.jpg",
		mp3: "https://dl.muzonovs.ru/files/music/2020/09/justin-bieber-dzhastin-biber-yummy.mp3",
		description: justinBieberDescription,
    	numberOfViews: 0
	},
	{
		albom: "Changes",
		song: "Intentions",
		singer: "Justin Bieber",
		image: "/images/audio/changes.jpg",
		mp3: "https://muzonov.net/uploads/files/2020-02/1581133166_justin-bieber-quavo-intentions.mp3",
		description: justinBieberDescription,
    	numberOfViews: 0
	},
	{
		albom: "Changes",
		song: "Forever",
		singer: "Justin Bieber",
		image: "/images/audio/changes.jpg",
		mp3: "https://muzonov.net/files/music/2020/02/justin-bieber-post-malone-clever-forever.mp3",
		description: justinBieberDescription,
    	numberOfViews: 80
	},
	{
		albom: "Red Pill Blues",
		song: "Girls Like You",
		singer: "Maroon 5",
		image: "/images/audio/5.jpg",
		mp3: "https://static.muzlo.cc/download/24717/Maroon-5-Cardi-B_-_Girls-Like-You.mp3",
		description: maroon5Description,
    	numberOfViews: 100
	},
	{
		albom: "Red Pill Blues",
		song: "What Lovers Do",
		singer: "Maroon 5",
		image: "/images/audio/5.jpg",
		mp3: "https://xn--80anjg9azc.me/download/NDg1MTgxMzg1YmJkZGI1NDQ3M2M3NjU0YWVjYWFmNzd8bG9hZA.mp3",
		description: maroon5Description,
    	numberOfViews: 0
	},
	{
		albom: "Red Pill Blues",
		song: "Best 4 U",
		singer: "Maroon 5",
		image: "/images/audio/5.jpg",
		mp3: "https://muzonov.net/uploads/files/2019-02/1550066499_maroon-5-best-4-u-2017-muzonov_net.mp3",
		description: maroon5Description,
    	numberOfViews: 0
	},
	{
		albom: "Red Pill Blues",
		song: "Help Me Out",
		singer: "Maroon 5",
		image: "/images/audio/5.jpg",
   		mp3: "https://muzonov.net/uploads/files/2019-02/1550066475_maroon-5-help-me-out-2017-muzonov_net.mp3",
		description: maroon5Description,
    	numberOfViews: 0
	},
]

// USERS
let users = [
	{
		name: 'admin',
		email: 'admin@mail.ru',
		password: '$2a$10$UWr5YCW6gweRQFk3bxKZMeZnpkR82liSDS.MXwvVzKqxeiItAm6VS', // 1234567
		role: 'admin'
	},
	{
		name: 'user',
		email: 'user@mail.ru',
		password: "$2a$10$BzDM/aX062knpsOXMwxKMOC8Cfs.ICQ8wShDcTgHAvG8Ttk1r4AKa", // 12345
		role: 'user'
	}
]

function seedDB(){
	Video.remove({}, err => {
		if(err) console.log(err);
		console.log("removed posts!");
		videos.forEach(seed => {
			Video.create(seed, (err, videos) => {
				if(err) {
					console.log(err)
				} else {
					console.log("added a video post");
				}
			});
		});
	});
	Audio.remove({}, err => {
		if(err) console.log(err);
		console.log("removed posts!");
		audios.forEach(seed => {
			Audio.create(seed, (err, audios) => {
				if(err) {
					console.log(err)
				} else {
					console.log("added an audio post");
				}
			});
		});
	});
	User.remove({}, err => {
		if(err) console.log(err);
		console.log("removed users!");
		users.forEach(seed => {
			User.create(seed, (err, users) => {
				if(err) {
					console.log(err)
				} else {
					console.log("added a user");
				}
			});
		});
    });
}

module.exports = seedDB;