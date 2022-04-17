import React from 'react';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import CardThree from './CardThree';

const CardSection = () => {
    return (
        <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <CardOne 
            title="ohayo Japan" 
            paraText="The first human inhabitants of the Japanese archipelago have been traced to prehistoric times."
            buttonText="Lukram Selena"/>
          </div>
          <div className="col-4">
            <CardTwo
            title="Hello World"
            paraText="Portugal and Japan came into contact in 1543, when the Portuguese "
            buttonText="More.."
            />
          </div>
          <div className="col-4">
           <CardThree
           title="Hello Elon Musk"
           paraText="Elon Musk is the billionaire entrepreneur responsible for co-founding various vanguard companies like Tesla, SolarCity, SpaceX, and PayPal."
           buttonText="Know More.."
           />
          </div>
        </div>
      </div>
    </section>
    )
};

export default CardSection;