db.createCollection('clientes', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'clientes',
        required: ['id_cliente', 'nombre', 'apellidos', 'direccion', 'telefono'],
        properties: {
          id_cliente: {
            bsonType: 'objectId'
          },
          nombre: {
            bsonType: 'string'
          },
          apellidos: {
            bsonType: 'string'
          },
          direccion: {
            bsonType: 'object',
            title: 'object',
            properties: {
              calle: {
                bsonType: 'string'
              },
              numero: {
                bsonType: 'int'
              },
              piso: {
                bsonType: 'string'
              },
              puerta: {
                bsonType: 'string'
              },
              codigo_postal: {
                bsonType: 'string'
              },
              localidad: {
                bsonType: 'string'
              },
              provincia: {
                bsonType: 'string'
              }
            }
          },
          telefono: {
            bsonType: 'string'
          }
        }
      }
    }
  });
  db.createCollection('comandas', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'comandas',
        required: ['id_comanda', 'fecha', 'tipo_comanda', 'productos', 'precio_total', 'nota'],
        properties: {
          id_comanda: {
            bsonType: 'objectId'
          },
          fecha: {
            bsonType: 'timestamp'
          },
          tipo_comanda: {
            bsonType: 'object',
            title: 'object',
            properties: {
              recogida_tienda: {
                bsonType: 'bool'
              },
              domicilio: {
                bsonType: 'object',
                title: 'object',
                properties: {
                  calle: {
                    bsonType: 'string'
                  },
                  numero: {
                    bsonType: 'int'
                  },
                  piso: {
                    bsonType: 'string'
                  },
                  telefono: {
                    bsonType: 'string'
                  },
                  notas: {
                    bsonType: 'string'
                  }
                }
              }
            }
          },
          productos: {
            bsonType: 'array',
            items: {
              title: 'object',
              required: ['id_producto', 'tipo', 'precio', 'nombre'],
              properties: {
                id_producto: {
                  bsonType: 'int'
                },
                cantidad: {
                  bsonType: 'string'
                },
                tipo: {
                  enum: ['pizza', 'hamburguesa', 'bebida']
                },
                precio: {
                  bsonType: 'string'
                },
                nombre: {
                  bsonType: 'string'
                }
              }
            }
          },
          precio_total: {
            bsonType: 'decimal'
          },
          nota: {
            bsonType: 'string'
          },
          id_tienda: {
            bsonType: 'int'
          },
          nombre_sucursal: {
            bsonType: 'string'
          },
          cliente: {
            bsonType: 'object',
            title: 'object',
            properties: {
              id_cliente: {
                bsonType: 'int'
              },
              nombre: {
                bsonType: 'string'
              }
            }
          },
          entregado: {
            bsonType: 'bool'
          },
          pagado: {
            bsonType: 'bool'
          }
        }
      }
    }
  });
  db.createCollection('categorias', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'categorias',
        required: ['id_categoria'],
        properties: {
          id_categoria: {
            bsonType: 'objectId'
          },
          nombre: {
            bsonType: 'string'
          }
        }
      }
    }
  });
  db.createCollection('tienda', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'tienda',
        required: ['id_tienda'],
        properties: {
          id_tienda: {
            bsonType: 'objectId'
          },
          nombre_sucursal: {
            bsonType: 'string'
          },
          direccion: {
            bsonType: 'object',
            title: 'object',
            properties: {
              calle: {
                bsonType: 'string'
              },
              numero: {
                bsonType: 'string'
              },
              codigo_postal: {
                bsonType: 'string'
              },
              localidad: {
                bsonType: 'string'
              },
              provincia: {
                bsonType: 'string'
              }
            }
          },
          empleados: {
            bsonType: 'array',
            items: {
              title: 'object',
              properties: {
                id_empleado: {
                  bsonType: 'int'
                },
                nombre: {
                  bsonType: 'string'
                },
                apellidos: {
                  bsonType: 'string'
                },
                NIF: {
                  bsonType: 'string'
                },
                telefono: {
                  bsonType: 'string'
                },
                tipo_empleado: {
                  enum: ['cocinero', 'repartidor']
                }
              }
            }
          }
        }
      }
    }
  });
  db.createCollection('producto', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'producto',
        required: ['id_producto'],
        properties: {
          id_producto: {
            bsonType: 'objectId'
          },
          nombre: {
            bsonType: 'string'
          },
          tipo: {
            enum: ['pizza', 'hamburguesa', 'bebida']
          },
          precio: {
            bsonType: 'decimal'
          },
          descripcion: {
            bsonType: 'string'
          },
          imagen: {
            bsonType: 'string'
          }
        }
      }
    }
  });
  db.createCollection('entregas', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'entregas',
        required: ['id_entrega'],
        properties: {
          id_entrega: {
            bsonType: 'objectId'
          },
          repartidor: {
            bsonType: 'int'
          },
          fechayhora: {
            bsonType: 'timestamp'
          }
        }
      }
    }
  });