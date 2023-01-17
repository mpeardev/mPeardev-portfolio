import anime from "animejs/lib/anime.es.js";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { MdHeadphones } from "/src/ui/icons";
import classes from "./player.module.scss";
import music from "/src/assets/mp3/set.mp3";

const ticks = Array.from(Array(8));

export const Player = () => {
  const [playing, setPlaying] = useState(false); // user first interaction
  const animation = useRef(null);
  const audio = useRef(null);

  const handleClick = () => {
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
      autoplay: false,
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

  useLayoutEffect(() => {
    audio.current.volume = 0.6;
    if (animation.current) {
      if (playing) {
        animation.current.play();
        audio.current.play();
      } else {
        audio.current.pause();
        mute();
      }
    }
  }, [playing]);

  return (
    <>
      <div className={classes.player} onClick={handleClick}>
        <div className={classes.player__icon}>
          {!playing && <div>/</div>}
          <MdHeadphones size="1.5rem" />
        </div>
        <div>
          <ul className={classes.player__dots}>
            {ticks.map((_, i) => (
              <li key={i} className="theme-player" />
            ))}
          </ul>
        </div>
      </div>
      <audio src={music} ref={audio} loop />
    </>
  );
};
