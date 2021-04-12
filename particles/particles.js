var site = site || {};
site.window = $(window);
site.document = $(document);
site.Width = site.window.width();
site.Height = site.window.height();


var Background = function() {

};

Background.headparticle = function() {   

   function webgl_support () { 
      try {
       var canvas = document.createElement('canvas'); 
       return !!window.WebGLRenderingContext &&
         (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
      } catch(e) {
        return false;
      }
   }

   if ( webgl_support() == false )
   {
      alert('Your browser dosent support WebGL');
   }

   var camera, scene, renderer;
   var mouseX = 0, mouseY = 0;
   var prevmouseX = 0, prevmouseY = 0;
   var p;

   var windowHalfX = site.Width / 2;
   var windowHalfY = site.Height / 2;

   Background.camera = new THREE.PerspectiveCamera( 35, site.Width / site.Height, 1, 2000 );
   Background.camera.position.z = 300;

   // scene
   Background.scene = new THREE.Scene();

   // texture
   var manager = new THREE.LoadingManager();
   manager.onProgress = function ( item, loaded, total ) {
      //console.log('webgl, twice??');
      //console.log( item, loaded, total );
   };


   // particles
   var p_geom = new THREE.Geometry();
   var p_material = new THREE.ParticleBasicMaterial({
      color: 0x2080ff,
      size: 1.5
   });

   // model
   var loader = new THREE.OBJLoader( manager );
   loader.load( 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/40480/head.obj', function ( object )
   // loader.load( './Knot.obj', function ( object )
   {

      object.traverse( function ( child ) {

         if ( child instanceof THREE.Mesh ) {

            // child.material.map = texture;

            var scale = 8;

            $(child.geometry.vertices).each(function() {
               p_geom.vertices.push(new THREE.Vector3(this.x * scale, this.y * scale, this.z * scale));
            })
         }
      });

      Background.scene.add(p)
   });

   p = new THREE.ParticleSystem(
      p_geom,
      p_material
   );

   Background.renderer = new THREE.WebGLRenderer({ alpha: true });
   Background.renderer.setSize( site.Width*0.63, site.Height*0.63 );
   Background.renderer.setClearColor(0x000000, 0);

   $('.particlehead').append(Background.renderer.domElement);
   $('.particlehead').on('mousemove', onDocumentMouseMove);
   site.window.on('resize', onWindowResize);

   function onWindowResize() {
      windowHalfX = site.Width / 2;
      windowHalfY = site.Height / 2;
      //console.log(windowHalfX);

      Background.camera.aspect = site.Width / site.Height;
      Background.camera.updateProjectionMatrix();

      Background.renderer.setSize( site.Width*0.63, site.Height*0.63 );
   }

   function onDocumentMouseMove( event ) {
      mouseX = ( event.clientX - windowHalfX + getRandomArbitrary(-10,10)) / 2;
      mouseY = ( event.clientY - windowHalfY + getRandomArbitrary(-10,10)) / 2;
   }

   Background.animate = function() { 

      Background.ticker = TweenMax.ticker;
      Background.ticker.addEventListener("tick", Background.animate);

      render();
   }

   function render()
   {
      Background.camera.position.x += ( -(mouseX * .5) - Background.camera.position.x ) * .05;
      Background.camera.position.y += ( (mouseY * .5) - Background.camera.position.y ) * .05;
      
      Background.camera.lookAt( Background.scene.position );

      Background.renderer.render( Background.scene, Background.camera );
   }

   function wander()
   {
      mouseX += getRandomArbitrary(-40,40) * getRandomArbitrary(0,2);
      mouseY += getRandomArbitrary(-40,40) * getRandomArbitrary(0,2);
   }

   function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
   }

   var intervalId = window.setInterval(function()
   {
      if (Math.abs(prevmouseX - mouseX) < 20 && Math.abs(prevmouseY - mouseY) < 20)
         { wander();}
      
      prevmouseX = mouseX;
      prevmouseY = mouseY;
   }, getRandomArbitrary(1500,3000));

   render();

   Background.animate();
   
   
};

Background.headparticle();

// function particlesAdjust()
// {
//  console.log(window.innerHeight);
//  if (window.innerHeight > 20)
//  {
//      $('canvas')[0].width = "85vw";
//        $('canvas')[0].height = "85vh";
//    }
// }

// window.onresize = particlesAdjust();

  