
import One from "./Home/Silde/One"
import Two from "./Home/Flash/Flash"
import Categories from "./Home/Categories/Categories"
import Best from "./Home/Best_sellers/Best"
import Banner from "./Home/Banner/Banner"
import Arive from "./Home/Arrivals/Arive"


export const Home = () => {
  return (
      <div>
      <One />
      <Two />
      <Categories />
      <Best />
      <Banner />
      <Arive />
    </div>
  )
}

export default Home;