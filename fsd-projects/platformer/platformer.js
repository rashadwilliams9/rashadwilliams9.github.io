$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
   createPlatform(600,600,100,20);
   createPlatform(450,500,100,20);
   createPlatform(700,420,100,20);
   createPlatform(500,250,100,20);
   createPlatform(700,150,100,20);
   createPlatform(450,700,100,20);
   createPlatform(750,700,100,20);



    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 50);
   createCollectable("diamond", 500 ,700, 0.5, 0.7);


    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 800);
    createCannon("right", 300, 1000);
    createCannon("left", 400, 920);
    createCannon("bottom", 200,900);
    createCannon("right", 500, 800);
    createCannon("left", 200, 920);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
