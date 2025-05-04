# Mini-CRM para Pequeñas Organizaciones

Este proyecto es un sistema básico de gestión de relaciones con clientes (Mini-CRM) desarrollado con Laravel 12. Su objetivo es ayudar a pequeñas empresas o asociaciones civiles a organizar la información de sus contactos y dar seguimiento a sus interacciones de forma centralizada y eficiente.

## Funcionalidades Principales

- Registro, edición y eliminación de contactos
- Visualización de lista de contactos
- Registro de interacciones (llamadas, reuniones, notas)
- Historial de interacciones por contacto
- Sistema de autenticación de usuarios
- Búsqueda y filtrado de contactos

## Tecnologías Utilizadas

- **Framework Backend**: Laravel 12 (PHP 8.2)
- **Frontend**: React, TailwindCSS
- **Base de Datos**: MySQL
- **Servidor Web**: Apache
- **Control de Versiones**: Git

## Requisitos

- PHP >= 8.2
- Composer
- MySQL o MariaDB
- Node.js y NPM

## Instalación

```bash
# Clona el repositorio
git clone https://github.com/cemendez/mini-crm.git
cd mini-crm

# Instala dependencias
composer install
npm install && npm run dev

# Configura tu entorno
cp .env.example .env
php artisan key:generate

# Configura la conexión a la base de datos en .env
# Luego ejecuta las migraciones
php artisan migrate

# Inicia el servidor
php artisan serve
```

## Licencia

Este proyecto se distribuye bajo la licencia MIT.
