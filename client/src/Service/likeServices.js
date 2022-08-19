import * as request from "../utils/requester"

const baseUrl = 'http://localhost:3030/data/likes';

export const likeMeme = memeId => request.post(baseUrl, { memeId });
export const deleteOne=(likeId)=>request.del(`${`${baseUrl}/${likeId}`}`)

export const getLikes = memeId =>
  request.get(`${baseUrl}?where=memeId%3D%22${memeId}%22&distinct=_ownerId&count`);

export const hasLiked = (memeId, userId) =>
  request.get(
    `${baseUrl}?where=memeId%3D%22${memeId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
