import { useState } from "react"

const Player = (props) => {
  const { player } = props
  const [descriptionShowed, setDescriptionShowed] = useState(true)
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col mb-4 col-md-4">
          <div className="card">
            <button
              className="btn"
              onClick={() => setDescriptionShowed(!descriptionShowed)}
            >
              <img
                src={player.img}
                className="card-img-top"
                style={{ height: 200, width: 200 }}
                alt="..."
              />
            </button>
            s
            <div className="card-body">
              <h3 className="card-title">
                {player.name},{player.age}
              </h3>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <p hidden={descriptionShowed}>
            {player.name} is a professional football player who currently plays
            for {player.currentTeam}, at an age of {player.age}, whos shirt
            number is {player.shirtNumber} and is {player.nationality}
          </p>
        </div>
      </div>
    </>
  )
}

export default Player
