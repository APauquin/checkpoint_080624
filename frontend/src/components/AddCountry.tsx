import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { GET_COUNTRIES } from './CountryList';

const ADD_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      name
      code
      emoji
    }
  }
`;

const AddCountry: React.FC = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [emoji, setEmoji] = useState('');

  const [addCountry, { loading, error }] = useMutation(ADD_COUNTRY, {
    update(cache, { data: { addCountry } }) {
      const data = cache.readQuery<{ countries: any[] }>({ query: GET_COUNTRIES });
      const countries = data?.countries || [];
      cache.writeQuery({
        query: GET_COUNTRIES,
        data: { countries: countries.concat([addCountry]) },
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCountry({ variables: { data: { name, code, emoji } } })
      .then(() => {
        setName('');
        setCode('');
        setEmoji('');
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="add-country-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Emoji"
        value={emoji}
        onChange={(e) => setEmoji(e.target.value)}
      />
      <button type="submit">Add Country</button>
      {loading && <p className="loading">Adding country...</p>}
      {error && <p className="error">Error: {error.message}</p>}
    </form>
  );
};

export default AddCountry;
