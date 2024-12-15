# Sử dụng Node.js 18.x để build ứng dụng
FROM node:18 AS build
WORKDIR /app

# Copy package.json và package-lock.json để cài đặt dependencies
COPY package*.json ./

# Cài đặt Angular CLI toàn cục
RUN npm install -g @angular/cli

# Cài đặt các dependencies của dự án với --legacy-peer-deps
RUN npm install --legacy-peer-deps

# Cài đặt @fortawesome/angular-fontawesome
RUN npm install @fortawesome/angular-fontawesome --save --legacy-peer-deps

# Copy toàn bộ mã nguồn vào container
COPY . .

# Cập nhật Angular nếu cần (tuỳ chọn)
RUN ng update @angular/core @angular/cli

# Build ứng dụng Angular
RUN npm run build --prod

# Sử dụng NGINX để phục vụ ứng dụng
FROM nginx:1.21
COPY --from=build /app/dist/frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
