# ASP.AppCore (Phần FE)

Dự án cục DQTV A-21
---

#### Tài liệu về mã nguồn

- [ABP.IO Docs](https://docs.abp.io/en/abp/latest/Getting-Started-Running-Solution?UI=NG&DB=EF&Tiered=No)

#### Bản thiết kế và đặc tả:

- [Giao diện](https://www.figma.com/file/wMSWsLTGTD8oaI2aUagg4v/C%E1%BB%A5c-DQTV?node-id=585%3A6043&viewport=317%2C340%2C0.015625)
- [Phần đặc tả](https://drive.google.com/drive/folders/1Ov00iTBiJXWgzUDd_QIQFSJclGx0vEDm)

# KHỞI CHẠY DỰ ÁN

Để khỏi chạy dự án, cần thực hiện theo các bước sau:

### 1.1. Clone source code về (Không thực hiện nếu đã làm trước đó, chuyển qua 1.2)

```bash
git clone http://git.mitechcenter.vn/nghia/asp.appcore.git
```

### 1.2. Nếu có thay đổi/cập nhật

```bash
git fetch origin master
```

```bash
git pull origin master
```

### 2. Cài đặt các package (Nếu chưa có node_modules)

```bash
npm install
```

### 3. Khởi chạy dự án

```bash
npm start
```

# TRIỂN KHAI

### 1. Thiết lập env cho product

Để triển khai phần này, cần triển khai BE trước và xác định tất cả các URL liên quan, sau đó sửa tại tệp:

```
AppCore/angular/src/environments/environment.prod.ts
```

Với các trường:

- baseUrl: Địa chỉ URL của dự án này (VD: dqtv.mitechcenter.vn hoặc mitechcenter.vn:4200)

- oAuthConfig.issuer: Trùng với SelfUrl của '**IdentityServer**'
- apis.default.url: Trùng với URL của '**HTTP API Host**'

### 2. Build dự án

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag
for a production build.

### 3. Deploy

Copy thư mục /dist và search google ^^
