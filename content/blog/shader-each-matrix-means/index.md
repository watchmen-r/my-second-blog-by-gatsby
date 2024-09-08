---
title: Each matrix means in vertex shader.
date: "2024-09-08T17:26:32.169Z"
description: Recently, I started learning three.js and am currently studying shaders. There are two types of shaders, vertex shaders and fragment shaders. In the vertex shader, there are three matrices used for calculations, but it's difficult to understand what each matrix represents. I want to summarize them.
featuredImage: ./3d_logo2.png
---

Recently, I started learning three.js and am currently studying shaders. There are two types of shaders vertex shaders and fragment shaders. In the vertex shader, there are three matrices used for calculations, but it's difficult to understand what each matrix represents. I want to summarize them.

# 3 matrices
We always find these 3 matrices.
- modelMatrix
- viewMatrix
- projectionMatrix

# Example code

I think these 3 matrices are used anytime in vertex shader. The example of code is like this.
```glsl
uniform vec2 uFrequency;
uniform float uTime;

varying vec2 vUv;
varying float vElevation;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float elevation = sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
  elevation += sin(modelPosition.x * uFrequency.x - uTime) * 0.1;

  modelPosition.z += elevation;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;

  gl_Position = projectionPosition;

  vUv = uv;
  vElevation = elevation;
}
```

# modelMatrix
This matrix transforms the position of an object from its local coordinate system (the object’s own space) to the world coordinate system. For example, if you have a 3D object, the modelMatrix determines where this object is placed and how it is rotated or scaled in the world.

# viewMatrix
This matrix moves the entire world so that the camera appears to be looking at it from a specific angle and distance. Essentially, it transforms positions from world space to camera space (the space as seen from the camera’s point of view).

# projectionMatrix
This matrix is used to simulate perspective. It projects the 3D positions onto the 2D screen, adjusting for things like depth (how far away objects are). For example, objects that are farther away appear smaller on the screen.

# conclusion
So, in the shader code, the position of a vertex is transformed step by step from its local object space to world space (using the modelMatrix), then to camera space (using the viewMatrix), and finally onto the 2D screen (using the projectionMatrix).
