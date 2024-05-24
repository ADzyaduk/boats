import { defineEventHandler } from 'h3';
import fetch from 'node-fetch';

export default defineEventHandler(async () => {
  const yandexApiKey = 'd29a0f3c-9042-4384-8504-573f6d02fa79';
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
