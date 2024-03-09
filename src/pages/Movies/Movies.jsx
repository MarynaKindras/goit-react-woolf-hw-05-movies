import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import EditorList from 'components/MovieList/MovieList';
import Form from 'components/Form/Form';
import { fetchSearchByKeyword } from 'services/tmbdApi';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searched, setSearched] = useState(false);
  const movieName = searchParams.get('query') || '';

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        const movies = await fetchSearchByKeyword(movieName);
        setSearchFilms(movies);
        setSearched(true);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (movieName !== '') {
      search();
    } else {
      setSearchFilms([]);
      setSearched(false);
    }
  }, [movieName]);

  return (
    <div className="flex justify-center">
      <main>
        <Form searchMovies={updateQueryString} />
        {loading && <Loader />}
        {searched && searchFilms.length === 0 && (
          <p>There are no movies with this request. Please, try again...</p>
        )}
        {searchFilms.length > 0 && <EditorList films={searchFilms} />}
      </main>
    </div>
  );
};

export default Movies;
