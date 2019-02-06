export class Video {

  id: number;
  nombre: string;
  thumbnail: string;
  tipo: string;
  uploadedDate: string;
  duration: string;
  vistas: string;
  ruta: string

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.nombre = obj && obj.name || null;
    this.thumbnail = obj && obj.thumbnail || null;
    this.tipo = obj && obj.type || null;
    this.uploadedDate = obj && obj.createdAt || null;
    this.duration = obj && obj.time || null;
    this.vistas = obj && obj.views || 0;
    this.ruta = obj && obj.path || null;
  }
}