import Header from '../components/Header';
import CountryList from '../components/CountryList';

const CountriesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <h1 className="text-4xl text-center my-8 text-white">Country List</h1>
      <CountryList />
    </div>
  );
};

export default CountriesPage;
