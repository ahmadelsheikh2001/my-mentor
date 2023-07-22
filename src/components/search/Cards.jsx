import React from 'react'
import photo1 from "../../../assets/images/ment1.jpg"
import photo2 from "../../../assets/images/ment2.jpg"
import photo3 from "../../../assets/images/ment3.jpg"
import photo4 from "../../../assets/images/ment4.jpg"
const Cards = ({selected}) => {
  return (
    <div className={selected=="Mentor"?'search-cards':"search-cards search-cards-mentee"}>
      <div className="search-card">
        <img src={photo1} alt="image" />
        <p class="black-bold-txt-large">Ralp Edwards</p>
        <p class="black-reguar-txt-mediam">Full Stack Developer</p>
      </div>
      <div className="search-card">
        <img src={photo2} alt="image" />
        <p class="black-bold-txt-large">Ralp Edwards</p>
        <p class="black-reguar-txt-mediam">Full Stack Developer</p>
      </div>
      <div className="search-card">
        <img src={photo3} alt="image" />
        <p class="black-bold-txt-large">Ralp Edwards</p>
        <p class="black-reguar-txt-mediam">Full Stack Developer</p>
      </div>
      <div className="search-card">
        <img src={photo4} alt="image" />
        <p class="black-bold-txt-large">Ralp Edwards</p>
        <p class="black-reguar-txt-mediam">Full Stack Developer</p>
      </div>
    </div>
  )
}

export default Cards