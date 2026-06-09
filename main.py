from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import json
from pathlib import Path

app = FastAPI()

# Статика и шаблоны
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# Загрузка данных
def load_data(filename):
    path = Path("data") / filename
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/videos", response_class=HTMLResponse)
async def videos(request: Request):
    data = load_data("videos.json")
    return templates.TemplateResponse("videos.html", {
        "request": request,
        "items": data
    })

@app.get("/images", response_class=HTMLResponse)
async def images(request: Request):
    data = load_data("images.json")
    return templates.TemplateResponse("images.html", {
        "request": request,
        "items": data
    })

@app.get("/music", response_class=HTMLResponse)
async def music(request: Request):
    data = load_data("music.json")
    return templates.TemplateResponse("music.html", {
        "request": request,
        "items": data
    })