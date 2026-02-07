# -------------------------------------------------------------
# Stage 1: Build & serve the static site with nginx:alpine
# -------------------------------------------------------------
FROM nginx:alpine AS prod

# Nginx serves static files from /usr/share/nginx/html
# Copy every file from the build context to that directory
COPY index.html style.css script.js video.mp4 /usr/share/nginx/html/

# Expose the HTTP port (80)
EXPOSE 80

# Keep the container alive by running nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]