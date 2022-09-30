
import { useRouter } from "next/router";
import Image from 'next/image'
import HomePageIMG from "../public/brooke-cagle-cb4Dv50LN1Y-unsplash 1.png"
import NavBar from '../component/navigation'
const Home = () => {

  return (
    <div>
      <Image
      src={HomePageIMG}
      alt="pic of person"
      />
      <NavBar/>
    </div>
  );
};
export default Home;
