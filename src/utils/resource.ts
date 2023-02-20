import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import config from '../config.json';
import { ResourcePageResponse } from '../types';

export const fetchResourcePage = <T>(
  path: string,
  page?: number
): Observable<ResourcePageResponse<T>> => {
  return fromFetch<ResourcePageResponse<T>>(
    `${config.apiBaseUrl}/${path}/${page ? `?page=${page}` : ''}`,
    {
      selector: response => response.json()
    }
  );
};

export const fetchResource = <T>(path: string): Observable<T[]> => {
  return fetchResourcePage<T>(path).pipe(
    switchMap(firstResponse => {
      // another option would be to fetch the pages recursively using
      // the "next" property but this prevents parallel fetching
      const pageCount = Math.ceil(
        firstResponse.count / firstResponse.results.length
      );

      if (pageCount <= 1) {
        return of(firstResponse.results);
      }

      // skip first page since it was fetched already
      const pageRequests = Array(pageCount - 1)
        .fill(0)
        .map((_, index) => fetchResourcePage<T>(path, index + 2));

      return forkJoin(pageRequests).pipe(
        map(responses =>
          [firstResponse, ...responses].reduce(
            (results, response) => results.concat(response.results),
            [] as T[]
          )
        )
      );
    })
  );
};
