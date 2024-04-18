'use strict';

// シーン、カメラ、レンダラーを設定
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// オブジェクトをロード
const loader = new THREE.OBJLoader();
loader.load('../3dcg/3-71_v6.obj', (object) => {
    scene.add(object);
});

// 軌道制御を追加
const controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.z = 5;

// ライトを追加
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);

// アニメーションループ
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();