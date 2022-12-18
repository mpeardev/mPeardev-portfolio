export function PageContainer({ children, background = "none" }) {
  const style = {
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    backgroundImage: background != "none" ? `url(${background})` : "none",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    paddingTop: "5rem",
  };

  return <div style={style}>{children}</div>;
}
