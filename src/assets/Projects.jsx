export default function Projects() {
  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Estevan Gonzales</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        </link>
      </head>
      <body>
        <nav class="nav nav-pills justify-content-end p-2 bg-light">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="projects.html">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact Me</a>
          </li>
        </nav>

        <div class="container-fluid bg-dark" style="height:100vh">
          <div class="jumbotron jumbotron-fluid text-light py-3 px-3">
            <p class="display-1">Projects</p>
          </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
        </script>
      </body>
    </div>
  )
}
