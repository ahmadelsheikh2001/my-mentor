import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import '../CarouselCard/CarouselCard.css';
import ment1 from '../../assets/images/ment1.jpg'
import ment2 from '../../assets/images/ment2.jpg'
import ment3 from '../../assets/images/ment3.jpg'
import ment4 from '../../assets/images/ment4.jpg'
import ment5 from '../../assets/images/ment5.jpg'
import ment6 from '../../assets/images/ment6.jpg'

const CarouselCard = () => {
  // let span = document.getElementsByTagName('span');
  let card = document.getElementsByClassName('carousel-card');
  let card_page = Math.ceil(card.length / 4);
  let left = 0;
  
  let movePer = 25.34;
  let maxMove = 203;

  //<---------------- mobile_view ---------------->
  const mob_view = window.matchMedia("(max-width: 768px)");
  if (mob_view.matches) {
    movePer = 50.36;
    maxMove = 504;
  }
  //<---------------- mobile_view ---------------->
  const right_mover = () => {
    left = left + movePer;
    if (card === 1) { left = 0; }
    for (const i of card) {
      if (left > maxMove) { left = left - movePer; }
      i.style.left = '-' + left + '%';
    }

  }
  const left_mover = () => {
    left = left - movePer;
    if (left <= 0) { left = 0; }
    for (const i of card) {
      if (card_page > 1) {
        i.style.left = '-' + left + '%';
      }
    }
  }
  const arr = [
    { photoMentor: ment1, nameMentor: 'noura Ahmed', jobMentor: "Full Stack Developer", stars: 4.8 },
    { photoMentor: ment2, nameMentor: 'Shima Ali', jobMentor: "Front End Developer", stars: 4.2 },
    { photoMentor: ment3, nameMentor: 'ali Ahmed', jobMentor: "Back End Developer", stars: 3.4 },
    { photoMentor: ment4, nameMentor: 'mona Salah', jobMentor: "Front End Developer", stars: 4.6 },
    { photoMentor: ment5, nameMentor: 'ahmed Hassan', jobMentor: "Full Stack Developer", stars: 3.9 },
    { photoMentor: ment6, nameMentor: 'omar Mohamed', jobMentor: "Back End Developer", stars: 4.1 },
    { photoMentor: ment1, nameMentor: 'noura Ahmed', jobMentor: "Full Stack Developer", stars: 4.8 },
    { photoMentor: ment2, nameMentor: 'Shima Ali', jobMentor: "Front End Developer", stars: 4.2 },
    { photoMentor: ment3, nameMentor: 'ali Ahmed', jobMentor: "Back End Developer", stars: 3.4 },
    { photoMentor: ment4, nameMentor: 'mona Salah', jobMentor: "Front End Developer", stars: 4.6 },
    { photoMentor: ment5, nameMentor: 'ahmed Hassan', jobMentor: "Full Stack Developer", stars: 3.9 },
    { photoMentor: ment6, nameMentor: 'omar Mohamed', jobMentor: "Back End Developer", stars: 4.1 }];
  return (
    <div>
      <div class="main-carousel">
        <div class="carousel-header">
          <h2>Discover Egypt’s top mentors</h2>
          <p class="arrows">
            <span onClick={left_mover}><BsArrowLeftCircle className='arrow' /></span>
            <span onClick={right_mover}><BsArrowRightCircle className='arrow' /></span>
          </p>
        </div>
        <div class="carousel-section">
          {
            arr.map((info) => {
              return (
                <div class="carousel-card">
                  <picture>
                    <img src={info.photoMentor} alt="" />
                    <div class="reviews">
                      <p> <span><AiFillStar className='start' /> {info.stars}</span> (289 reviews) </p>
                    </div>
                  </picture>

                  <div class="carousel-detail">
                    <h2>{info.nameMentor}</h2>
                    <p>{info.jobMentor}</p>
                  </div>

                </div>
              )

            })

          }
        </div >
      </div>
    </div>
  )
}

export default CarouselCard