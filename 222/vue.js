

            import { ref } from 'vue';
            import axios from 'axios';
            
            const city = ref('Moscow');
            const weather = ref(null);
            const loading = ref(false);
            const error = ref(null);
            
            const API_KEY = '6b728990f511418193c41914252204'; 
            const API_URL = https://api.openweathermap.org/data/2.5/weather;
            
            const fetchWeather = async () => {
              if (!city.value.trim()) return;
            
              loading.value = true;
              error.value = null;
            
              try {
                const response = await axios.get(API_URL, {
                  params: {
                    q: city.value,
                    appid: API_KEY,
                    units: 'metric',
                    lang: 'ru'
                  }
                });
                weather.value = response.data;
              } catch (err) {
                error.value = 'Не удалось загрузить погоду. Проверьте название города.';
                console.error(err);
              } finally {
                loading.value = false;
              }
            };
            
            // Загружаем погоду при загрузке страницы
            fetchWeather();
          