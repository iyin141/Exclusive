
import StarRatings from "react-star-ratings";

type Props = {
    children?: number;
}

const Stars: React.FC<Props> =  ({children}) => {
  return (
    <StarRatings
      rating={children}
      starRatedColor="gold"
      starEmptyColor="grey"
      numberOfStars={5} 
      starDimension="12px"
    />
  );
};

export default Stars;
