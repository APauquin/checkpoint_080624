import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      emoji
    }
  }
`;

const CountryList: React.FC = () => {
  const { data } = useQuery(GET_COUNTRIES);

  return (
    <ul className="country-list">
      {data.countries.map(({ code, name, emoji }: { code: string, name: string, emoji: string }) => (
        <li key={code} className="country-item">
          <Link href={`/${code}`} passHref>
            <span className="country-link">
              <span>{emoji}</span>
              <span>{name}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
