import { useEffect, useState } from 'react';
import { map, Observable, zip } from 'rxjs';
import { initialResources } from '../contexts/resource';
import { Character, Film, Resources, Species, Starship } from '../types';
import { fetchResource, getPopulatedCharacters } from '../utils';

export const useResources = (): [Resources, boolean, Error | undefined] => {
  const [resources, setResources] = useState(initialResources);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState(undefined);

  useEffect(() => {
    const resources$: Observable<Resources> = zip([
      fetchResource<Character>('people'),
      fetchResource<Species>('species'),
      fetchResource<Film>('films'),
      fetchResource<Starship>('starships')
    ]).pipe(
      map(([characters, species, films, starships]) => ({
        characters: getPopulatedCharacters(
          characters,
          species,
          films,
          starships
        ),
        species,
        films,
        starships
      }))
    );

    const resourcesSubscription = resources$.subscribe({
      next: resources => {
        setResources(resources);
        setIsLoaded(true);
      },
      error: error => {
        setLoadingError(error);
        setIsLoaded(true);
      }
    });

    return () => {
      resourcesSubscription.unsubscribe();
    };
  }, []);

  return [resources, isLoaded, loadingError];
};
