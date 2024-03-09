import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from 'services/tmbdApi';
import Loader from 'components/Loader/Loader';
import {
  ReviewContainer,
  ReviewAuthor,
  ReviewContent,
  NoReviewsMessage,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setLoading(true);
        const fetchedReviews = await fetchReviews(movieId);
        setReviews(fetchedReviews);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviews.length !== 0 ? (
        <div>
          <h2 className="text-2xl pb-4 font-bold pt-4">Reviews</h2>{' '}
          <ul>
            {reviews.map(review => (
              <ReviewContainer key={review.id}>
                {' '}
                <ReviewAuthor>Author: {review.author}</ReviewAuthor>{' '}
                <ReviewContent>{review.content}</ReviewContent>{' '}
              </ReviewContainer>
            ))}
          </ul>
        </div>
      ) : (
        <NoReviewsMessage>
          We don't have any reviews for this movie
        </NoReviewsMessage>
      )}
    </>
  );
};

export default Reviews;
