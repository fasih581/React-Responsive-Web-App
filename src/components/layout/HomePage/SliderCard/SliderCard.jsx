import Css from "./SliderCard.module.css";

// IMG
import img1 from "../../../../assets/img1.jpg";
import img2 from "../../../../assets/img2.jpg";
import img3 from "../../../../assets/img3.jpg";

import Button from "@mui/material/Button";

import Carousel from "react-elastic-carousel";

const SliderCard = () => {
  const breakPoints = [{ width: 400, itemsToShow: 1 }];

  const cards = [
    {
      id: 1,
      image: img1,
      description: "Lower",
      details: "Interest Rates",
    },
    {
      id: 2,
      image: img2,
      description: "Interest",
      details: "Free Payments",
    },
    {
      id: 3,
      image: img3,
      description: "Discount on",
      details: "materials",
    },
  ];

  return (
    <>
      <div className={Css.cardboxAll}>
        <h2>Unlock Premium Features Now</h2>
        <div className={Css.cardbox}>
          <Carousel breakPoints={breakPoints}>
            {cards.map((cards, index) => (
              <div key={index} className={Css.card}>
                <div className={Css.cardTop}>
                  <img src={cards.image} alt={cards.title} />
                </div>
                <div className={Css.cardBottom}>
                  <p>{cards.description}</p>
                  <span>{cards.details}</span>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className={Css.divBtn}>
          <Button variant="contained" className={Css.btn}>
            <a href="/form">UNLOCK NOW</a>
          </Button>
          <Button variant="contained" className={Css.btn}>
            DETAILS
          </Button>
        </div>
      </div>
    </>
  );
};

export default SliderCard;
