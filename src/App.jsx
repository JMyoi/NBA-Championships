import './App.css'
import Card from './components/Card'
import nbaLogo from './assets/nbalogo.jpg'

const ChampionshipData = [
  {
    year: 2010,
    winner: "Los Angeles Lakers",
    score: "4-3 vs Boston Celtics",
    mvp: "Kobe Bryant",
    img: "https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg",
    link: "https://en.wikipedia.org/wiki/2010_NBA_Finals"
  },
  {
    year: 2011,
    winner: "Dallas Mavericks",
    score: "4-2 vs Miami Heat",
    mvp: "Dirk Nowitzki",
    img: "https://cdn.nba.com/logos/nba/1610612742/global/L/logo.svg",
    link: "https://en.wikipedia.org/wiki/2011_NBA_Finals"
  },
  {
    year: 2012,
    winner: "Miami Heat",
    score: "4-1 vs Oklahoma City Thunder",
    mvp: "LeBron James",
    img: "https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg",
    link: "https://en.wikipedia.org/wiki/2012_NBA_Finals"
  },
  {
    year: 2013,
    winner: "Miami Heat",
    score: "4-3 vs San Antonio Spurs",
    mvp: "LeBron James",
    img: "https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg",
    link: "https://en.wikipedia.org/wiki/2013_NBA_Finals"
  },
  {
    year: 2014,
    winner: "San Antonio Spurs",
    score: "4-1 vs Miami Heat",
    mvp: "Kawhi Leonard",
    img: "https://cdn.nba.com/logos/nba/1610612759/global/L/logo.svg",
    link: "https://en.wikipedia.org/wiki/2014_NBA_Finals"
  },
  {
    year: 2015,
    winner: "Golden State Warriors",
    score: "4-2 vs Cleveland Cavaliers",
    mvp: "Andre Iguodala",
    img: "https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg",
    link: "https://en.wikipedia.org/wiki/2015_NBA_Finals"
  },
  {
    year: 2016,
    winner: "Cleveland Cavaliers",
    score: "4-3 vs Golden State Warriors",
    mvp: "LeBron James",
    img: "https://cdn.nba.com/logos/nba/1610612739/global/L/logo.svg",
    link: "https://en.wikipedia.org/wiki/2016_NBA_Finals"
  },
  {
    year: 2017,
    winner: "Golden State Warriors",
    score: "4-1 vs Cleveland Cavaliers",
    mvp: "Kevin Durant",
    img: "https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg",
    link: "https://en.wikipedia.org/wiki/2017_NBA_Finals"
  },
  {
    year: 2018,
    winner: "Golden State Warriors",
    score: "4-0 vs Cleveland Cavaliers",
    mvp: "Kevin Durant",
    img: "https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg",
    link: "https://en.wikipedia.org/wiki/2018_NBA_Finals"
  },
  {
    year: 2019,
    winner: "Toronto Raptors",
    score: "4-2 vs Golden State Warriors",
    mvp: "Kawhi Leonard",
    img: "https://cdn.nba.com/logos/nba/1610612761/global/L/logo.svg",
    link: "https://en.wikipedia.org/wiki/2019_NBA_Finals"
  },
  {
    year: 2020,
    winner: "Los Angeles Lakers",
    score: "4-2 vs Miami Heat",
    mvp: "LeBron James",
    img: "https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg",
    link: "https://en.wikipedia.org/wiki/2020_NBA_Finals"
  },
  {
    year: 2021,
    winner: "Milwaukee Bucks",
    score: "4-2 vs Phoenix Suns",
    mvp: "Giannis Antetokounmpo",
    img: "https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg",
    link: "https://en.wikipedia.org/wiki/2021_NBA_Finals"
  },
  {
    year: 2022,
    winner: "Golden State Warriors",
    score: "4-2 vs Boston Celtics",
    mvp: "Stephen Curry",
    img: "https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg",
    link: "https://en.wikipedia.org/wiki/2022_NBA_Finals"
  },
  {
    year: 2023,
    winner: "Denver Nuggets",
    score: "4-1 vs Miami Heat",
    mvp: "Nikola Jokić",
    img: "https://cdn.nba.com/logos/nba/1610612743/global/L/logo.svg",
    link: "https://en.wikipedia.org/wiki/2023_NBA_Finals"
  },
  {
    year: 2024,
    winner: "Boston Celtics",
    score: "4-1 vs Dallas Mavericks",
    mvp: "Jaylen Brown",
    img: "https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg",
    link: "https://en.wikipedia.org/wiki/2024_NBA_Finals"
  },
  {
    year: 2025,
    winner: "Oklahoma City Thunder",
    score: "4-3 vs Indiana Pacers",
    mvp: "Shai Gilgeous-Alexander",
    img: "https://cdn.nba.com/logos/nba/1610612760/global/L/logo.svg",
    link: "https://en.wikipedia.org/wiki/2025_NBA_Finals"
  }
];



function App() {

    return(
    <>
        <img src={nbaLogo} alt="NBA logo" />
        <h1>
            List of NBA Championships
        </h1>
        <div className="card-grid">
            {ChampionshipData.map(chip => (
                <Card
                    key={chip.year}
                    year={chip.year}
                    winner={chip.winner}
                    score={chip.score}
                    mvp={chip.mvp}
                    img={chip.img}
                    link={chip.link}
                />
            ))}
        </div>
    </>
    )
}

export default App
