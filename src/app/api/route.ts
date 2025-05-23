export async function GET() {
    return new Response(`
      <h1>Available API Endpoints</h1>
      <ul>
        <li><a href="/api/chapters">/api/chapters</a></li>
        <li><a href="/api/servers">/api/servers</a></li>
        <li><a href="/api/textures">/api/textures</a></li>
        <li><a href="/api/skins">/api/skins</a></li>
        <li><a href="/api/mods">/api/mods</a></li>
        <li><a href="/api/minecraft">/api/minecraft</a></li>
        <li><a href="/api/seeds">/api/seeds</a></li>
        <li><a href="/api/maps">/api/maps</a></li>
      </ul>
    `, {
      headers: {
        'Content-Type': 'text/html'
      }
    });
  }
  