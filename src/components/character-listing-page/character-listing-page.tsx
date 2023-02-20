import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ResourcesContext } from '../../contexts/resource';
import { useFilteredCharacters } from '../../hooks/character';
import { getSignedYear } from '../../utils';
import ComboBox from '../shared/combo-box/combo-box';
import Header from '../shared/header/header';
import YearInput from '../shared/year-input/year-input';
import './character-listing-page.css';

interface Props {}

export default function CharacterListingPage(props: Props) {
  const { characters, species, films } = useContext(ResourcesContext);

  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filmFilter, setFilmFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [minYearFilter, setMinYearFilter] = useState('');
  const [minYearIsBbyFilter, setMinYearIsBbyFilter] = useState(true);
  const [maxYearFilter, setMaxYearFilter] = useState('');
  const [maxYearIsBbyFilter, setMaxYearIsBbyFilter] = useState(false);

  const onMinYearFilterChange = (year: string, isBby: boolean) => {
    setMinYearFilter(year);
    setMinYearIsBbyFilter(isBby);
  };
  const onMaxYearFilterChange = (year: string, isBby: boolean) => {
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

  const FilterButton = (
    <Button
      variant={showMobileFilters ? 'contained' : 'outlined'}
      color="secondary"
      className="character-listing-page-filter-button"
      onClick={() => setShowMobileFilters(!showMobileFilters)}
    >
      {!showMobileFilters ? (
        <>
          <div>
            Film: <strong>{filmFilter || 'Any'}</strong>
          </div>
          <div>
            Species: <strong>{speciesFilter || 'Any'}</strong>
          </div>
          <div>
            Birth Year:{' '}
            <strong>
              {minYearFilter
                ? `${minYearFilter} ${minYearIsBbyFilter ? 'BBY' : 'ABY'}`
                : 'Any'}
              {' - '}
              {maxYearFilter
                ? `${maxYearFilter} ${maxYearIsBbyFilter ? 'BBY' : 'ABY'}`
                : 'Any'}
            </strong>
          </div>
        </>
      ) : (
        'Hide Filters'
      )}
    </Button>
  );

  const Filters = (
    <div
      className={`character-listing-page-filters ${
        showMobileFilters ? 'show-mobile' : ''
      }`}
    >
      <div className="character-listing-page-filters-row">
        <ComboBox
          label="Film"
          options={films.map(film => film.title)}
          value={filmFilter}
          onChange={setFilmFilter}
        />
        <ComboBox
          label="Species"
          options={species.map(spec => spec.name)}
          value={speciesFilter}
          onChange={setSpeciesFilter}
        />
      </div>

      <div className="character-listing-page-filters-row">
        <YearInput
          label="From Year"
          year={minYearFilter}
          isBby={minYearIsBbyFilter}
          onChange={onMinYearFilterChange}
        />
        <YearInput
          label="To Year"
          year={maxYearFilter}
          isBby={maxYearIsBbyFilter}
          onChange={onMaxYearFilterChange}
        />
      </div>
    </div>
  );

  return (
    <div className="character-listing-page">
      <Header>
        <h2>Characters</h2>

        {FilterButton}

        {Filters}
      </Header>

      <div className="container">
        {filteredCharacters.map(character => (
          <Card key={`character-${character.id}`} className="card">
            <CardActionArea component={Link} to={`/characters/${character.id}`}>
              <CardContent>
                <AccountCircleIcon fontSize="large" />

                <h3>{character.name}</h3>
                <Typography color="text.secondary">
                  {character.birth_year}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}

        {!filteredCharacters.length && (
          <Card className="card">
            <CardContent>No matching character could be found.</CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
