import Search from '../components/Search/Search'
import HouseList from '../components/Houses/HouseList';
import HouseProvider from '../context/HouseContext';

const Home = () => {
  return (
    <>
    <HouseProvider>
      <Search />
      <HouseList />
    </HouseProvider>
      
    </>
  )
}

export default Home;