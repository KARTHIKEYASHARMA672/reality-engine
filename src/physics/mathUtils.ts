import { Vector3D } from '../types/physics';

export const vec3 = {
  create: (x = 0, y = 0, z = 0): Vector3D => ({ x, y, z }),
  
  clone: (v: Vector3D): Vector3D => ({ x: v.x, y: v.y, z: v.z }),
  
  set: (out: Vector3D, x: number, y: number, z: number): Vector3D => {
    out.x = x;
    out.y = y;
    out.z = z;
    return out;
  },

  add: (a: Vector3D, b: Vector3D): Vector3D => ({
    x: a.x + b.x,
    y: a.y + b.y,
    z: a.z + b.z,
  }),

  sub: (a: Vector3D, b: Vector3D): Vector3D => ({
    x: a.x - b.x,
    y: a.y - b.y,
    z: a.z - b.z,
  }),

  scale: (v: Vector3D, s: number): Vector3D => ({
    x: v.x * s,
    y: v.y * s,
    z: v.z * s,
  }),

  dot: (a: Vector3D, b: Vector3D): number => a.x * b.x + a.y * b.y + a.z * b.z,

  cross: (a: Vector3D, b: Vector3D): Vector3D => ({
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x,
  }),

  lengthSq: (v: Vector3D): number => v.x * v.x + v.y * v.y + v.z * v.z,

  length: (v: Vector3D): number => Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z),

  distance: (a: Vector3D, b: Vector3D): number => {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const dz = a.z - b.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  },

  normalize: (v: Vector3D): Vector3D => {
    const len = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
    if (len === 0) return { x: 0, y: 0, z: 0 };
    return { x: v.x / len, y: v.y / len, z: v.z / len };
  },

  lerp: (a: Vector3D, b: Vector3D, t: number): Vector3D => ({
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
    z: a.z + (b.z - a.z) * t,
  }),
};
