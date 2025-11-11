# Guía Completa de Configuración de Servidor Web (Apache, MySQL, WordPress, Bind9, SSH, Moodle)

---

## 1. Conceptos básicos de servidor

Un servidor se compone de:

- **Hardware** (máquina física).
- **Sistema Operativo (SO)**.
- **Máquinas virtuales / software** donde se despliegan aplicaciones.

Servicios comunes:

- **SSH** → conexión remota.
- **Apache** → comunicación cliente-servidor vía HTTP.
- **MySQL/MariaDB** → base de datos.
- **PHP** → lenguaje de servidor.

Estándares:

- **LAMP** = Linux + Apache + MySQL + PHP.
- **WISA** = Windows + IIS + SQL Server + ASP.NET.

Comando para ver estado de servicios:

```bash
systemctl status nombre.service
```

---

## 2. Configuración de acceso SSH

Generar clave:

```bash
ssh-keygen
```

Copiar clave pública (`ssh-rsa...`) al archivo:

```bash
/etc/ssh/authorized_keys
```

Alternativa: usar **PuTTYgen** y copiar todo el texto generado.

Conexión SSH:

```bash
ssh -i clave usuario@localhost
```

---

## 3. Configuración de Apache y Virtual Hosts

Archivo hosts local (`/etc/hosts`):

```bash
127.0.0.1   localhost
127.0.1.1   javier-ub-serv
10.196.53.226 app.local
```

Crear VirtualHost (`/etc/apache2/sites-available/app1.conf`):

```apache
<VirtualHost *:80>
  ServerName app1.local
  DocumentRoot /var/www/html/app1
  ErrorLog ${APACHE_LOG_DIR}/app1_error.log
  CustomLog ${APACHE_LOG_DIR}/app1_access.log combined
</VirtualHost>
```

Activar sitio y reiniciar Apache:

```bash
sudo a2ensite app1.conf
sudo systemctl reload apache2.service
```

---

## 4. Instalación y configuración de MySQL + WordPress

### 4.1 Instalación de MySQL

```bash
sudo apt update
sudo apt install mysql-server
```

### 4.2 Configuración inicial de MySQL

Entrar en MySQL:

```bash
sudo mysql -u root -p
```

Crear base de datos y usuario:

```sql
CREATE DATABASE wordpress;
CREATE USER 'wordpress'@'localhost' IDENTIFIED BY 'tu_password_segura';
GRANT ALL PRIVILEGES ON wordpress.* TO 'wordpress'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

---

### 4.3 Instalación de WordPress

Documentación oficial: [Ubuntu Tutorial](https://ubuntu.com/tutorials/install-and-configure-wordpress#1-overview)

Dependencias necesarias:

```bash
sudo apt install apache2 php libapache2-mod-php php-mysql php-xml php-gd php-curl php-mbstring php-zip php-intl
```

Descargar e instalar:

```bash
wget https://wordpress.org/latest.tar.gz
tar -xzvf latest.tar.gz
sudo mv wordpress /var/www/html/
```

Configurar VirtualHost (`/etc/apache2/sites-available/wordpress.conf`):

```apache
<VirtualHost *:80>
  ServerName wordpress.home
  DocumentRoot /var/www/html/wordpress
  ErrorLog ${APACHE_LOG_DIR}/wordpress_error.log
  CustomLog ${APACHE_LOG_DIR}/wordpress_access.log combined
</VirtualHost>
```

Cambiar permisos:

```bash
sudo chown -R www-data:www-data /var/www/html/wordpress/
```

Configurar acceso externo en `/etc/hosts`:

```bash
10.196.53.226 wordpress.home
```

Editar `wp-config.php`:

```php
define( 'DB_NAME', 'wordpress' );
define( 'DB_USER', 'wordpress' );
define( 'DB_PASSWORD', 'tu_password_segura' );
define( 'DB_HOST', 'localhost' );
```

---

## 5. Directivas de Apache

Referencia: [Apache Quick Reference](https://httpd.apache.org/docs/trunk/es/mod/quickreference.html)

Archivo principal: `/etc/apache2/apache2.conf`.

Ejemplo de directivas de repositorio:

```apache
<Directory /var/www/html>
  Options -Indexes +FollowSymLinks
  AllowOverride All
  Require all granted
  Require ip 10.0.2.0/24
</Directory>
```

---

## 6. Instalación y configuración de BIND9 (DNS)

Documentación oficial: [Bind9 Directives](https://httpd.apache.org/docs/current/es/mod/directives.html)

### 6.1 Instalación

```bash
sudo apt install bind9
```

### 6.2 Configuración de red (`/etc/netplan/50-cloud-init.yaml`)

```yaml
network:
  version: 2
  ethernets:
    enp0s3:
      dhcp4: no
      addresses: [10.196.55.172/22]
      nameservers:
        addresses: [10.151.123.21,10.151.126.21]
      routes:
        - to: default
          via: 10.196.52.1
