const timer = document.getElementById("timer");

const worldCupDate = new Date("June 11, 2026 15:00:00 EDT");

function updateCountdown() {

    const now = new Date();
    const difference = worldCupDate - now;

    if (difference <= 0) {
        timer.innerHTML = `
            <div class="countdown-box">
                <h2>🟢 World Cup 2026 is LIVE!</h2>
                <p>Kickoff has begun — June 11, 3:00 PM EST</p>
            </div>
        `;
        return;
    }

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds % 60);

    timer.innerHTML =
        `<div class="countdown-box">
            <div><span>${days}</span><p>Days</p></div>
            <div><span>${hours}</span><p>Hours</p></div>
            <div><span>${minutes}</span><p>Minutes</p></div>
            <div><span>${seconds}</span><p>Seconds</p></div>
        </div>`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* Creating the Footer */
const footer = document.createElement("footer");
document.body.appendChild(footer);

/* Creates the Year */
const today = new Date();
const thisYear = today.getFullYear();

const footerElement = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = `\u00A9 ${thisYear} Hector Barahona`;

footerElement.appendChild(copyright);

/* Player Descriptions */
const playerDescriptions = {

    154: "Messi is one of the greatest football players ever and still changes games with his vision and passing.",

    874: "Cristiano Ronaldo remains one of the most dangerous goal scorers in football history.",

    153: "Dembele's speed and dribbling make him one of the most exciting wingers in the tournament.",

    386828: "Lamine Yamal is one of the youngest rising stars in world football.",

    762: "Vinicius Jr brings elite pace and creativity to Brazil's attack.",

    17: "Christian Pulisic is the leader of the USMNT attack and one of the most important American players heading into the World Cup. His speed, dribbling, and creativity make him a constant threat in big matches."
};

