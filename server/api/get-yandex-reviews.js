import { defineEventHandler } from 'h3';
import fetch from 'node-fetch';

export default defineEventHandler(async () => {
  const yandexApiKey = 'YOUR_YANDEX_API_KEY';
  const organizationId = 'YOUR_ORGANIZATION_ID';
  
  const response = await fetch(`https://api.yandex.com/maps/reviews/v1/organization/${organizationId}/reviews?apikey=${yandexApiKey}`);
  const data = await response.json();
  
  const reviews = data.reviews.map(review => ({
    id: review.id,
    text: review.text,
    author: review.author,
    date: new Date(review.date).toLocaleDateString(),
  }));
  
  return { reviews };
});
