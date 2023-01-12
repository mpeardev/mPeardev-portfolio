import anime from "animejs/lib/anime.es.js";
import { useState, useRef, useEffect } from "react";
import { MdHeadphones } from "../../icons";
import classes from "./player.module.scss";

const ticks = Array.from(Array(8));

export const Player = ({ openComingModal }) => {
  const [playing, setPlaying] = useState();
  const animation = useRef(null);

  const handleClick = () => {
    playing ? mute() : animation.current.play();
    setPlaying(!playing);
  };

  const mute = () => {
    animation.current.restart();
    animation.current.pause();
  };

  useEffect(() => {
    animation.current = anime.timeline({
      direction: "alternate",
      loop: true,
      duration: 500,
      autoplay: playing ? true : false,
      easing: "easeInOutSine",
    });

    for (const tick in ticks) {
      animation.current.add(
        {
          targets: `li:nth-child(${Number(tick) + 1})`,
          scaleY: 1.5 + Math.random() * 4,
        },
        Math.random() * 600
      );
    }
  }, []);

  return (
    <div className={classes.player} onClick={openComingModal}>
      <div className={classes.player__icon}>
        {!playing && <div>/</div>}
        <MdHeadphones size="1.5rem" />
      </div>
      <div>
        <ul className={classes.player__dots}>
          {ticks.map((_, i) => (
            <li key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};
