#!/bin/bash
# Script para copiar el frontend de src a docs para despliegue
# Copia todos los archivos y carpetas necesarios, sobrescribiendo los existentes en docs

SRC_DIR="$(dirname "$0")/src"
DEST_DIR="$(dirname "$0")/docs"

# Crear el directorio destino si no existe
mkdir -p "$DEST_DIR"

# Copiar archivos y carpetas, excluyendo archivos temporales y de backup
rsync -av --delete --exclude='*.swp' --exclude='*.tmp' --exclude='.*' "$SRC_DIR/" "$DEST_DIR/"

echo "Copia completada de $SRC_DIR a $DEST_DIR."
