import "./ProjectCards.scss";

interface IProjectCardsProps{
    imageSrc: string,
    title: string,
    address: string
}
export const ProjectCards = (props:IProjectCardsProps) => {
    const {imageSrc, title, address} = props;
  return (
    <div className="card1">
      <img src={imageSrc} alt="" />
      <div>
        <p className="par1">{title}</p>
        <p className="par2">{address}</p>
      </div>
    </div>
  );
};
