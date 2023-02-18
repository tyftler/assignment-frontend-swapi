import { useEffect, useState } from 'react';
import { map, zip } from 'rxjs';
import { initialResources } from '../contexts/resource';
import { Character, Film, Resources, Species, Starship } from '../types';
import { fetchResource, getPopulatedCharacters } from '../utils';

export const useResources = (): [Resources, boolean] => {
  const [resources, setResources] = useState(initialResources);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);

    const resources$ = zip([
      fetchResource<Character>('people'),
      fetchResource<Species>('species'),
      fetchResource<Film>('films'),
      fetchResource<Starship>('starships')
    ]).pipe(
      map(
        ([characters, species, films, starships]) =>
          ({
            characters: getPopulatedCharacters(
              characters,
              species,
              films,
              starships
            ),
            species,
            films,
            starships
          } as Resources)
      )
    );

    const resourcesSubscription = resources$.subscribe(resources => {
      setResources(resources);
      setIsLoaded(true);
    });

    return () => {
      resourcesSubscription.unsubscribe();
    };
  }, []);

  return [resources, isLoaded];
};
