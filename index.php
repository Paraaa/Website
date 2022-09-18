<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  


    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source Sans Pro">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <script src="js/scrollfade.js"></script>
  </head>
 
  <body class="bg-dark">  
    
    <main class="container-fluid">
        <!-- Image -->
        <div class="background-bg">
            <div class="background-img"></div>
        </div>

        <!--Navigation-->
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Home</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                
                <div class="collapse navbar-collapse text-nowrap" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#aboutme">About me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#skills">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#interests">Interests</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#links">Links</a>
                    </li>
                    </ul>
                </div>
                </nav>

        <!-- Content -->

        <div class ="row d-flex justify-content-center p-2  mt-5 item content">    
            <div class="content-style scrollFade"> 
                <h1>Andrej <br>Schwanke</h1>
                <p>
                Hello! I am a computer science student from Germany, Freiburg im Breisgau. I specicialize in artificial intelligence and bioinformatics.
                </p>       
            </div>

            <div class="content-style scrollFade" id="aboutme">
                <h1>About me</h1>
                <p>
                    This is just some random text for testing.
                </p>
            </div>
            <div class="content-style scrollFade" id="skills">
                <h1>Skills</h1>
                <p>
                    This is just some random text for testing.
                </p>
            </div>
            <div class="content-style scrollFade" id="interests">
                <h1>Interests</h1>
                <p>
                    This is just some random text for testing.
                </p>
            </div>
            <div class="content-style scrollFade" id="projects">
                <h1>Projects</h1>
                <p>
                    This is just some random text for testing.
                </p>
            </div>
            <div class="content-style scrollFade" id="Links">
                <h1>Links</h1>
                <p>
                    This is just some random text for testing.
                </p>
            </div>
        </div>
    </main>
  </body>
</html>
