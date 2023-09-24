import Player from "./Player"

const PlayersList = () => {
  const playersArray = [
    {
      name: "Mohammed Salah",
      age: "30",
      currentTeam: "Liverpool",
      previousTeam: "Chelsea",
      shirtNumber: "11",
      nationality: "Egyptian",
      img: "https://cdn.fifacm.com/content/media/imgs/fifa23/players/p209331.png?v=22",
    },
    {
      name: "Cristiano Ronaldo",
      age: "38",
      currentTeam: "Al Nassr",
      previousTeam: "Manchester United",
      shirtNumber: "7",
      nationality: "Portugese",
      img: "https://cdn.fifacm.com/content/media/imgs/fifa23/players/p20801.png?v=22",
    },
    {
      name: "Lionel Messi",
      age: "36",
      currentTeam: "Inter Miami",
      previousTeam: "Paris Saint German",
      shirtNumber: "10",
      nationality: "Argentinian ",
      img: "https://cdn.fifacm.com/content/media/imgs/fifa23/players/p158023.png?v=22",
    },
  ]

  return (
    <>
      {playersArray.map((player) => {
        return <Player player={player}></Player>
      })}
    </>
  )
}

export default PlayersList
