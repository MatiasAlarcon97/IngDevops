## IngDevops

## Documentación del Pipeline CI/CD y Monitoreo
En este proyecto integré un microservicio en Python con un pipeline CI/CD en GitHub Actions y herramientas de monitoreo en Kubernetes usando Istio. A continuación explico brevemente cómo se conectan estas partes y cómo ayudan en el desarrollo.

# Pipeline CI/CD (GitHub Actions)

Creé un workflow llamado CI que se ejecuta automáticamente cuando hago push o un pull request a la rama main.
Este pipeline:

Instala dependencias

Ejecuta los tests con pytest

Revisa cobertura mínima

Falla si algo está mal

Esto me asegura que el código que subo esté funcionando y probado antes de integrarlo.

# Políticas de Cumplimiento

Activé Branch Protection Rules para que:

No se pueda hacer merge si el pipeline falla

Solo se actualice main con pull requests

El código esté revisado antes de integrarse

Con esto se controla mejor la calidad del proyecto.

# Monitoreo en Kubernetes (Istio + Addons)

Instalé Istio y sus herramientas de monitoreo:

Kiali 

Prometheus 

Grafana 

Jaeger 

Después de desplegar el microservicio, pude ver en Kiali cómo el tráfico entraba por el Ingress Gateway y llegaba al servicio. Esto me permite verificar que el despliegue funciona y observar la salud del microservicio.

# Conclusión

Con este proyecto aprendí a combinar CI/CD con monitoreo en Kubernetes. Aunque el microservicio es simple, pude aplicar herramientas reales de DevOps para asegurar calidad y entender mejor cómo funciona el ciclo de desarrollo completo.