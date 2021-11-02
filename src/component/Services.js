import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    Services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Lorem ipson dolor sit amet consectty Lorem ipson dolor sit amet consectty",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Lorem ipson dolor sit amet consectty Lorem ipson dolor sit amet consectty",
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shuttle",
        info: "Lorem ipson dolor sit amet consectty Lorem ipson dolor sit amet consectty",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Lorem ipson dolor sit amet consectty Lorem ipson dolor sit amet consectty",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.Services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
