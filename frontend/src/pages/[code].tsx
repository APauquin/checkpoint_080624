import { useRouter } from 'next/router';
import Header from '../components/Header';
import CountryDetail from '../components/CountryDetail';

const CountryPage: React.FC = () => {
  const router = useRouter();
  const { code } = router.query;

  if (!code) return <p className="loading">Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <div className="container">
        <CountryDetail code={code as string} />
      </div>
    </div>
  );
};

export default CountryPage;
