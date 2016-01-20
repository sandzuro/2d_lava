"use strict";

class Shaders {
	constructor() {

	}

	getParticleVertShader() {
		var shader = [
			'void main() {',
				'vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );',
				'gl_PointSize = 60.0;',
				'gl_Position = projectionMatrix * mvPosition;',
			'}'
		];
		return shader.join('');
	}

	getParticleFragShader() {
		var shader = [
			'uniform sampler2D texture;',
			'void main() {',
				'gl_FragColor = texture2D(texture, gl_PointCoord );',
			'}'
		];
		return shader.join('');
	}
}