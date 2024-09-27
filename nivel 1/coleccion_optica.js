db.createCollection('Provedores', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Provedores',
      required: ['_id_provedores', 'nombre', 'direccion', 'telefono', 'nif'],
      properties: {
        _id_provedores: {
          bsonType: 'objectId'
        },
        nombre: {
          bsonType: 'string'
        },
        direccion: {
          bsonType: 'object',
          title: 'object',
          required: ['calle', 'número', 'ciudad', 'codigo_postal', 'pais'],
          properties: {
            calle: {
              bsonType: 'string'
            },
            número: {
              bsonType: 'int'
            },
            piso: {
              bsonType: 'string'
            },
            puerta: {
              bsonType: 'string'
            },
            ciudad: {
              bsonType: 'string'
            },
            codigo_postal: {
              bsonType: 'string'
            },
            pais: {
              bsonType: 'string'
            }
          }
        },
        telefono: {
          bsonType: 'int'
        },
        fax: {
          bsonType: 'int'
        },
        nif: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.createCollection('gafas', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'gafas',
      required: ['_id_gafas', 'marca', 'graduacion', 'montura', 'precio', 'clientes', 'empleado'],
      properties: {
        _id_gafas: {
          bsonType: 'objectId'
        },
        marca: {
          bsonType: 'string'
        },
        graduacion: {
          bsonType: 'object',
          title: 'object',
          required: ['ojoderecho', 'ojoizquierdo'],
          properties: {
            ojoderecho: {
              bsonType: 'decimal'
            },
            ojoizquierdo: {
              bsonType: 'decimal'
            }
          }
        },
        montura: {
          bsonType: 'object',
          title: 'object',
          required: ['tipo', 'color'],
          properties: {
            tipo: {
              enum: ['pasta', 'flotante', 'metalica'],
              default: 'pasta'
            },
            color: {
              bsonType: 'string'
            }
          }
        },
        precio: {
          bsonType: 'decimal'
        },
        clientes: {
          bsonType: 'objectId'
        },
        empleado: {
          bsonType: 'objectId'
        },
        color_vidrios: {
          bsonType: 'object',
          title: 'object',
          properties: {
            color_derecho: {
              bsonType: 'string'
            },
            color_izquierdo: {
              bsonType: 'string'
            }
          }
        },
        comprado_por: {
          bsonType: 'array',
          items: {
            title: 'object',
            properties: {
              cliente: {
                bsonType: 'object',
                title: 'object',
                properties: {
                  id_cliente: {
                    bsonType: 'objectId'
                  },
                  nombre: {
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
                      piso: {
                        bsonType: 'string'
                      },
                      puerta: {
                        bsonType: 'string'
                      },
                      ciudad: {
                        bsonType: 'string'
                      }
                    }
                  },
                  telefono: {
                    bsonType: 'string'
                  },
                  email: {
                    bsonType: 'string'
                  },
                  fechaderegistro: {
                    bsonType: 'date'
                  },
                  recomendado: {
                    bsonType: 'object',
                    title: 'object',
                    properties: {
                      _id_cliente: {
                        bsonType: 'objectId'
                      }
                    }
                  }
                }
              }
            }
          }
        },
        proveedor: {
          bsonType: 'object',
          title: 'object',
          properties: {
            _id_provedor: {
              bsonType: 'objectId'
            },
            nombre: {
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
                ciudad: {
                  bsonType: 'string'
                },
                codigo_postal: {
                  bsonType: 'string'
                },
                pais: {
                  bsonType: 'string'
                }
              }
            },
            telefono: {
              bsonType: 'string'
            },
            fax: {
              bsonType: 'string'
            },
            nif: {
              bsonType: 'string'
            }
          }
        }
      }
    }
  }
});
db.createCollection('clientes', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'clientes',
      required: ['_id_clientes', 'nombre', 'direccion', 'telefono', 'email', 'fechaderegistro', 'recomendado'],
      properties: {
        _id_clientes: {
          bsonType: 'objectId'
        },
        nombre: {
          bsonType: 'string'
        },
        direccion: {
          bsonType: 'object',
          title: 'object',
          required: ['calle', 'numero', 'ciudad', 'codigopostal', 'pais'],
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
            ciudad: {
              bsonType: 'string'
            },
            codigopostal: {
              bsonType: 'int'
            },
            pais: {
              bsonType: 'string'
            }
          }
        },
        telefono: {
          bsonType: 'string'
        },
        email: {
          bsonType: 'string'
        },
        fechaderegistro: {
          bsonType: 'date'
        },
        recomendado: {
          bsonType: 'object',
          title: 'object',
          properties: {
            _id_cliente: {
              bsonType: 'objectId'
            }
          }
        },
        gafas: {
          bsonType: 'array',
          items: {
            title: 'object',
            properties: {
              _id_gafas: {
                bsonType: 'objectId'
              },
              marca: {
                bsonType: 'string'
              },
              graduacion: {
                bsonType: 'object',
                title: 'object',
                properties: {
                  ojoderecho: {
                    bsonType: 'decimal'
                  },
                  ojoizquierdo: {
                    bsonType: 'decimal'
                  }
                }
              },
              color_vidrios: {
                bsonType: 'object',
                title: 'object',
                properties: {
                  color_derecho: {
                    bsonType: 'string'
                  },
                  color_izquierdo: {
                    bsonType: 'string'
                  }
                }
              },
              montura: {
                bsonType: 'object',
                title: 'object',
                properties: {
                  tipo: {
                    enum: ['pasta', 'metalica', 'flotante']
                  },
                  color: {
                    bsonType: 'string'
                  }
                }
              },
              precio: {
                bsonType: 'decimal'
              }
            }
          }
        }
      }
    }
  }
});
db.createCollection('empleado', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'empleado',
      required: ['_id_empleado', 'nombre'],
      properties: {
        _id_empleado: {
          bsonType: 'objectId'
        },
        nombre: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.createCollection('ventas', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'ventas',
      required: ['_id_ventas'],
      properties: {
        _id_ventas: {
          bsonType: 'int'
        },
        empleado: {
          bsonType: 'object',
          title: 'object',
          properties: {
            _id_empleado: {
              bsonType: 'int'
            },
            nombre: {
              bsonType: 'string'
            }
          }
        },
        fecha: {
          bsonType: 'timestamp'
        },
        gafas: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['_id_gafas'],
            properties: {
              _id_gafas: {
                bsonType: 'objectId'
              }

            }
          }
        },
        _id_cliente: {
          bsonType: 'objectId'
        }
      }
    }
  }
});