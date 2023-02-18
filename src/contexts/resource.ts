import { createContext } from 'react';
import { Resources } from '../types';

export const initialResources: Resources = {
  characters: [],
  films: [],
  species: [],
  starships: []
};

export const ResourcesContext = createContext<Resources>(initialResources);
