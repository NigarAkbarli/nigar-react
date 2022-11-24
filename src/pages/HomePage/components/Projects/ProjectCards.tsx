import "./ProjectCards.scss";

interface IProjectCardsProps {
  imageSrc: string;
  title: string;
  address: string;
  marginLeft?: string;
}
export const ProjectCards = (props: IProjectCardsProps) => {
  const { imageSrc, title, address, marginLeft } = props;
  return (
    <div className="card1" style={marginLeft ? { marginLeft: marginLeft } : {}}>
      <img src={imageSrc} alt="" />
      <div>
        <p className="par1">{title}</p>
        <p className="par2">{address}</p>
      </div>
    </div>
  );
};