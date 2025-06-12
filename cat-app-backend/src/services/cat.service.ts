import axios from 'axios';

export class CatService {
  private api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
    headers: {
      'x-api-key': process.env.CAT_API_KEY || 'live_JBT0Ah0Nt12iyl2IpjQVLDWjcLk0GQwf4zI9wBMfmfejKmcC31mOJp4yJz5TsOUP',
    },
  });

  async getBreeds() {
    const response = await this.api.get('/breeds');
    return response.data;
  }

  async getBreedById(id: string) {
    const response = await this.api.get(`/breeds/${id}`);
    return response.data;
  }

  async searchBreeds(query: string) {
    const response = await this.api.get(`/breeds/search?q=${query}`);
    return response.data;
  }
}
