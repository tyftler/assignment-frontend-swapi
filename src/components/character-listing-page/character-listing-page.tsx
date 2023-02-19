import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ResourcesContext } from '../../contexts/resource';
import { useFilteredCharacters } from '../../hooks/character';
import { getSignedYear } from '../../utils';
import Select from '../shared/select';
import YearInput from '../shared/year-input';

interface Props {}

export default function CharacterListingPage(props: Props) {
  const { characters, species, films } = useContext(ResourcesContext);

  const [speciesFilter, setSpeciesFilter] = useState('');
  const [filmFilter, setFilmFilter] = useState('');
  const [minYearFilter, setMinYearFilter] = useState('');
  const [minYearIsBbyFilter, setMinYearIsBbyFilter] = useState(true);
  const [maxYearFilter, setMaxYearFilter] = useState('');
  const [maxYearIsBbyFilter, setMaxYearIsBbyFilter] = useState(false);

  const speciesOptions = [
    { value: '', label: 'All' },
    ...species.map(spec => ({ value: spec.name, label: spec.name }))
  ];
  const filmOptions = [
    { value: '', label: 'All' },
    ...films.map(film => ({ value: film.title, label: film.title }))
  ];

  const onMinYearChange = (year: string, isBby: boolean) => {
    setMinYearFilter(year);
    setMinYearIsBbyFilter(isBby);
  };
  const onMaxYearChange = (year: string, isBby: boolean) => {
    setMaxYearFilter(year);
    setMaxYearIsBbyFilter(isBby);
  };

  const filteredCharacters = useFilteredCharacters(
    characters,
    speciesFilter,
    filmFilter,
    getSignedYear(minYearFilter, minYearIsBbyFilter),
    getSignedYear(maxYearFilter, maxYearIsBbyFilter)
  );

  return (
    <div className="character-listing-page">
      <h2>Characters</h2>
      <Select
        options={speciesOptions}
        value={speciesFilter}
        onChange={event => setSpeciesFilter(event.target.value)}
      />
      <Select
        options={filmOptions}
        value={filmFilter}
        onChange={event => setFilmFilter(event.target.value)}
      />
      <YearInput
        year={minYearFilter}
        isBby={minYearIsBbyFilter}
        onChange={onMinYearChange}
      />
      <YearInput
        year={maxYearFilter}
        isBby={maxYearIsBbyFilter}
        onChange={onMaxYearChange}
      />
      <ul>
        {filteredCharacters.map(character => (
          <li key={`character-${character.id}`}>
            <Link to={`/characters/${character.id}`}>
              {character.name} ({character.birth_year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
