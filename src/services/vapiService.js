import axios from 'axios';
import { VAPI_CONFIG } from '../config/vapi.config';

class VapiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.vapi.ai',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    // Set initial API key if available
    const apiKey = localStorage.getItem('VAPI_API_KEY');
    if (apiKey) {
      this.updateApiKey(apiKey);
    }
  }

  updateApiKey(apiKey) {
    this.api.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;
  }

  async getAssistants(params = {}) {
    try {
      const response = await this.api.get('/assistant', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching assistants:', error);
      throw error;
    }
  }

  async getAssistant(id) {
    try {
      const response = await this.api.get(`/assistant/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching assistant:', error);
      throw error;
    }
  }

  async createAssistant(config) {
    try {
      const response = await this.api.post('/assistant', {
        ...VAPI_CONFIG.options,
        ...config
      });
      return response.data;
    } catch (error) {
      console.error('Error creating assistant:', error);
      throw error;
    }
  }

  async updateAssistant(id, config) {
    try {
      const response = await this.api.patch(`/assistant/${id}`, config);
      return response.data;
    } catch (error) {
      console.error('Error updating assistant:', error);
      throw error;
    }
  }

  async deleteAssistant(id) {
    try {
      const response = await this.api.delete(`/assistant/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting assistant:', error);
      throw error;
    }
  }
}

export default new VapiService();