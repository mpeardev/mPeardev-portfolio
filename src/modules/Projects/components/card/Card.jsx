import { Title } from "/src/ui/components";
import classes from "./card.module.scss";
import { RiGitRepositoryLine, FiLink } from "/src/ui/icons";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import BreakpointContext from "../../../../state/breakpoint/BreakpointContext";

export function Card({
  index,
  projectName,
  companyName,
  technologies,
  repo,
  deploy,
  images,
  category,
  brandImage,
}) {
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

  const handleRedirect = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // ALTERNADO DE IMÁGENES DE LOS PROYECTOS HOVERING
  const initialImg = images?.length > 0 ? images[0] : null;
  const [currentImage, setCurrentImage] = useState(initialImg);
  const [isHovering, setIsHovering] = useState(false);
  const imageIndex = useRef(0);
  const hoverTimeout = useRef(null);
  const preloadedImages = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (images?.length > 0) {
      preloadedImages.current = images.map((image, index) => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
          if (index === images.length - 1) {
            // Indicando que todas las imágenes se han cargado
            setImagesLoaded(true);
          }
        };
        return img;
      });
    }
  }, [images]);

  useEffect(() => {
    if (images?.length > 0) {
      if (isHovering) {
        hoverTimeout.current = setInterval(() => {
          imageIndex.current = (imageIndex.current + 1) % images.length;
          // Cambiando la imagen actual en el hover
          setCurrentImage(images[imageIndex.current]);
        }, 2000);
      } else {
        clearInterval(hoverTimeout.current); // Limpia el intervalo cuando no se hace hover
        imageIndex.current = 0;
        setCurrentImage(initialImg); // Restablece la imagen inicial
      }
      return () => clearInterval(hoverTimeout.current);
    }
  }, [isHovering, initialImg, images]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  // Comentado porque evita el renderizado de algunas cards no pre cargadas
  // if (!imagesLoaded) {
  //   return null;
  // }

  return (
    <motion.div
      key={index}
      initial="hidden"
      animate="visible"
      variants={variants}
      custom={{ delay: (index + 1) * 0.3 }}
    >
      <div
        className={`theme-card-bg ${classes.card}`}
        onMouseEnter={breakpoint <= 768 ? null : handleMouseEnter}
        onMouseLeave={breakpoint <= 768 ? null : handleMouseLeave}
      >
        <div
          onClick={() => handleRedirect(deploy)}
          style={deploy ? { cursor: "pointer" } : null}
        >
          <div
            className={classes.card__image}
            style={{
              backgroundImage:
                images && images?.length > 0
                  ? `url(${currentImage})`
                  : "url('https://firebasestorage.googleapis.com/v0/b/mpeardev-portfolio.appspot.com/o/projects%2Fdefault.png?alt=media&token=43e0416a-e6c4-4e96-92b4-dbfa4434476f')",
            }}
          ></div>
        </div>
        <div className={classes.card__info}>
          <div className={classes.card__infoMain}>
            <div>
              <Title
                title={projectName}
                size={breakpoint <= 768 ? "18px" : "20px"}
              />
              <p className={classes.card__infoCompany}>{companyName}</p>
            </div>
            {brandImage && <img src={brandImage} alt="brand" />}
          </div>
          <div>
            {category && (
              <div className={classes.card__infoStatus}>
                {category === "personal" && "personal"}
                {category === "collaborative" && "colaborativo"}
                {category === "corporate" && "corporativo"}
              </div>
            )}
            <div className={classes.card__infoTech}>
              {technologies.map((e, i) => (
                <p key={i}>
                  {e}
                  <span>{i !== technologies?.length - 1 && " ・ "}</span>
                </p>
              ))}
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
                  <FiLink size={breakpoint <= 768 ? "1.2em" : "1.5em"} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
