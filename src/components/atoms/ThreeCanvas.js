"use client";
import { useEffect, useRef } from "react";

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    let animId;
    let scene, camera, renderer, clock;
    let particles, geometryGroup, auroras = [];
    let mouseX = 0, mouseY = 0;
    let targetMouseX = 0, targetMouseY = 0;

    async function init() {
      const THREE = await import("three");

      // Scene
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x060812, 0.035);

      // Use Timer if available (Three.js r168+), else fall back to Clock
      clock = THREE.Timer ? new THREE.Timer() : new THREE.Clock();

      // Camera
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
      camera.position.set(0, 0, 22);

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;

      const canvas = renderer.domElement;
      canvas.id = "three-canvas";
      canvas.style.position = "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.zIndex = "0";
      canvas.style.pointerEvents = "none";
      document.body.appendChild(canvas);

      // ── PARTICLE FIELD ──────────────────────────────────
      const particleCount = 2400;
      const pGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors    = new Float32Array(particleCount * 3);
      const sizes     = new Float32Array(particleCount);

      const palette = [
        new THREE.Color(0xc9a84c), // gold
        new THREE.Color(0x00ffe7), // cyan
        new THREE.Color(0x9b4dff), // purple
        new THREE.Color(0xff2d78), // pink
        new THREE.Color(0xffffff), // white
      ];

      for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi   = Math.acos((Math.random() * 2) - 1);
        const r     = 8 + Math.random() * 40;

        positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);

        const c = palette[Math.floor(Math.random() * palette.length)];
        colors[i * 3]     = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;

        sizes[i] = Math.random() * 2.5 + 0.3;
      }

      pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      pGeo.setAttribute("color",    new THREE.BufferAttribute(colors, 3));
      pGeo.setAttribute("size",     new THREE.BufferAttribute(sizes, 1));

      const pMat = new THREE.PointsMaterial({
        size: 0.12,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      particles = new THREE.Points(pGeo, pMat);
      scene.add(particles);

      // ── FLOATING GEOMETRIC SHAPES ────────────────────────
      geometryGroup = new THREE.Group();

      const makeShape = (geo, color, wireframe, pos, scale = 1) => {
        const mat = new THREE.MeshPhysicalMaterial({
          color,
          wireframe,
          transparent: true,
          opacity: wireframe ? 0.35 : 0.15,
          roughness: 0.3,
          metalness: 0.8,
          emissive: new THREE.Color(color).multiplyScalar(0.3),
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(...pos);
        mesh.scale.setScalar(scale);
        mesh.userData = {
          rotSpeed: new THREE.Vector3(
            (Math.random() - 0.5) * 0.005,
            (Math.random() - 0.5) * 0.008,
            (Math.random() - 0.5) * 0.003,
          ),
          floatOffset: Math.random() * Math.PI * 2,
          floatSpeed: 0.3 + Math.random() * 0.4,
          floatAmp: 0.5 + Math.random() * 1.0,
        };
        return mesh;
      };

      // Icosahedron (classical polyhedron feel)
      geometryGroup.add(makeShape(new THREE.IcosahedronGeometry(2.2, 1), 0xc9a84c, true,  [-7, 2, -5], 1));
      geometryGroup.add(makeShape(new THREE.IcosahedronGeometry(1.4, 0), 0xc9a84c, false, [-7, 2, -5], 1));

      // Octahedron
      geometryGroup.add(makeShape(new THREE.OctahedronGeometry(1.8, 0), 0x9b4dff, true,  [7, -1, -8], 1));
      geometryGroup.add(makeShape(new THREE.OctahedronGeometry(1.8, 0), 0x9b4dff, false, [7, -1, -8], 1));

      // Torus
      const torusGeo = new THREE.TorusGeometry(2.5, 0.25, 16, 80);
      const torusMat = new THREE.MeshPhysicalMaterial({
        color: 0x00ffe7,
        transparent: true,
        opacity: 0.25,
        metalness: 1,
        roughness: 0.1,
        emissive: new THREE.Color(0x00ffe7).multiplyScalar(0.4),
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const torus = new THREE.Mesh(torusGeo, torusMat);
      torus.position.set(0, 3.5, -12);
      torus.rotation.x = Math.PI / 4;
      torus.userData = {
        rotSpeed: new THREE.Vector3(0.002, 0.004, 0.001),
        floatOffset: 0,
        floatSpeed: 0.25,
        floatAmp: 0.8,
      };
      geometryGroup.add(torus);

      // Dodecahedron
      geometryGroup.add(makeShape(new THREE.DodecahedronGeometry(1.6, 0), 0xff2d78, true, [5, 4.5, -6], 1));

      // Tetrahedron (classical platonic solid)
      geometryGroup.add(makeShape(new THREE.TetrahedronGeometry(1.2, 0), 0xaaff00, true,  [-5, -3, -4], 1));
      geometryGroup.add(makeShape(new THREE.TetrahedronGeometry(1.2, 0), 0xaaff00, false, [-5, -3, -4], 1));

      scene.add(geometryGroup);

      // ── AURORA NEBULA PLANES ─────────────────────────────
      const auroraColors = [0x9b4dff, 0x00ffe7, 0xff2d78, 0xc9a84c];
      for (let i = 0; i < 4; i++) {
        const geoPlane = new THREE.PlaneGeometry(60, 30, 1, 1);
        const matPlane = new THREE.MeshBasicMaterial({
          color: auroraColors[i],
          transparent: true,
          opacity: 0.018 + Math.random() * 0.012,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          side: THREE.DoubleSide,
        });
        const plane = new THREE.Mesh(geoPlane, matPlane);
        plane.rotation.x = Math.PI / 2 + (i * Math.PI) / 4;
        plane.rotation.z = (i * Math.PI) / 3;
        plane.position.y = -5 + i * 3;
        plane.position.z = -20;
        plane.userData = { speed: 0.001 + i * 0.0005, phase: i * Math.PI / 2 };
        auroras.push(plane);
        scene.add(plane);
      }

      // ── LIGHTS ───────────────────────────────────────────
      scene.add(new THREE.AmbientLight(0xffffff, 0.1));

      const pLight1 = new THREE.PointLight(0xc9a84c, 2, 30);
      pLight1.position.set(-8, 5, 5);
      scene.add(pLight1);

      const pLight2 = new THREE.PointLight(0x9b4dff, 2, 30);
      pLight2.position.set(8, -4, 3);
      scene.add(pLight2);

      const pLight3 = new THREE.PointLight(0x00ffe7, 1.5, 25);
      pLight3.position.set(0, 8, 2);
      scene.add(pLight3);

      // ── MOUSE TRACKING ───────────────────────────────────
      const onMouseMove = (e) => {
        targetMouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
        targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("mousemove", onMouseMove);

      // ── RESIZE ───────────────────────────────────────────
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);

      // ── ANIMATE ──────────────────────────────────────────
      function animate() {
        animId = requestAnimationFrame(animate);
        // Timer uses .getElapsed(), Clock uses .getElapsedTime()
        const t = clock.getElapsed ? clock.getElapsed() : clock.getElapsedTime();

        // Smooth mouse lerp
        mouseX += (targetMouseX - mouseX) * 0.04;
        mouseY += (targetMouseY - mouseY) * 0.04;

        // Rotate particle sphere slowly
        if (particles) {
          particles.rotation.y = t * 0.03 + mouseX * 0.05;
          particles.rotation.x = mouseY * 0.03;
        }

        // Float & rotate all geometric meshes
        if (geometryGroup) {
          geometryGroup.children.forEach((mesh) => {
            const d = mesh.userData;
            if (!d) return;
            mesh.rotation.x += d.rotSpeed.x;
            mesh.rotation.y += d.rotSpeed.y;
            mesh.rotation.z += d.rotSpeed.z;
            mesh.position.y += Math.sin(t * d.floatSpeed + d.floatOffset) * d.floatAmp * 0.005;
          });

          // Whole group responds to mouse
          geometryGroup.rotation.y += (mouseX * 0.08 - geometryGroup.rotation.y) * 0.02;
          geometryGroup.rotation.x += (-mouseY * 0.05 - geometryGroup.rotation.x) * 0.02;
        }

        // Aurora wave
        auroras.forEach((a) => {
          a.material.opacity = 0.018 + Math.sin(t * a.userData.speed * 120 + a.userData.phase) * 0.01;
          a.rotation.z += a.userData.speed * 0.3;
        });

        // Camera subtle sway
        camera.position.x += (mouseX * 0.8 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
      }

      animate();

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
      };
    }

    let cleanup;
    init().then((fn) => { cleanup = fn; });

    return () => {
      cancelAnimationFrame(animId);
      if (cleanup) cleanup();
      const canvas = document.getElementById("three-canvas");
      if (canvas) canvas.remove();
      if (renderer) renderer.dispose();
    };
  }, []);

  return null;
}
