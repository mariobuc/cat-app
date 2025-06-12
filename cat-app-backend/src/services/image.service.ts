import axios from 'axios';

export class ImageService {
  private api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
    headers: {
      'x-api-key': process.env.CAT_API_KEY || 'live_JBT0Ah0Nt12iyl2IpjQVLDWjcLk0GQwf4zI9wBMfmfejKmcC31mOJp4yJz5TsOUP',
    },
  });

  async getImagesByBreedId(breedId: string) {
    const response = await this.api.get(`/images/search?breed_ids=${breedId}&limit=10`);
    return response.data;
  }
}
