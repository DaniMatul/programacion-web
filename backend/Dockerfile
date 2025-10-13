# Imagen base de Python
FROM python:3.12-slim

# Configura el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo de dependencias
COPY requirements.txt .

# Instala las dependencias de Python
RUN pip install --no-cache-dir -r requirements.txt

# Copia todo el código del proyecto
COPY . .

# Exponer el puerto del servidor Django
EXPOSE 8000

# Comando que corre migraciones y luego arranca el servidor
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
