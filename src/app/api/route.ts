export async function GET() {
    return new Response(`
      <h1>Available API Endpoints</h1>
      <ul>
        <li><a href="/api/users">/api/users</a></li>
        <li><a href="/api/servers">/api/servers</a></li>
      </ul>
    `, {
      headers: {
        'Content-Type': 'text/html'
      }
    });
  }
  