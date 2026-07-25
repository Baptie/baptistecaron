import "./poste.component.scss";

interface PosteProp {
  id?: number;
  poste?: string;
  societe?: string;
  date_debut?: string;
  date_fin?: string;
  img_url?: string;
  img_alt?: string;
  description?: string;
  color?: string;
  color2?: string;
}

const Poste: React.FC<PosteProp> = (prop: PosteProp) => {
  const dynamicStyle = {
    "--accent-color": prop.color,
    "--accent-color2": prop.color2,
  } as React.CSSProperties;

  return (
    <div className="posteContainer" style={dynamicStyle}>
      <div className="imgSociete">
        <img src={process.env.PUBLIC_URL + prop.img_url} alt={prop.img_alt} />
      </div>
      <div className="detailsPoste">
        <div className="societe">{prop.societe}</div>
        <div className="poste">{prop.poste}</div>
      </div>
      <div className="posteDate">
        {prop.date_debut} - {prop.date_fin}
      </div>
    </div>
  );
};

export default Poste;
