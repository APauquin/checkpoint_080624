import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_COUNTRY = gql`
  query GetCountry($code: String!) {
    country(code: $code) {
      name
      code
      emoji
      continent {
        name
      }
    }
  }
`;

interface CountryDetailProps {
  code: string;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ code }) => {
  const { data } = useQuery(GET_COUNTRY, {
    variables: { code },
    skip: !code,
  });

  const { country } = data;

  return (
    <div className="country-detail">
      <h1 className="title">{country.emoji}</h1>
      <div>
        <p><strong>Code:</strong> {country.code}</p>
        <p><strong>Name:</strong> {country.name}</p>
        {country.continent && (
          <p><strong>Continent:</strong> {country.continent.name}</p>
        )}      </div>
    </div>
  );
};

export default CountryDetail;