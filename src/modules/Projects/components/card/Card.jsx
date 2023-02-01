import { Title } from "/src/ui/components";
import classes from "./card.module.scss";
import { RiGitRepositoryLine, FiLink } from "/src/ui/icons";
import { motion } from "framer-motion";
import { useContext } from "react";
import BreakpointContext from "../../../../state/breakpoint/BreakpointContext";

export function Card({ title, tech, repo, deploy, image, status, index }) {
  const { breakpoint } = useContext(BreakpointContext);

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: ({ delay }) => ({
      opacity: 1,
      transition: {
        delay,
        duration: 1,
      },
    }),
  };

  return (
    <motion.div
      key={index}
      initial="hidden"
      animate="visible"
      variants={variants}
      custom={{ delay: (index + 1) * 0.3 }}
    >
      <div className={`theme-card-bg ${classes.card}`}>
        <div
          className={classes.card__image}
          style={{
            backgroundImage: image
              ? `url(${image})`
              : "url('/img/projects/default.jpg')",
          }}
        ></div>
        <div className={classes.card__info}>
          <Title title={title} size={breakpoint <= 768 ? "18px" : "24px"} />
          <div>
            {status && <div className={classes.card__infoStatus}>{status}</div>}
            <div className={classes.card__infoTech}>
              {tech.map((e, i) => {
                return <p key={i}>{e.concat(" |")}</p>;
              })}
            </div>
            <div className={classes.card__infoIcons}>
              {repo && (
                <a href={repo} target="_blank" title="Ver repositorio">
                  <RiGitRepositoryLine
                    size={breakpoint <= 768 ? "1em" : "1.5em"}
                  />
                </a>
              )}
              {deploy && (
                <a href={deploy} target="_blank" title="Visitar">
                  <FiLink size={breakpoint <= 768 ? "1em" : "1.5em"} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
