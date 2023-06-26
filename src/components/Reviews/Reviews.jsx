import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL, API_KEY } from "helpers";

const Reviews = () => {
    const params = useParams();
    const { movieId } = params;
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        async function getReviews() {
            try {
                const { data: { results } } = await axios.get(`${URL}movie/${movieId}/reviews?api_key=${API_KEY}`);
                setReview(results);
            } catch (error) {
                console.error(error);
            }
        }
        getReviews();
    }, [movieId])

    return (
        <ul>
            {reviews.length > 0
                ? reviews.map(item =>
                    <li
                        key={item.id}>
                        <h5>
                            {item.author}
                        </h5>
                        <p>
                            {item.content}
                        </p>
                    </li>)
                : "We don't have any reviews for this movie"}
        </ul>
    )
};

export default Reviews;