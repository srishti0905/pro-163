AFRAME.registerComponent("walls", {
    init: function () {
      for (var i = 0; i < 100; i++) {
        var wall = document.createElement("a-entity");
        wall.setAttribute("id", "wall" + i);

        wall.setAttribute("position", { 
            x: (Math.random()*201)-100,
            y: 2.5,
            z: (Math.random()*201)-100 
        });

        wall.setAttribute("rotation", {x: 0, y: Math.random()*180, z: 0});

        wall.setAttribute("geometry", {
            primitive: "box",
            width: 7.5,
            height: 5,
            depth: .1
        });

        wall.setAttribute("material", {
            color: `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
        });

        wall.setAttribute("static-body", {});
  
        var sceneEl = document.querySelector("#scene");
        sceneEl.appendChild(wall);
      }
    },
});