```

### 6.3 Configuración de zona directa (`/etc/bind/named.conf.local`)

```apache
zone "prueba" {
  type master;
  file "/etc/bind/db.prueba";
}
```

Ejemplo de `db.prueba`:

```dns
$TTL 604800
@ IN SOA ns.prueba. root.prueba. (
  2 ; Serial
  604800 ; Refresh
  86400 ; Retry
  2419200 ; Expire
  604800 ) ; Negative Cache TTL
;
@   IN NS ns.prueba.
ns  IN A 127.0.0.1
app IN A 10.196.55.175
www IN CNAME app.prueba.
@   IN AAAA ::1
```

---

## 7. Instalación de Moodle

Documentación oficial: [Moodle Installation Guide](https://docs.moodle.org/501/en/Step-by-step_Installation_Guide_for_Ubuntu)

### 7.1 Dependencias necesarias

```bash
sudo apt update
sudo apt install apache2 mysql-server php libapache2-mod-php \
php-mysql php-xmlrpc php-intl php-json php-curl php-zip php-gd php-xml php-mbstring \
git unzip
```

### 7.2 Configuración de MySQL para Moodle

Entrar en MySQL:

```bash
sudo mysql -u root -p
```

Crear base de datos y usuario:

```sql
CREATE DATABASE moodle DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'moodleuser'@'localhost' IDENTIFIED BY 'tu_password_segura';
GRANT ALL PRIVILEGES ON moodle.* TO 'moodleuser'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

### 7.3 Descargar Moodle

```bash
cd /var/www/html
sudo git clone -b MOODLE_401_STABLE git://git.moodle.org/moodle.git
sudo chown -R www-data:www-data moodle
sudo chmod -R 755 moodle
```

### 7.4 Configurar VirtualHost para Moodle

Crear archivo `/etc/apache2/sites-available/moodle.conf`:

```apache
<VirtualHost *:80>
    ServerAdmin admin@moodle.local
    DocumentRoot /var/www/html/moodle
    ServerName moodle.local
    ErrorLog ${APACHE_LOG_DIR}/moodle_error.log
    CustomLog ${APACHE_LOG_DIR}/moodle_access.log combined
</VirtualHost>
```

Activar sitio y reiniciar Apache:

```bash
sudo a2ensite moodle.conf
sudo systemctl reload apache2.service
```

---

## 13. Instalación y configuración de Nginx

Nginx es un servidor web ligero y muy eficiente, que puede usarse como alternativa a Apache o como proxy inverso delante de Apache/PHP-FPM.

### 13.1 Instalación de Nginx

```bash
sudo apt update
sudo apt -y install nginx
sudo systemctl enable --now nginx
sudo systemctl status nginx
```

### 13.2 Configuración básica de Nginx

El archivo principal de configuración está en `/etc/nginx/nginx.conf`.  
Los sitios se configuran en `/etc/nginx/sites-available/` y se habilitan con enlaces simbólicos en `/etc/nginx/sites-enabled/`.

### 13.3 Crear un sitio de prueba

```bash
sudo nano /etc/nginx/sites-available/app1
```

Contenido:

```nginx
server {
    listen 80;
    server_name app1.local;

    root /var/www/app1;
    index index.php index.html;

    access_log /var/log/nginx/app1_access.log;
    error_log /var/log/nginx/app1_error.log;

    location / {
        try_files $uri $uri/ =404;
    }

    # Configuración para PHP-FPM
    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
    }
}
```

Activar sitio:

```bash
sudo mkdir -p /var/www/app1
echo "hola desde Nginx" | sudo tee /var/www/app1/index.html
sudo ln -s /etc/nginx/sites-available/app1 /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 13.4 Instalar PHP-FPM para Nginx

Nginx no usa `libapache2-mod-php`, sino **PHP-FPM**:

```bash
sudo apt -y install php-fpm php-mysql php-xml php-gd php-curl php-mbstring php-zip php-intl
sudo systemctl enable --now php8.1-fpm
sudo systemctl status php8.1-fpm
```

### 13.5 Probar PHP con Nginx

```bash
sudo nano /var/www/app1/info.php
```

Contenido:

```php
<?php
phpinfo();
?>
```

Accede a `http://app1.local/info.php` para verificar que PHP funciona con Nginx.

### 13.6 Configuración de seguridad básica

- Deshabilitar listado de directorios:

```nginx
autoindex off;
```

- Limitar tamaño de subida:

```nginx
client_max_body_size 64M;

```nginx
- Recargar configuración:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

# ✅ Fin de la guía

Este documento incluye todos los contextos, configuraciones y comandos necesarios para:

- Configurar SSH.
- Instalar y configurar Apache.
- Instalar y configurar MySQL + WordPress.
- Definir directivas de Apache.
- Instalar y configurar Bind9 como servidor DNS.
- Instalar y configurar Moodle con todas sus dependencias.
