# 88 cocktail bar

אתר דף נחיתה לבר קוקטיילים.

## איך מעלים ל-Vercel
1. פותחים חשבון ב-GitHub.
2. יוצרים Repository חדש.
3. מעלים את כל הקבצים מתוך התיקייה הזאת.
4. נכנסים ל-Vercel.
5. Add New Project → בוחרים את ה-Repository → Deploy.

## בדיקה במחשב לפני העלאה
אם יש Node.js מותקן:
```bash
npm install
npm run dev
```

## שינוי תמונות
התמונות נמצאות בתיקייה:
```text
public/images
```

## שינוי מספר טלפון
בקובץ:
```text
src/App.jsx
```
למעלה יש:
```js
const phoneNumber = "0502434055";
const whatsappNumber = "972502434055";
```