/* Career Breakdowns */
const playerCareers = {

    154: `Lionel Messi is widely regarded as the greatest footballer of all time, often called the GOAT due to his unmatched consistency, creativity, and record-breaking achievements. He joined FC Barcelona's La Masia academy as a child and quickly became the centerpiece of a golden generation. From his debut in 2004, Messi redefined attacking football with his dribbling, vision, and goal scoring ability.

At Barcelona, Messi spent over 20 years building one of the most dominant careers in football history. He won multiple UEFA Champions League titles, countless La Liga trophies, and a record number of Ballon d'Or awards. His partnership with players like Xavi and Iniesta created one of the greatest club dynasties ever seen.

After leaving Barcelona in 2021, Messi joined Paris Saint-Germain where he continued competing at the highest level while adapting to a new league and system. Even outside Spain, his influence and performance remained world-class, showing his ability to succeed anywhere he plays.

In 2023, Messi moved to Inter Miami, transforming Major League Soccer and bringing global attention to the league. His international legacy was sealed in 2022 when he led Argentina to a World Cup victory, completing the final achievement missing from his career.

Career Timeline:
<ul>
<li>Barcelona (2004-2021) - Champions League titles, La Liga dominance, 7 Ballon d'Or wins</li>  
<li>Paris Saint-Germain (2021-2023) - Ligue 1 champion</li>  
<li>Inter Miami (2023-present) - MLS global impact</li>  
<li>Argentina (2005-present) - 2022 World Cup champion</li>
</ul>`,

    874: `Cristiano Ronaldo is one of the greatest goal scorers in football history, known for his discipline, athleticism, and relentless drive to improve. He began his professional journey at Sporting CP in Portugal before quickly catching the attention of Manchester United scouts due to his explosive pace and technical skill.

At Manchester United, Ronaldo developed into a global superstar under Sir Alex Ferguson. He won the Premier League, FA Cup, and his first Champions League title before earning his first Ballon d'Or, marking him as one of the best players in the world.

His move to Real Madrid in 2009 defined an era of football dominance. Ronaldo became the club's all-time top scorer and won multiple Champions League titles while competing in one of the greatest rivalries in sports history against Lionel Messi.

He later continued his success at Juventus and returned to Manchester United before moving to Al Nassr in Saudi Arabia, where he continues his career. Internationally, he led Portugal to Euro 2016 and the Nations League title, becoming his country's greatest player.

Career Timeline:
<ul>
<li>Sporting CP (2002-2003) - Professional debut</li>  
<li>Manchester United (2003-2009, 2021-2022) - Premier League & Champions League winner</li>  
<li>Real Madrid (2009-2018) - 4 Champions League titles, multiple Ballon d'Or wins</li>  
<li>Juventus (2018-2021) - Serie A champion</li>  
<li>Al Nassr (2023-present) - Continued professional career</li>  
<li>Portugal (2003-present) - Euro 2016 & Nations League champion</li>
</ul>`,

    153: `Ousmane Dembélé is one of the most naturally gifted and unpredictable wingers in modern football. He began his rise at Rennes in France, where his dribbling ability and two-footed skill quickly made him a standout young talent in Europe.

His breakout came at Borussia Dortmund, where he exploded onto the European stage with goals, assists, and incredible creativity. His performances earned him a major transfer to Barcelona at just 20 years old, placing him under huge expectations.

At Barcelona, Dembélé experienced both success and setbacks, including injuries that interrupted his momentum. Despite this, he remained an important squad player, contributing to league titles and key matches when fit.

Later, he joined Paris Saint-Germain, where he continued competing at the highest level in France and Europe. When in form, Dembélé remains one of the most dangerous attacking players in the world due to his speed and unpredictability.

Career Timeline:
<ul>
<li>Rennes (2015-2016) - Professional debut</li>  
<li>Borussia Dortmund (2016-2017) - Breakout season</li>  
<li>Barcelona (2017-2023) - La Liga champion</li>  
<li>Paris Saint-Germain (2023-present) - Ligue 1 & Champions League contender</li>
</ul>`,

    386828: `Lamine Yamal is one of the most exciting young talents in world football, emerging as a future superstar from FC Barcelona's legendary La Masia academy. From a very young age, he showed exceptional technical ability, vision, and confidence beyond his years.

He made his breakthrough into Barcelona's first team as a teenager, instantly becoming one of the youngest players to compete at the top level of European football. His performances quickly drew attention for his creativity and maturity on the ball.

Despite his age, Yamal has already begun influencing matches in La Liga and international competitions for Spain. His ability to take on defenders and create chances makes him a rare talent in modern football.

As he continues to develop, many believe he has the potential to become one of the defining players of his generation, with Barcelona building part of their future around him.

Career Timeline:
<ul>
<li>Barcelona Youth Academy (La Masia) (2014-2023) - Development</li>  
<li>Barcelona First Team (2023-present) - Breakthrough star</li>  
<li>Spain National Team (2023-present) - Emerging international player</li>
</ul>`,

    762: `Vinícius Júnior is one of the most dangerous attacking players in world football, known for his pace, flair, and ability to break down defenses. He began his career at Flamengo in Brazil, where his raw talent made him one of the most talked-about young prospects in South America.

He joined Real Madrid in 2018 as a teenager and initially struggled with consistency in front of goal. However, through development and confidence, he transformed into one of the club's most important players.

Vinícius became a decisive force in Champions League matches, scoring crucial goals and playing a key role in Real Madrid's European success. His partnership with teammates in attack helped the club dominate both domestically and in Europe.

Today, he is widely regarded as one of the best wingers in the world and a key figure for both Real Madrid and the Brazil national team.

Career Timeline:
<ul>
<li>Flamengo (2017-2018) - Professional debut</li>  
<li>Real Madrid (2018-present) - Champions League winner & La Liga champion</li>  
<li>Brazil National Team (2019-present) - Senior international player</li>
</ul>`,

    17: `Christian Pulisic is one of the most influential American soccer players in modern history, often nicknamed “Captain America” for his leadership and impact. He rose through the youth system in the United States before moving to Europe at a young age to develop at the highest level.

His breakthrough came at Borussia Dortmund, where he became one of the youngest Americans to succeed in a top European league. His speed, dribbling, and attacking intelligence made him a standout talent.

He later transferred to Chelsea, where he became the first American player to win the UEFA Champions League, playing a key role in their European title run. His success continued in Italy with AC Milan, where he remains an important attacking player.

For the United States Men's National Team, Pulisic has been the face of the program's modern era, leading them in international competitions and helping elevate American soccer on the global stage.

Career Timeline:
<ul>
<li>Borussia Dortmund (2015-2019) - Breakthrough talent</li>  
<li>Chelsea (2019-2023) - Champions League winner</li>  
<li>AC Milan (2023-present) - Serie A impact player</li>  
<li>USA National Team (2016-present) - Team leader</li>
</ul>`
};

