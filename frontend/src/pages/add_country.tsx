import React from 'react';
import Header from '../components/Header';
import AddCountry from '../components/AddCountry';
import CountryList from '@/components/CountryList';

const AddCountryPage: React.FC = () => {
  return (
    <div>
      <Header />
      <h1 className="text-4xl text-center my-8">Add Country</h1>
      <div className='add-country-container'>
      <AddCountry />
      <CountryList />
      </div>
    </div>
  );
};

export default AddCountryPage;
