db.createCollection('usuarios', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'usuarios',
        required: ['id_usuario', 'email', 'password', 'nombre_usuario', 'fecha_nacimiento', 'sexo', 'pais', 'CP'],
        properties: {
          id_usuario: {
            bsonType: 'objectId'
          },
          email: {
            bsonType: 'string'
          },
          password: {
            bsonType: 'string'
          },
          nombre_usuario: {
            bsonType: 'string'
          },
          fecha_nacimiento: {
            bsonType: 'date'
          },
          sexo: {
            enum: ['M', 'F']
          },
          pais: {
            bsonType: 'string'
          },
          CP: {
            bsonType: 'string'
          },
          suscripciones: {
            bsonType: 'array',
            items: {
              title: 'object',
              properties: {
                id_canal: {
                  bsonType: 'int'
                }
              }
            }
          }
        }
      }
    }
  });
  db.createCollection('Videos', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Videos',
        required: ['id_video', 'titulo', 'descripcion', 'tamaño', 'nombre_archivo', 'duracion', 'miniatura', 'numero_reproducciones', 'likes', 'dislikes', 'publicado_por', 'estado', 'etiquetas', 'fecha_publicacion'],
        properties: {
          id_video: {
            bsonType: 'objectId'
          },
          titulo: {
            bsonType: 'string'
          },
          descripcion: {
            bsonType: 'string'
          },
          tamaño: {
            bsonType: 'string'
          },
          nombre_archivo: {
            bsonType: 'string'
          },
          duracion: {
            bsonType: 'long'
          },
          miniatura: {
            bsonType: 'string'
          },
          numero_reproducciones: {
            bsonType: 'int'
          },
          likes: {
            bsonType: 'int'
          },
          dislikes: {
            bsonType: 'int'
          },
          publicado_por: {
            bsonType: 'object',
            title: 'object',
            required: ['id_usuario', 'nombre_usuario'],
            properties: {
              id_usuario: {
                bsonType: 'int'
              },
              nombre_usuario: {
                bsonType: 'string'
              },
              numero_suscriptores: {
                bsonType: 'int'
              }
            }
          },
          estado: {
            enum: ['publico', 'oculto', 'privado']
          },
          etiquetas: {
            bsonType: 'array',
            items: {
              title: 'object',
              required: ['id_etiqueta', 'nombre_etiqueta'],
              properties: {
                id_etiqueta: {
                  bsonType: 'int'
                },
                nombre_etiqueta: {
                  bsonType: 'int'
                }
              }
            }
          },
          fecha_publicacion: {
            bsonType: 'timestamp'
          },
          comentarios: {
            bsonType: 'array',
            items: {
              title: 'object',
              properties: {
                id_comenteario: {
                  bsonType: 'int'
                },
                nombre_usuario: {
                  bsonType: 'string'
                },
                text: {
                  bsonType: 'string'
                },
                fecha_publicacion: {
                  bsonType: 'timestamp'
                },
                respuestas: {
                  bsonType: 'array',
                  items: {
                    title: 'object',
                    properties: {
                      id_comentario: {
                        bsonType: 'int'
                      },
                      nombre_usuario: {
                        bsonType: 'int'
                      },
                      text: {
                        bsonType: 'int'
                      },
                      fecha_hora: {
                        bsonType: 'timestamp'
                      },
                      likes: {
                        bsonType: 'int'
                      },
                      dislikes: {
                        bsonType: 'int'
                      }
                    }
                  }
                },
                likes: {
                  bsonType: 'int'
                },
                dislikes: {
                  bsonType: 'int'
                }
              }
            }
          },
          play_list: {
            bsonType: 'array',
            items: {
              title: 'object',
              properties: {
                id_playlist: {
                  bsonType: 'int'
                },
                nombre_playlist: {
                  bsonType: 'string'
                },
                id_video: {
                  bsonType: 'string'
                },
                titulo: {
                  bsonType: 'string'
                },
                miniatura: {
                  bsonType: 'string'
                }
              }
            }
          }
        }
      }
    }
  });
  db.createCollection('canales', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'canales',
        required: ['id_canal', 'nombre_canal', 'descripcion'],
        properties: {
          id_canal: {
            bsonType: 'int'
          },
          id_usuario: {
            bsonType: 'int'
          },
          nombre_canal: {
            bsonType: 'string'
          },
          descripcion: {
            bsonType: 'string'
          },
          fecha_creacion: {
            bsonType: 'date'
          }
        }
      }
    }
  });
  db.createCollection('registro_Likes', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'registro_Likes',
        required: ['id_usuario', 'id_video', 'fecha_hora'],
        properties: {
          id_usuario: {
            bsonType: 'int'
          },
          id_video: {
            bsonType: 'int'
          },
          fecha_hora: {
            bsonType: 'timestamp'
          },
          tipo: {
            enum: ['like', 'dislike']
          }
        }
      }
    }
  });
  db.createCollection('playlist', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'playlist',
        required: ['id_playlist'],
        properties: {
          id_playlist: {
            bsonType: 'objectId'
          },
          videos: {
            bsonType: 'array',
            items: {
              title: 'object',
              properties: {
                id_video: {
                  bsonType: 'int'
                }
              }
            }
          },
          nombre: {
            bsonType: 'string'
          },
          fecha_creacion: {
            bsonType: 'date'
          },
          estado: {
            enum: ['publica', 'privada']
          }
        }
      }
    }
  });
  db.createCollection('Comentarios', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Comentarios',
        required: ['id_comentario'],
        properties: {
          id_comentario: {
            bsonType: 'objectId'
          },
          texto: {
            bsonType: 'string'
          },
          fecha_hora: {
            bsonType: 'timestamp'
          }
        }
      }
    }
  });