/* API Configuration */
const API_KEY = "229786b58ef1834a44d9594bc19096eb";

const API_HEADERS = {
    "x-apisports-key": API_KEY
};


/* Player Buttons */
const buttons = document.querySelectorAll("#players button");

buttons.forEach((button) => {

    button.addEventListener("click", function () {
        
        const extraContent = document.getElementById("extra-content");
        extraContent.innerHTML = ""; // clear previous career/trophy view

        const playerId = button.dataset.id;

        /* FIRST GET REQUEST */
        fetch(`https://v3.football.api-sports.io/players/profiles?player=${playerId}`, {

            method: "GET",

            headers: API_HEADERS
        })

        .then((res) => res.json())

        .then((data) => {

            const playerCard = document.getElementById("player-card");

            const extraContent = document.getElementById("extra-content");

            if (!data.response || data.response.length === 0) {

                playerCard.innerHTML = "<p>No player found.</p>";

                return;
            }

            const player = data.response[0].player;

            playerCard.innerHTML = `
                <div class="player-card">

                    <img src="${player.photo}" alt="${player.name}">

                    <h3>${player.name} #${player.number}</h3>

                    <p><strong>Nationality:</strong> ${player.nationality}</p>

                    <p><strong>Player Age:</strong> ${player.age}</p>

                    <p><strong>Position:</strong> ${player.position}</p>

                    <h4>Why Watch This Player:</h4>

                    <p>${playerDescriptions[playerId]}</p>

                </div>
            `;


            /* Career Button */
            const careerBtn = document.getElementById("career-btn");

            careerBtn.onclick = function () {

                extraContent.innerHTML =
                    `<div class="career-section">
                        <h4>Career Journey</h4>
                        <p>${playerCareers[playerId].split("\n\n").join("</p><p>")}</p>
                    </div>`;
            };


            /* Trophy Button */
            const trophyBtn = document.getElementById("trophy-btn");

            trophyBtn.onclick = function () {

                /* SECOND GET REQUEST */
                fetch(`https://v3.football.api-sports.io/trophies?player=${playerId}`, {

                    method: "GET",

                    headers: API_HEADERS
                })

                .then((res) => res.json())

                .then((trophyData) => {

                    const winners = trophyData.response.filter((trophy) => {
                        return trophy.place === "Winner";
                    });

                    extraContent.innerHTML = `
                        <h4>🏆Trophy Cabinet</h4>

                        <ul id="trophy-list"></ul>
                    `;

                    const trophyList = document.getElementById("trophy-list");

                    if (winners.length === 0) {

                        trophyList.innerHTML = "<li>No trophies found.</li>";

                        return;
                    }

                    winners.forEach((trophy) => {

                        const trophyItem = document.createElement("li");

                        if (trophy.season === null) {

                            trophyItem.innerHTML = `
                                🏆 ${trophy.league}
                            `;
                        }

                        else {

                            trophyItem.innerHTML = `
                                🏆 ${trophy.league} (${trophy.season})
                            `;
                        }

                        trophyList.appendChild(trophyItem);
                    });

                })

                .catch((error) => {
                    extraContent.innerHTML = `
                        <p>Unable to load trophies.</p>
                    `;
                });

            };

        })

        .catch((error) => {
            const playerCard = document.getElementById("player-card");
            playerCard.innerHTML = "<p>Something went wrong loading player data.</p>";
        });

    });

});

