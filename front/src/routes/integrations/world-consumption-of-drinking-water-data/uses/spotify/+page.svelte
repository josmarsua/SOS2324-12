
<script>
  import { onMount } from 'svelte';
  import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, Button} from '@sveltestrap/sveltestrap';

  

  onMount(() => {
  if (typeof CanvasJS === 'undefined') {
    // Cargar el script de CanvasJS dinámicamente solo si no está definido
    const script = document.createElement('script');
    script.src = 'https://cdn.canvasjs.com/canvasjs.min.js';
    script.onload = () => {
      console.log('CanvasJS loaded');
      getSpotify(); // Llamar a tu función después de que el script esté cargado
    };
    document.head.appendChild(script);
  } else {
    getSpotify(); // El script ya está cargado, solo llama a la función
  }
});


  async function getSpotify() {
    const url = 'https://spotify23.p.rapidapi.com/user_followers/';
    const params = new URLSearchParams({ id: 'nocopyrightsounds' });
    const fullUrl = `${url}?${params.toString()}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a35e4e4bc4msh76b0742b85f42a7p142c2fjsnf4b8084e88bc',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
      const response = await fetch(fullUrl, options);
      if (response.ok) {
            let spotifyData = await response.json();
            console.log(spotifyData); // Asegúrate que tenga una propiedad 'data'
            if (Array.isArray(spotifyData.profiles)) {
                const data = spotifyData.profiles;
                createSpotifyGraph(data);
            } else {
            console.error("Expected data to be an array, but it's not.");
            }
      } else {
        console.error(`HTTP Error: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching Spotify data:', error);
    }
  }

  function createSpotifyGraph(data) {
    
    const mapeoFiltrado = data
      .filter((d) => d.followers_count >= 300)
      .map((d) => ({
        y: d.followers_count,
        label: d.name
      }));

    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      title: {
        text: 'Usuarios con mas de 300 seguidores'
      },
      axisX: {
        interval: 1
      },
      axisY2: {
        interlacedColor: 'rgba(1,77,101,.2)',
        gridColor: 'rgba(1,77,101,.1)',
        title: 'Numero de seguidores'
      },
      data: [
        {
          type: 'bar',
          name: 'companies',
          color: '#014D65',
          axisYType: 'secondary',
          dataPoints: mapeoFiltrado
        }
      ]
    });

    chart.render();
  }
</script>

<main>
  <Container class="content-container" style="justify-content: center;"> 
    <div id="chartContainer" style="height: 300px; width: 100%;"></div>
  </Container>
</main>