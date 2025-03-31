# Simple Notes API

API server สำหรับแอพจัดการโน้ตแบบง่ายๆ ด้วย Node.js และ MongoDB

## เกี่ยวกับโปรเจค

โปรเจคนี้เป็น RESTful API สำหรับแอพจัดการโน้ต ที่ใช้ Node.js, Express, และ MongoDB

## การติดตั้ง

1. Clone repository:

```bash
git clone https://github.com/witoon-skydea/simple-notes-api.git
cd simple-notes-api
```

2. ติดตั้ง dependencies:

```bash
npm install
```

3. สร้างไฟล์ .env ในรูปแบบนี้:

```
PORT=3000
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/
NODE_ENV=development
```

## การใช้งาน

### เริ่มต้นการทำงานในโหมด Development:

```bash
npm run dev
```

### เริ่มต้นการทำงานในโหมด Production:

```bash
npm start
```

## API Endpoints

### Notes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/notes | ดึงข้อมูลโน้ตทั้งหมด |
| GET    | /api/notes/:id | ดึงข้อมูลโน้ตตาม ID |
| POST   | /api/notes | สร้างโน้ตใหม่ |
| PUT    | /api/notes/:id | อัปเดตโน้ตตาม ID |
| DELETE | /api/notes/:id | ลบโน้ตตาม ID |
| GET    | /api/notes/search?query=keyword | ค้นหาโน้ตด้วยคำสำคัญ |

## โครงสร้างของโน้ต

```json
{
  "title": "ชื่อโน้ต",
  "content": "เนื้อหาของโน้ต",
  "category": "หมวดหมู่",
  "isPinned": false,
  "tags": ["tag1", "tag2"]
}
```

## การดำเนินงานต่อไป

- เพิ่มระบบ Authentication
- เพิ่มระบบ User Management
- เพิ่มความสามารถในการแชร์โน้ต
- เพิ่มระบบการจัดการไฟล์แนบ